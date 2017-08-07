import Model from './model.js';

import Rooms from './rooms.js';
import Structures from './structures.js';
import Thermostats from './thermostats.js';

export default class Zones extends Model {
    static type = 'zones';
    static attribute_types = {
        'updated-at': String,
        'created-at': String,
        'name': String
    };

    static relationship_types = {
        'thermostat': Thermostats,
        'rooms': [Rooms],
        'structure': Structures
    };

}
