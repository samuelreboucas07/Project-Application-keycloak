import { MemoryStore } from 'express-session';
import Keycloak from 'keycloak-connect';

let keycloak: any;

var keycloakConfig: any = {
    "realm": "Demo-Realm",
    "auth-server-url": "http://localhost:8080/auth/",
    "ssl-required": "external",
    "clientId": "Project-Application-keycloak",
    "credentials": {
        "secret": "wkG45EQMeCnHjqjWnKCEtGhb0GZa1JMK"
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

