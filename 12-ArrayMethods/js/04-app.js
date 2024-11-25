// FUNCION FILTER

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado = carrito.filter( producto => producto.precio > 400);

// segundaforma
resultado = carrito.filter( producto => producto.precio < 600);

// mostrar todos menos uno que elegido descartar
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');
// mostrar elegidos
resultado = carrito.filter( producto => producto.nombre === 'Audifonos');

console.log(resultado);