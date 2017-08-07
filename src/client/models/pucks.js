import Model from './model.js';

import BeaconSightings from './beacon-sightings.js';
import HardwareVersions from './hardware-versions.js';
import Rooms from './rooms.js';
import SensorReadings from './sensor-readings.js';
import States from './states';
import Structures from './structures.js';
import Vents from './vents.js';

export default class Pucks extends Model {
    static type = 'pucks';
    static attribute_types = {
        'demo-mode': null,
        'temperature-offset-c': null,
        'created-at': String,
        'beacon-interval-ms': null,
        'puck-display-color': String,
        'current-temperature-c': null,
        'drop-rate': Number,
        'display-number': String,
        'current-humidity': null,
        'sub-ghz-radio-tx-power-mw': null,
        'orientation': String,
        'inactive': Boolean,
        'reporting-interval-ds': Number,
        'updated-at': String,
        'name': String,
        'bluetooth-tx-power-mw': null,
        'humidity-offset': null,
        'oauth-app-assigned-at': Object,
        'temperature-offset-override-c': Object,
        'ir-setup-enabled': Object,
        'ir-download': Boolean
    }
    static relationship_types = {
        'current-state': States,
        'sensor-readings': [SensorReadings],
        'previous-state': States,
        //'hardware-version': HardwareVersions,
        'hardware-version': null,               // 405 Error: Method Not Allowed
        'closest-vents': [Vents],
        'puck-states': [States],
        'structure': Structures,
        'beacon-sightings': [BeaconSightings],
        'room': Rooms
    }
}
