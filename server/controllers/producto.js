'use strict'

let Producto = require('../models/producto');

const index = (req, res) => {
    Producto.find({}).exec( (err, productos) => {
        if (err) {
            res.status(500).send({message: 'Error al leer coleccion de Productos'});
        } else {
            console.log(productos);
            if (!productos) {
                res.status(404).send({message: 'No se encontro ningun producto'});
            } else {
                res.status(200).send({Productos: productos});
            }
        }
    })
}

const show = (req, res) => {
    const productoId = req.params.id;
    Producto.findById(productoId, (err, producto) => {
        if (err) {
            res.status(500).send({message: `Error al consultar Producto ${productoId}`});            
        } else {
            if (!producto) {
                res.status(404).send({message: 'No se encontro el producto'});
            } else {
                res.status(200).send({Producto: producto});
            }
        }
    });
}

const save = (req, res) => {

    let producto = new Producto();

    const params = req.body;

    producto.Nombre = params.nombre;
    producto.Clave = params.clave;
    producto.Descripcion = params.descripcion;
    producto.Precio = params.precio;
    producto.Aplicaciones = params.aplicaciones;
    producto.Imagen = params.imagen;
    console.log(params, producto);
    producto.save( (err, productoStored ) => {
        if (err) {
            res.status(500).send({message: `Error al guardar Producto ${params.nombre}`});            
        } else {
            res.status(200).send({Producto: productoStored});
        }
    })
}

const update = (req, res) => {
    const productoId = req.params.id;
    const update = req.body;

    Producto.findOneAndUpdate( productoId, update, (err, productoUpdated ) => {
        if (err) {
            res.status(500).send({message: `Error al actualizar Producto ${productoId}`}); 
        } else {
            res.status(200).send( productoUpdated );
        }
    })

}

module.exports = { index, show, save, update }