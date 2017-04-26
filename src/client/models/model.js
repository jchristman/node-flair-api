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
            if (fill) {
                if (!(key in this.relationship_types)) {
                    console.error(`API changed. Please notify via https://github.com/jchristman/node-flair-api/issues that "New relationship --- ${key} in ${this.type}"`);
                    return;
                }

                if (relationships[key].data !== undefined) {
                    if (Array.isArray(relationships[key].data)) {
                        for (const item of relationships[key].data) {
                            const type = Model.getType(item);
                            const link = relationships[key].links.related;

                            console.log(type, link, relationships[key].data);
                        }
                    } else {
                        const type = Model.getType(relationships[key].data);
                        const link = relationships[key].links.related

                        console.log(type, link, relationships[key].data);
                    }
                }
            }
        });
    }

    static getType(data) {
        return _.find(Models, (model) => {
             return new model(null).type === data.type;
        });
    }
}
