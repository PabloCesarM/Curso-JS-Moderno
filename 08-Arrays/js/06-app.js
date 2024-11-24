const carrito = [];

//definir un producto
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 400
}
const producto2 = {
    nombre: 'movil',
    precio: 800
}

const producto3 = {
    nombre: 'teclado',
    precio: 50
}

let resultado;

resultado = [...carrito, producto]
// depende de donde pongas el producto es donde se va a colocar el producto en el array
resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];



console.table(resultado);

console.log(carrito);
