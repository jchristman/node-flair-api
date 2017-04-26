import Model from './model.js';
import Structures from './structures.js';

export default class Users extends Model {
    type = 'users';
    attribute_types = {
        'temperature-scale': String,
        'updated-at': String,
        role: String,
        name: String,
        email: String,
        'default-temperature-preference-c': Number,
        'created-at': String,
        'firmware-emails': Boolean,
        'alert-emails': Boolean
    }
    relationship_types = {
        'adminable-structures': [Structures],
        devices: [null],
        'primary-device': [null],
        'editable-structures': [Structures],
        'received-invitations': [null],
        'viewable-structures': [Structures],
        'default-structure': Structures
    }
}
