const express = require('express');
const connection = require('./database/connection');
const crypto = require('crypto');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login
routes.post('/sessions', SessionController.create);

//Controllers de ongs
routes.get('/ongs', OngController.get);
routes.post('/ongs', OngController.create);

//profile
routes.get('/profile', ProfileController.get)

//Controllers de incidentes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.get);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;