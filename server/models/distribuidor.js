
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const DistribuidorSchema = Schema({
    _id:            String,
    Nombre:         String,
    Clave:          String,
    Telefono:       String,
    email:          String,
    Direccion:      String,
    Region:         String
});

module.exports = mongoose.model('Distribuidor',DistribuidorSchema, 'Distribuidores');