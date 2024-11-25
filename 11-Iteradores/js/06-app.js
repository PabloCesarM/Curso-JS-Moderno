// iterador FOR EACH

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

// SI SOLO ES UNA LINEA LAS LLAVES NO SON NECESARIAS
pendientes.forEach( pendientes => console.log(pendientes) );


pendientes.forEach( (pendientes, indice) => {
    console.log(`${indice}: ${pendientes}`);
} );

//////////////////////
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Tv', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: "movil", precio: 700}
];

carrito.forEach( producto => console.log(`${producto.nombre} con precio de ${producto.precio}`) );

// MAP (map crea un array nuevo)
carrito.map( producto => console.log(`${producto.nombre} con precio de ${producto.precio}`) );

