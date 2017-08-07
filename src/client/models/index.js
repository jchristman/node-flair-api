import _ from 'lodash';

import Alerts from './alerts.js';
import BeaconSightings from './beacon-sightings.js';
import Conclusions from './conclusions.js';
import Devices from './devices.js';
import GeofenceEvents from './geofence-events.js';
import Geofences from './geofences.js';
import HardwareVersions from './hardware-versions.js';
import HvacUnits from './hvac-units.js';
import IntegrationStructures from './integration-structures.js';
import Integrations from './integrations.js';
import Invitations from './invitations.js';
import Pucks from './pucks.js';
import Releases from './releases.js';
import Rooms from './rooms.js';
import SensorReadings from './sensor-readings.js';
import Structures from './structures.js';
import StructureStates from './structure-states.js';
import SupportedDeviceBrands from './supported-device-brands.js';
import Thermostats from './thermostats.js';
import Users from './users.js';
import Vents from './vents.js';
import WeatherReadings from './weather-readings.js';
import Zones from './zones.js';

const Models = [
    Alerts,
    BeaconSightings,
    Conclusions,
    Devices,
    GeofenceEvents,
    Geofences,
    HardwareVersions,
    HvacUnits,
    IntegrationStructures,
    Invitations,
    Pucks,
    Releases,
    Rooms,
    Structures,
    StructureStates,
    SupportedDeviceBrands,
    Thermostats,
    Users,
    Vents,
    WeatherReadings,
    Zones
];

const types_map = _.zipObject(_.map(Models, Model => Model.type), Models);
export { types_map };

export default Models;
