import express, { Application } from 'express';
import session from 'express-session';
import { initKeycloak, memory } from './config/keycloak';

const app: Application = express();

app.use(session({
    secret: '1234567890',
    resave: false,
    saveUninitialized: false,
    store: memory
}));

app.use(initKeycloak().middleware());

import routes from './routes';

require('dotenv').config();

const { PORT } = process.env;


app.use('/', routes);

app.listen(PORT, (): void => {
    console.log(`Server running in port ${PORT}`);
});