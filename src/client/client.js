import jsonApi from 'devour-client';
import oauth2 from 'simple-oauth2';
import Promise from 'promise';
import 'babel-polyfill';
import _ from 'lodash';

import { api_root } from './constants.js';
import Models from './models';

class Client {
    constructor(client_id, client_secret) {
        const credentials = {
            client: {
                id: client_id,
                secret: client_secret
            },
            auth: {
                tokenHost: api_root
            }
        }

        this.credentials = credentials;
        this.tokenConfig = {};
    }

    getToken() {
        const oauth_client = oauth2.create(this.credentials);
        return oauth_client.clientCredentials.getToken(this.tokenConfig)
    }

    createClient(token) {
        this.client = new jsonApi({apiUrl: api_root, pluralize: false});
        this.client.headers['Authorization'] = 'Bearer ' + token.access_token;

        const modelDeserializer = {
            name: 'model-deserializer',
            res: (payload) => {
                let { data } = payload.res.data;
                if (!Array.isArray(data))
                    data = [data];

                let model = _.map(data, (_data) => {
                    let matchedModel = _.find(Models, (_model) => {
                         return new _model(null).type === _data.type;
                    });

                    return matchedModel === undefined ? undefined : (new matchedModel(this, _data, true)).init();
                });

                return model;
            }
        }

        const requestMiddleware = {
            name: 'debug-pass-thru',
            res: (payload) => {
                console.log(payload);
                return payload;
            }
        }

        //this.client.insertMiddlewareBefore('axios-request', requestMiddleware)

        this.client.replaceMiddleware('response', modelDeserializer);
    }

    async connect() {
        if (this.client === undefined) {
            const token = await this.getToken();
            this.createClient(token);
        }
        return true;
    }

    discover(path) {
        this.client.replaceMiddleware('model-deserializer', {
            name: 'pass-thru',
            res: payload => payload
        });
        this.client.logger.error = () => '';

        let request = this.client.request(api_root + path, 'GET', {}, {});
        return request;
    }

    async get(type, options = {}) {
        await this.connect();
        return await this.client.findAll(type, options);
    }

    async me() {
        const result = await this.get('me');
        return result[0]; // We should only be expecting one thing from this method
    }

    structures(id) {
        return this.get('structures', { id });
    }

    destroy(type, id) {
        return this.client.destroy(type, id);
    }
}

export default Client;
