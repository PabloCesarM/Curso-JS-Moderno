const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500},
    { nombre: "Tv", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "movil", precio: 700},
]

for(let i = 0; i<carrito.length;i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
})