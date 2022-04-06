
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const PromocionSchema = Schema({
    _id:            String,
    Nombre:         String,
    Clave:          String,
    Telefono:       String,
    email:          String,
    Direccion:      String,
    Region:         String
});

module.exports = mongoose.model('Distribucion',DistribucionSchema, 'Distribuidores');