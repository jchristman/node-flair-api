import Model from './model.js';
import Users from './users.js';

export default class Structures extends Model {
    type = 'structures';
    attribute_types = {
        'temp-away-max-c': Number,
        'set-point-mode': String,
        'setup-complete': Boolean,
        'set-point-temperature-c': Number,
        location: String,
        latitude: Number,
        'structure-away-mode': String,
        longitude: Number,
        'is-active': Boolean,
        'humidity-away-max': Number,
        'home-away-mode': String,
        'frozen-pipe-pet-protect': Boolean,
        country: null,
        mode: String,
        'release-channel': String,
        name: String,
        'preheat-precool': Boolean,
        'zip-code': String,
        'updated-at': String,
        city: String,
        'temp-away-min-c': Number,
        'hold-reason': null,
        'setup-mode': Boolean,
        'humidity-away-min': Number,
        'location-type': String,
        'puck-client-secret': String,
        'structure-type': null,
        home: Boolean,
        state: String,
        'created-at': String,
        'puck-client-id': String
    }
    relationship_types = {
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
