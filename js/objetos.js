//objetos

/*const nombre = "mauricio"
const precio = 300
const disponible = true*/ 

const producto = {
    nombre: "mauricio",
    precio:300,
    disponible: true
}
//console.table(  producto)

//para acceder al dato que guardemos en un arreglo 
//podemos hacerlo de 2 maneras

console.log(producto.nombre)

//o 
//destructuring -permite extraer o destructurar datos en objetos arreglo mapas etc
const{nombre,precio} = producto 
console.log(nombre,precio)


 