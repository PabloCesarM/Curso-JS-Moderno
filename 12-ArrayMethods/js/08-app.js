// SPREAD OPERATOR
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// AÑADE AL ARRAY ORIGINAL, permite una programación funcional
const meses2 = [...meses,'Agosto'] ;
console.log(meses2);

// .push AÑADE AL MISMO ARRAY EXISTENTE Y LO MODIFICA
//meses.push('Agosto');
//console.log(meses);


///// AÑADIR UN OBJETO, NO SE PUEDEN PONER PUNTOS SUSPENSIVOS DELANTE DE UN OBJETO
const producto = {nombre: 'Disco duro', precio: 300};

const carrito2 = [...carrito, producto];
console.log(carrito2);