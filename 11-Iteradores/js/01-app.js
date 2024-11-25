// iteraddores FOR LOOP

for(let i =0; i<= 10; i++){
    console.log(`Numero: ${i}`);
}

// identificar pares e impares
for(let i =0; i<= 20; i++){
    if( i%2 === 0 ){
    console.log(`Numero: ${i} es par`);
    } else {
    console.log(`Numero: ${i} es impar`);
    }
}
///////////////////////////////////////
console.log('//////////////////////////')
const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500},
    { nombre: "Tv", precio: 100},
    { nombre: "Tablet", precio: 200},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "movil", precio: 700},
];

console.log(carrito.length);

for( let i=0; i<carrito.length; i++ ){
    console.log(carrito[i].nombre, `Precio: ${carrito[i].precio}`);
}