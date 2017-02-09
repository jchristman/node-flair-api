import { api_root } from './constants.js';
import jsonApi from 'devour-client';
import oauth2 from 'simple-oauth2';
import Promise from 'promise';

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
        .then(result => {
            const token = oauth_client.accessToken.create(result);
            this.createClient(token);
            return Promise.resolve(true);
        })
        .catch(error => {
            console.log('Access Token Error', error.message);
            return Promise.resolve(false);
        });
    }

    createClient(token) {
        this.client = new jsonApi({apiUrl: api_root});
        this.client.headers['Authorization'] = 'Bearer ' + token.token.access_token;

        this.client.define('user', {
            name: '',
            email: ''
        });
    }

    connect() {
        return this.getToken(); // Promise
    }

    get(type) {
        return this.client.findAll(type);
    }

    getStructures() {
        return this.get('structure');
    }

    discover(path) {
        this.client.replaceMiddleware('response', {
            name: 'pass-thru',
            res: payload => payload
        });
        this.client.logger.error = () => '';
        
        let request = this.client.request(api_root + path, 'GET', {}, {});
        return request;
    }
}

export default Client;
