export interface Promocion {
    _id:    string,
    Tipo:   string,
    Producto: string,
    Inicio:     Date,
    Fin:        Date,
    Precio?:    number,
    Item?:      Producto
}

export interface Producto {
    _id:           string,
    Nombre:         string,
    Clave:          string,
    Descripcion:    string[],
    Precio:         number,
    Aplicaciones:   string[],
    Imagen?:         string
}
export interface Distribuidor {
    _id:           string,
    Nombre:         string,
    Clave:          string,
    Direccion:      string,
    Telefono:       string,
    email:          string,
    Imagen:         string,
    Region:         string
}