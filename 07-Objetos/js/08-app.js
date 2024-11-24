"use strict";//hacer que el objeto sea estatico
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//este metodo no permite modificar propiedades
//ni tampoco agregar nuevas propiedadas
Object.freeze(producto);

//producto.disponible = false;
//producto.imagen = "imagen.jpg";

console.log(producto);

//comprobar si un objeto está congelado
console.log(Object.isFrozen(producto));
