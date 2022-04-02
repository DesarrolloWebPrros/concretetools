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
    _id:           string,
    Nombre:         string,
    Clave:          string,
    Descripcion:    string[],
    Precio:         string,
    Aplicaciones:   string[],
    Imagen:         string
}