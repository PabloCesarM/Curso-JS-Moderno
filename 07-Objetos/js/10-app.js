const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    meddida: '1m'
}


console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);

//clona las
const resultado2 ={ ...producto, ...medidas};

console.log(resultado);
console.log(resultado2);

