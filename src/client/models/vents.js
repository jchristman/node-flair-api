import Model from './model.js';

import Pucks from './pucks.js';
import Rooms from './rooms.js';
import SensorReadings from './sensor-readings.js';
import States from './states';
import Structures from './structures.js';

export default class Vents extends Model {
    static type = 'vents';
    static attribute_types = {
        'name': String,
        'setup-lightstrip': Number,
        'created-at': String,
        'inactive': Boolean,
        'percent-open': Number,
        'updated-at': String
    };

    static relationship_types = {
        'closest-puck': Pucks,
        'structure': Structures,
        'room': Rooms,
        'sensor-readings': [SensorReadings],
        'current-state': States,
        'previous-state': States,
        'vent-states': [States]
    };
}
