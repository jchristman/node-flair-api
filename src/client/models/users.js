import Model from './model.js';

import Devices from './devices.js';
import Integrations from './integrations.js';
import Invitations from './invitations.js';
import Pucks from './pucks.js';
import Structures from './structures.js';

export default class Users extends Model {
    static type = 'users';
    static attribute_types = {
        'temperature-scale': String,
        'updated-at': String,
        'role': String,
        'name': String,
        'email': String,
        'default-temperature-preference-c': Number,
        'created-at': String,
        'firmware-emails': Boolean,
        'alert-emails': Boolean
    }
    static relationship_types = {
        'adminable-structures': [Structures],
        'devices': [Devices],
        'primary-device': Devices,
        'editable-structures': [Structures],
        'received-invitations': [Invitations],
        'viewable-structures': [Structures],
        'default-structure': Structures,
        'puck-oauth-apps': [null],
        'unassigned-pucks': [Pucks],
        'integrations': [Integrations],
        'structures': [Structures]
    }
}
