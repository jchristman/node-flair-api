import _ from 'lodash';
import Models from './index.js';
import { types_map } from './index.js';

export default class Model {
    static cache = {};

    constructor(client, data, fill = false) {
        this.client = client;
        this.data = data;
        this.type = Model.getType(data); // A class, not a string
        this.fill = fill;
        this.id = this.data.id;

        this.type.cache[this.id] = this; // Cache this object into the static cache for the class type.

        // Annoying but necessary because of the order of constructorness...
        this.attribute_types = this.type.attribute_types;
        this.relationship_types = this.type.relationship_types;
        this.attributes = {};
        this.relationships = {};

        console.log(`Initializing ${this.type.name} ::: ${this.id}`);

        /*if (this.type.name === 'Devices') {
            console.log(JSON.stringify(this.data, null, 4));
            return;
        }*/

        this.initAttributes(this.data.attributes);
        this.initRelationships(this.data.relationships, this.fill);

        console.log(`Finished with ${this.type.name} ::: ${this.id}`);
    }

    initAttributes(attributes) {
        _.keys(attributes).forEach(key => {
                if (!(key in this.attribute_types)) {
                    let type = Array.isArray(attributes[key]) ? `[${attributes[key][0]}]` : typeof attributes[key];
                    console.error(`|-> API changed. Please notify via https://github.com/jchristman/node-flair-api/issues that "New attribute --- ${key}: ${type} in ${this.type.name}"`);
                    return;
                }
                
                this.attributes[key] = attributes[key]
        });
        
        _.keys(this.attribute_types).forEach(key => {
            if (this.attributes[key] === undefined) {
                //console.warn(`${key} had no value in ${this.type.name}`);
            }
        });
    }

    initRelationships(relationships, fill) {
        _.keys(relationships).forEach(key => {
            const rel = relationships[key];
            if (fill) {
                if (!(key in this.relationship_types)) {
                    console.error(`|-> API changed. Please notify via https://github.com/jchristman/node-flair-api/issues that "New relationship --- ${key} in ${this.type.name}"`);
                    return;
                }

                if (rel.data !== undefined) {
                    if (Array.isArray(rel.data)) {
                        for (const item of rel.data) {
                            this.fillRelationship(key, item);
                        }
                    } else {
                        this.fillRelationship(key, rel.data);
                    }
                }
            }
        });
        
        _.keys(this.relationship_types).forEach(key => {
            if (this.relationships[key] === undefined) {
                //console.warn(`${key} had no value in ${this.type.name}`);
            }
        });
    }

    fillRelationship(rel_key, item) {
        if (item === null) {
            this.relationships[rel_key] = null;
            return;
        }

        const type = Model.getType(item); // Class
        const { id } = item;

            
        // If we haven't built a type for it yet, don't spider
        if (type === undefined) {
            this.relationships[rel_key] = null;
        } else {
            // Check to see if we have the result cached. else, get it.
            let cached = this.lookup(type, id);
            if (cached !== undefined) {
                const waitForResult = setInterval(() => {
                    cached = this.lookup(type, id);
                    if (cached !== null) {
                        this.relationships[rel_key] = cached;
                        clearInterval(waitForResult);
                    }
                }, 100);
            } else {
                console.log(`Getting ${type.name} ::: ${id}`);
                type.cache[id] = null; // Set something to prevent race conditions on gets.
                this.relationships[rel_key] = this.client.get(item.type, { id });
            }
        }
    }

    lookup(type, id) {
        return type.cache[id];
    }

    static getType(data) {
        return types_map[data.type];
    }
}
