var Promise = require('promise');
var Flair = require('./build/index.js');
var secrets = require('./secrets.json');

var client = new Flair.Client(secrets.client_id, secrets.client_secret);
client.connect().then(function(suc) {
    // Test the various functions of client
});
