import Model from './model.js';

import IntegrationStructures from './integration-structures.js';
import Rooms from './rooms.js';
import States from './states.js';
import Structures from './structures.js';
import Zones from './zones.js';

export default class Thermostats extends Model {
    static type = 'thermostats';
    static attribute_types = {
        'name': String,
        'capabilities': String,
        'thermostat-model': String,
        'created-at': String,
        'static-vents': Number,
        'source-id': String,
        'updated-at': String,
        'make': String
    };
    
    static relationship_types = {
        'structure': Structures,
        'room': Rooms,
        'zone': Zones,
        'thermostat-states': [States],
        'integration-structure': IntegrationStructures
    };
}
