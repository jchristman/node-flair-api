import Model from './model.js';

import Alerts from './alerts.js';
import BeaconSightings from './beacon-sightings.js';
import Conclusions from './conclusions.js';
import GeofenceEvents from './geofence-events.js';
import Geofences from './geofences.js';
import HvacUnits from './hvac-units.js';
import IntegrationStructures from './integration-structures.js';
import Invitations from './invitations.js';
import Pucks from './pucks.js';
import Releases from './releases.js';
import RemoteSensors from './remote-sensors.js';
import Rooms from './rooms.js';
import States from './states.js';
import SupportedDeviceBrands from './supported-device-brands.js';
import Thermostats from './thermostats.js';
import Users from './users.js';
import Vents from './vents.js';
import WeatherReadings from './weather-readings.js';
import Zones from './zones.js';

export default class Structures extends Model {
    static type = 'structures';
    static attribute_types = {
        'temp-away-max-c': Number,
        'set-point-mode': String,
        'setup-complete': Boolean,
        'set-point-temperature-c': Number,
        'location': String,
        'latitude': Number,
        'structure-away-mode': String,
        'longitude': Number,
        'is-active': Boolean,
        'humidity-away-max': Number,
        'home-away-mode': String,
        'frozen-pipe-pet-protect': Boolean,
        'country': null,
        'mode': String,
        'release-channel': String,
        'name': String,
        'preheat-precool': Boolean,
        'zip-code': String,
        'updated-at': String,
        'city': String,
        'temp-away-min-c': Number,
        'hold-reason': null,
        'setup-mode': Boolean,
        'humidity-away-min': Number,
        'location-type': String,
        'puck-client-secret': String,
        'structure-type': null,
        'home': Boolean,
        'state': String,
        'created-at': String,
        'puck-client-id': String,
        'temperature-scale': String,
        'setup-mode-first-time': Object,
        'reporting-gateway': Boolean,
        'setup-step': Object
    };

    static relationship_types = {
        'alerts': [Alerts],
        'rooms': [Rooms],
        'editor-users': [Users],
        'viewer-users': [Users],
        'thermostats': [Thermostats],
        'pucks': [Pucks],
        'geofence-events': [GeofenceEvents],
        'invitations': [Invitations],
        'supported-device-brands': [SupportedDeviceBrands],
        'weather-readings': [WeatherReadings],
        'occupancy-conclusions': [Conclusions],
        'hvac-units': [HvacUnits],
        'default-zone': Zones,
        'structure-states': [States],
        'integration-structures': [IntegrationStructures],
        'remote-sensors': [RemoteSensors],
        'beacon-sightings': [BeaconSightings],
        'admin-users': [Users],
        'vents': [Vents],
        'current-conclusions': [Conclusions],
        'geofences': [Geofences],
        'zones': [Zones],
        'releases': [Releases]
    };
}
