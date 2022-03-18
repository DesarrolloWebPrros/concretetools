'use strict'

let express = require('express');
let ProductoController = require('../controllers/producto');
let PromocionController = require('../controllers/promocion');
let api = express.Router();

api.get('/productos', ProductoController.index);
api.get('/producto/:id', ProductoController.show);
api.post('/producto', ProductoController.save);
api.put('/productos/:id', ProductoController.update);

api.get('/promociones', PromocionController.index);
api.get('/producto/:id', PromocionController.show);
api.post('/producto', PromocionController.save);
api.put('/productos/:id', PromocionController.update);

module.exports = api;
