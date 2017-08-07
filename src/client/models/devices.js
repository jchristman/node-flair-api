import Model from './model.js';

import BeaconSightings from './beacon-sightings.js';
import States from './states.js';
import Users from './users.js';

export default class Devices extends Model {
    static type = 'devices';
    static attribute_types = {
        'device-setup-complete': Boolean,
        'use-for-geofencing': Boolean,
        'primary': Boolean,
        'enable-beacon-scanning': Boolean,
        'device-operating-system-type': String,
        'name': Object
    };

    static relationship_types = {
        'user': Users,
        'beacon-sightings': [BeaconSightings],
        'device-states': [States]
    };
}
