'use strict'

let express = require('express');
let ProductoController = require('../controllers/producto');
let api = express.Router();

api.get('/productos', ProductoController.index);
api.get('/producto/:id', ProductoController.show);
api.post('/producto', ProductoController.save);
api.put('/productos/:id', ProductoController.update);
module.exports = api;
