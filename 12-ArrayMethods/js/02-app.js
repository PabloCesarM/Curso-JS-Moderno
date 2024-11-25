// conocer el indice de un elemento

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
    if(mes === 'Abril'){
        console.log(`${mes} encontrado en el índice ${i}`);
    }
    });

// ENCONTRAR EL INDICE DE ABRIL
 const indice = meses.findIndex( (mes) => mes ==='Abril')
 console.log(indice);

// ENCONTRAR EL INDICE DE UN ARRAY DE OBJETOS (Tablet)
const indice2 = carrito.findIndex( (producto) => producto.nombre === 'Tablet' );
console.log(`${carrito[indice2].nombre} se encuentra en el índice ${indice2}`);