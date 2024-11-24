// utilizacion del map para recorrer el array
const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500},
    { nombre: 'Tv', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: "movil", precio: 700}
];

const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
});


const nuevoArreglo2 = carrito.forEach( function(producto) {
    return`${producto.nombre} - Precio: ${producto.precio}`;
});

console.table(nuevoArreglo);
console.table(nuevoArreglo2);



// Filtrando productos con precio mayor a 300
const filtrados = carrito.filter(producto => producto.precio > 300);

// Creando un array solo con los precios de los productos filtrados
const preciosFiltrados = filtrados.map(producto => producto.precio);

console.log(filtrados); // Muestra los productos filtrados
console.log(preciosFiltrados); // Muestra solo los precios de los productos filtrados
