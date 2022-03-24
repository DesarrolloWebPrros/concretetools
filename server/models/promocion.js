

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PromocionSchema = Schema({
    Nombre:         String,
    Clave:          String,
    Descripcion:    [String],
    Fecha:         String,
    Imagen:         String

});

module.exports = mongoose.model('Promocion',PromocionSchema, 'Promociones');