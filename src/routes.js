const { Router } = require('express');

//Controllers

const ConhencimentoSintoma = require('./controllers/ConhecimentoSintoma');

const routes = Router();


routes.post('conhecimento', ConhencimentoSintoma.store);
routes.get('conhecimento', ConhencimentoSintoma.index);

module.exports = routes;