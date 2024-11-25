// iterador FOR OFF

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar'];

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Tv', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: "movil", precio: 700}
];

/// FOR OFF, recorre el array mientras haya elementos
for( let pendiente of pendientes){
    console.log(pendiente);
}

for( let producto of carrito){
    console.log(`${producto.nombre}: ${producto.precio} €`);
}