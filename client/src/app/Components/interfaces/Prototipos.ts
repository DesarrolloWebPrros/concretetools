export interface Promociones {
    _id:    String,
    Tipo:   String,
    Producto: String,
    Inicio:     Date,
    Fin:        Date,
    Precio?:    Number,
    Item?:      Producto
}

export interface Producto {
    Nombre:         String,
    Clave:          String,
    Descripcion:    String[],
    Precio:         String,
    Aplicaciones:   String[],
    Imagen:         String
}