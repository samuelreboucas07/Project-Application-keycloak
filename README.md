# Integration Keycloak

* [Overview](#overview)

* [Technologies](#technologies)

* [How to use](#How-to-use)

* [Endpoints](#endpoints)

* [Note](#note)

* [Behavior](#behavior)

* [References](#references)

## Overview:
<strong>
Application that simulates access control to routes through keycloak.
Through the use of keycloak, it was possible to control which type of user will have access to a certain route, ensuring greater security for the application.
</strong>

## Technologies

* [Nodejs](https://nodejs.org/en/)
* [Docker](https://www.docker.com/)
* [Keycloak](https://www.keycloak.org/)
* [Keycloak-connect](https://www.npmjs.com/package/keycloak-connect)
## How to use

Run container containing keycloak application.

```
docker run -p 8080:8080 \
    -e KEYCLOAK_USER=<USERNAME> \
    -e KEYCLOAK_PASSWORD=<PASSWORD> \
    jboss/keycloak
```
[Note](https://medium.com/devops-dudes/keycloak-for-identity-and-access-management-9860a994bf0)

Configure keycloak for your application context.
[Note an example of configuration](https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51)


It is necessary to integrate the keycloak-connect into your project and ensure its configuration

## Endpoints

* ```/anonymous``` GET -> Any user can access the route.
* ```/user``` GET -> Only users with user permission can access.
* ```/admin``` GET -> Only users with admin permission can access.
* ```/all``` GET -> Users with user adn admin permission can access.

## Note
This example was developed taking into account that the user will log in to the keycloak and send the access token via the request header.


Therefore, to generate the token it is necessary to access the ```/auth/realms/Demo-Realm/protocol/openid-connect/token``` endpoint, which will be directed to your keycloak session

## Behavior

* Token generated for user with permission named user.
![key_user](https://github.com/samuelreboucas07/Project-Application-keycloak/blob/main/assets/key_user.gif)

* Token generated for user with permission named admin.
![key_admin](https://github.com/samuelreboucas07/Project-Application-keycloak/blob/main/assets/key_admin.gif)

## References:
### https://medium.com/devops-dudes/securing-node-js-express-rest-apis-with-keycloak-a4946083be51
### https://medium.com/devops-dudes/keycloak-for-identity-and-access-management-9860a994bf0

### https://www.youtube.com/watch?v=H1qZR6OGF7M
