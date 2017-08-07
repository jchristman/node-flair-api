import Model from './model.js';

import Integrations from './integrations.js';
import Structures from './structures.js';
import Thermostats from './thermostats.js';

export default class IntegrationStructures extends Model {
    static type = 'integration-structures';
    static attribute_types = {
        'created-at': String,
		'updated-at': String,
		'source-id': String,
		'name': String
    };

    static relationship_types = {
		'structure': Structures,
		'thermostats': [Thermostats],
		'integration': Integrations
    };
}
