import { MemoryStore } from 'express-session';
import Keycloak from 'keycloak-connect';

let keycloak: any;

const { CLIENT_SECRET_KEY, AUTH_SERVER, CLIENT_ID, REALM } = process.env;

var keycloakConfig: any = {
    "realm": REALM,
    "auth-server-url": AUTH_SERVER,
    "ssl-required": "external",
    "clientId": CLIENT_ID,
    "credentials": {
        "secret": CLIENT_SECRET_KEY
    },
    'bearerOnly': true,
};

export const memory = new MemoryStore();

export function initKeycloak() {
    if (keycloak) {
        console.warn('Trying to init Keycloak again!');
        return keycloak;
    }

    console.log("Initializing keycloak...");
    keycloak = new Keycloak({
        store: memory,
    }, keycloakConfig);

    return keycloak;
};

export function getKeycloak() {
    if (!keycloak) {
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return keycloak;
};

