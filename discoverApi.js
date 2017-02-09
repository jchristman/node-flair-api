var Promise = require('promise');
var Flair = require('./build/index.js');
var secrets = require('./secrets.json');

var discoverApi = function(client, path) {
    var api = {}

    client.discover(path).then(function (res) {
        var discoveries = [];
        if (res.res.data.links !== undefined) {
            for (let key in res.res.data.links) {
                discoveries.push(discoverApi(client, '/' + key).then(function(res) {
                    return Promise.resolve(res);                                                   
                }));
            }
        } else {
            console.log(path);
            let data = res.res.data.data;
            if (Array.isArray(data)) data = data[0];
            console.log('Type: ', data.type);
            console.log('Attributes: ', data.attributes);
            console.log('Relationships: ', data.relationships);
            console.log();
        }

        Promise.all(discoveries)
            .then(function(results) {
            });
    });

    return Promise.resolve(api);
}
    
var client = new Flair.Client(secrets.client_id, secrets.client_secret);
client.connect().then(function(suc) {
    discoverApi(client, '').then(function(api) {
        //console.log(api);
    });
});
