// break y continue

for(let i =0; i<= 10; i++){
    if(i===5){
    //console.log(`Este es el ${i}`);
    console.log(`Este es el cinco`); //para escribirlo con letra
    //break; // detiene el for
    continue; // pasa a la siguiente itereacion del bucle
    }
    console.log(`Numero: ${i}`);
}
///////////////////////////////////////
console.log('//////////////////////////')
const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500},
    { nombre: "Tv", precio: 100},
    { nombre: "Tablet", precio: 200, descuento: true},
    { nombre: "Audifonos", precio: 300},
    { nombre: "Teclado", precio: 400},
    { nombre: "movil", precio: 700},
];

console.log(carrito.length);

for( let i=0; i<carrito.length; i++ ){
    if(carrito[i].descuento){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento!!`);
        continue;
    }
    console.log(carrito[i].nombre, `Precio: ${carrito[i].precio}`);
}