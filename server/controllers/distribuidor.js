'use strict'

let Distribuidor = require('../models/distribuidor');

const index = (req, res) => {
    Distribuidor.find({}).exec( (err, distribuidores) => {
        if (err) {
            res.status(500).send({message: 'Error al leer coleccion de Distribuidores'});
        } else {
            console.log(distribuidores);
            if (!distribuidores) {
                res.status(404).send({message: 'No se encontro ningun distribuidor'});
            } else {
                res.status(200).send({Distribuidores: distribuidores});
            }
        }
    })
}

const show = (req, res) => {
    const distribuidorId = req.params.id;
    console.log(distribuidorId);
    Distribuidor.findById(distribuidorId, (err, distribuidor) => {
        if (err) {
            res.status(500).send({message: `Error al consultar Distribuidor ${distribuidorId}`});            
        } else {
            console.log(distribuidor);
            if (!distribuidor) {
                res.status(404).send({message: 'No se encontro el distribuidor'});
            } else {
                res.status(200).send({Distribuidor: distribuidor});
            }
        }
    });
}

const save = (req, res) => {

    let distribuidor = new Distribuidor();

    const params = req.body;

    distribuidor.Nombre = params.nombre;
    distribuidor.Clave = params.clave;
    distribuidor.Telefono = params.descripcion;
    distribuidor.email = params.precio;
    distribuidor.Direccion = params.aplicaciones;
    distribuidor.Region = params.imagen;

    distribuidor.save( (err, distribuidorStored ) => {
        if (err) {
            res.status(500).send({message: `Error al guardar Distribuidor ${params.nombre}`});            
        } else {
            res.status(200).send({Distribuidor: distribuidorStored});
        }
    })
}

const update = (req, res) => {
    const distribuidorId = req.params.id;
    const update = req.body;

    Distribuidor.findOneAndUpdate( distribuidorId, update, (err, distribuidorUpdated ) => {
        if (err) {
            res.status(500).send({message: `Error al actualizar Distribuidor ${distribuidorId}`}); 
        } else {
            res.status(200).send( distribuidorUpdated );
        }
    })

}

module.exports = { index, show, save, update }