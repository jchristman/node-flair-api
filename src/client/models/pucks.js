import Model from './model.js';

export default class Pucks extends Model {
    type = 'pucks';
    attribute_types = {
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
        orientation: String,
        inactive: Boolean,
        'reporting-interval-ds': Number,
        'updated-at': String,
        name: String,
        'bluetooth-tx-power-mw': null,
        'humidity-offset': null
    }
    relationship_types = {
        'current-state': null,
        'sensor-readings': null,
        'previous-state': null,
        'hardware-version': null,
        'closest-vents': null,
        'puck-states': null,
        structure: null,
        'beacon-sightings': null,
        room: null
    }
}
