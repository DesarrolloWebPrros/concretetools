'use strict'

let mongoose = require('mongoose');
let app = require('./app');
const PORT = 3768;

mongoose.connect('mongodb+srv://Christian:Elcristo1@webapis.qpe1i.mongodb.net/Concretetools?retryWrites=true&w=majority', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexion a BD exitosa');
        app.listen(PORT, () => {
            console.log('API COncretetools servida en http://localhost:'+PORT);
        })
    }
})