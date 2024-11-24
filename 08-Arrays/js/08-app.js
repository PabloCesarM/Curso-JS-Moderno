const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(nombre);

//destructuring
const { nombre} = producto;

console.log(nombre);


//destructuring con arreglos
const numeros = [10,20,30,40,50];

// const [primero, segundo, tercero] = numeros;

// los puntos suspensivos representan el resto del arreglo
const [ primero, segundo, ...tercero] = numeros;

console.log(primero);
console.log(tercero);