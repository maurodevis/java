//objetos-manipulacion

const producto = {
    nombre: "tablet",
    precio: 300,
}

//reescribir un valor
producto.nombre = "teclado"

//si no existe, lo añade
producto.imagen ="imagen.jpg"

console.table(producto)
/*nos sirve si queremos eliminar una propiedad
de un objeto*/
delete producto.imagen

console.table(producto)

//object.freeze(producto) - Freze no deja modificarlo
//object.seal(producto) - modificar propiedades existentes,no permite anadir ni eliminar.