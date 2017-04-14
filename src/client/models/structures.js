import Model from './model.js';
import Users from './users.js';

export default class Structures extends Model {
    static type = 'structures';
    static relationship_types = {
        alerts: [null],
        rooms: [null],
        'editor-users': [Users],
        'viewer-users': [Users],
        thermostats: [null],
        pucks: [null],
        'geofence-events': [null],
        invitations: [null],
        'supported-device-brands': [null],
        'weather-readings': [null],
        'occupancy-conclusions': [null],
        'hvac-units': [null],
        'default-zone': [null],
        'structure-states': [null],
        'integration-structures': [null],
        'remote-sensors': [null],
        'beacon-sightings': [null],
        'admin-users': [Users],
        vents: [null],
        'current-conclusions': [null],
        geofences: [null],
        zones: [null],
        releases: [null]
    }
}
