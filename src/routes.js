const { Router } = require('express');
//Controllers
const DevController = require('./controllers/DevController');
const SintomasController = require('./controllers/SintomasController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/sintomas', SintomasController.index);
routes.post('/sintomas', SintomasController.store);


module.exports = routes;