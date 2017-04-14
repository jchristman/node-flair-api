import Model from './model.js';
import Structures from './structures.js';

export default class Users extends Model {
    static type = 'users';
    static relationship_types = {
        'adminable-structures': [Structures],
        devices: [null],
        'primary-device': [null],
        'editable-structures': [Structures],
        'received-invitations': [null],
        'viewable-structures': [Structures],
        'default-structure': Structures
    }
}