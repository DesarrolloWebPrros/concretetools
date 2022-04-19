'use strict'

let Promocion = require('../models/promocion');

const index = (req, res) => {
    Promocion.find({}).exec( (err, promociones) => {
        if (err) {
            res.status(500).send({message: 'Error al leer coleccion de Promociones'});
        } else {
            console.log(promociones);
            if (!promociones) {
                res.status(404).send({message: 'No se encontro ningun promoción'});
            } else {
                promociones.filter(p => {
                    p.Inicio = new Date(p.Inicio ).getTime();
                    p.Fin = new Date(p.Fin ).getTime();
                });
                res.status(200).send({Promociones: promociones});
            }
        }
    })
}

const show = (req, res) => {
    const promocionId = req.params.id;
    console.log(promocionId);
    Promocion.findById(promocionId, (err, promocion) => {
        if (err) {
            res.status(500).send({message: `Error al consultar Promoción ${promocionId}`});            
        } else {
            if (!promocion) {
                res.status(404).send({message: 'No se encontro la promoción'});
            } else {
                res.status(200).send({Promocion: promocion});
            }
        }
    });
}

const save = (req, res) => {

    let promocion = new Promocion();
    
    const params = req.body;

    promocion.Nombre = params.nombre;
    promocion.Clave = params.clave;
    promocion.Descripcion = params.descripcion;
    promocion.Fecha = params.fecha;
    promocion.Imagen = params.imagen;

    promocion.save( (err, promocionStored ) => {
        if (err) {
            res.status(500).send({message: `Error al guardar la Promoción ${params.nombre}`});            
        } else {
            res.status(200).send({Promocion: promocionStored});
        }
    })
}

const update = (req, res) => {
    const promocionId = req.params.id;
    const update = req.body;

    Promocion.findOneAndUpdate( promocionId, update, (err, promocionUpdated ) => {
        if (err) {
            res.status(500).send({message: `Error al actualizar la Promoción ${promocionId}`}); 
        } else {
            res.status(200).send( promocionUpdated );
        }
    })

}

module.exports = { index, show, save, update }