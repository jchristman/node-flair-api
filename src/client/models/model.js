export default class Model {
    type = '';
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
        Object.keys(attributes).forEach(key => { this.attributes[key] = attributes[key] });
    }

    initRelationships(relationships, fill) {
        Object.keys(relationships).forEach(key => {
            if (fill) {
                if (!(key in this.relationship_types)) {
                    console.error(`API changed. Please notify via https://github.com/jchristman/node-flair-api/issues that "New relationship: ${key} in ${this.type}"`);
                    return;
                }



            }
        });
    }
}
