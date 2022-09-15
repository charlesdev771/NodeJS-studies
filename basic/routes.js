const express = require('express');

const route = express.Router();

const controller = require('./src/controllers/homeControlle');

route.get('/', controller.home);
route.get('/moda', controller.moda);

module.exports = route;