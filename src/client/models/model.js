export default class Model {
    static type = '';
    static relationship_types = {};
    attributes = {};
    relationships = {};

    constructor(data, fill = false) {
        Object.keys(data.attributes).forEach(key => { this.attributes[key] = data.attributes[key] });
        Object.keys(data.relationships).forEach(key => {
            console.log(data.relationships[key]);
            this.relationships[key] = data.relationships[key]
        });
    }
}
