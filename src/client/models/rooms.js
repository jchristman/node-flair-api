import Model from './model.js';

import Conclusions from './conclusions.js';
import HvacUnits from './hvac-units.js';
import Pucks from './pucks.js';
import RemoteSensors from './remote-sensors.js';
import States from './states.js';
import Structures from './structures.js';
import Thermostats from './thermostats.js';
import Users from './users.js';
import Vents from './vents.js';
import Zones from './zones.js';

export default class Rooms extends Model {
    static type = 'rooms';
    static attribute_types = {
        'user-temperature-preference-c': Number,
        'updated-at': String,
        'level': Object,
        'name': String,
        'temp-away-max-c': Number,
        'frozen-pipe-pet-protect': Boolean,
        'current-temperature-c': Number,
        'humidity-away-min': Number,
        'hold-reason': Object,
        'current-humidity': Object,
        'created-at': String,
        'humidity-away-max': Number,
        'occupancy-mode': String,
        'temp-away-min-c': Number,
        'air-return': Boolean,
        'room-away-mode': String,
        'windows': Object,
        'preheat-precool': Boolean,
        'active': Boolean,
        'pucks-inactive': String,
        'set-point-c': Number,
        'hold-until': Object,
        'room-type': Object
    };

    static relationship_types = {
        'thermostat': Thermostats,
        'remote-sensors': [RemoteSensors],
        'zones': [Zones],
        'occupancy-conclusions': [Conclusions],
        'structure': Structures,
        'hvac-units': [HvacUnits],
        'pucks': [Pucks],
        'puck-apps': [null],
        'current-conclusions': [Conclusions],
        'occupants': [Users],
        'vents': [Vents],
        'room-states': [States]
    }
}
