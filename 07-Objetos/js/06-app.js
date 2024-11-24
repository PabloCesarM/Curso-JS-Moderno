const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
        pais: 'China'
    }
    }
}

//al destrucurar objetos no se puede poner el nombre del "objeto.", 
//se debe poner "objeto: {la propiedad}"
//ejemplo: NO SE PUEDE PONER "informacion.fabricante"
//ejemplo:  "informacion: {fabricante}"
const {nombre, informacion ,informacion: {fabricacion, fabricacion: {pais}}} = producto

console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);
