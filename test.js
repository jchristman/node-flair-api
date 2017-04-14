var Promise = require('promise');
var Flair = require('./build/index.js');
var secrets = require('./secrets.json');

var client = new Flair.Client(secrets.client_id, secrets.client_secret);
client.me().then(function(result) {
    client.structures(result.relationships['default-structure'].data.id).then(function(result) {
    });
});
