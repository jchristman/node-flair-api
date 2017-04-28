import _ from 'lodash';
import Models from './index.js';

export default class Model {
    type = '';
    attribute_types = {};
    relationship_types = {};
    attributes = {};
    relationships = {};

    constructor(client, data, fill = false) {
        if (client === null) // We do this to get the type
            return;
        this.client = client;
        this.data = data;
        this.fill = fill;
    }

    init() {
        this.initAttributes(this.data.attributes);
        this.initRelationships(this.data.relationships, this.fill);

        return this;
    }

    initAttributes(attributes) {
        Object.keys(attributes).forEach(key => {
                if (!(key in this.attribute_types)) {
                    let type = Array.isArray(attributes[key]) ? `[${attributes[key][0]}]` : typeof attributes[key];
                    console.error(`API changed. Please notify via https://github.com/jchristman/node-flair-api/issues that "New attribute --- ${key}: ${type} in ${this.type}"`);
                    return;
                }
                
                this.attributes[key] = attributes[key]
        });
    }

    initRelationships(relationships, fill) {
        Object.keys(relationships).forEach(key => {
            const rel = relationships[key];
            if (fill) {
                if (!(key in this.relationship_types)) {
                    console.error(`API changed. Please notify via https://github.com/jchristman/node-flair-api/issues that "New relationship --- ${key} in ${this.type}"`);
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
    }

    fillRelationship(rel_key, item) {
        const type = Model.getType(item);
        const { id } = item;
            
        console.log(type, item, rel_key);
        if (item.type === 'users')
            return;
        this.relationships.key = this.client.get(item.type, { id });
    }

    static getType(data) {
        return _.find(Models, (model) => {
             return new model(null).type === data.type;
        });
    }
}
