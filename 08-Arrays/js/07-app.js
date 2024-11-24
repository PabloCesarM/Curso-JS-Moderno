const meses = ['Enero', 'Febrero', 'Marzo'];

//agregar al final del array
meses.push('Abil');
meses.push('MAyo');

console.table(meses)

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

// .push agrega al final del array
carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: 'teclado',
    precio: 50
}

// agrega al principio del array y desplaza hacia abajo
carrito.unshift(producto3);

console.table(carrito)

// eliminar un elemento del final del array
carrito.pop();

console.table(carrito);


// eliminar del principio del array
carrito.shift();


// eliminar de una poscicion seleccionada, 
//entre parentesis primero se pone la posicion que se quiere eliminar
// y segundo la cantidad de elementos a eliminar
carrito.splice(1, 1);

console.table(carrito);
