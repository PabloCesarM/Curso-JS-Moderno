// funciones que retornan valores

function sumar(a,b){
    return a + b;
}

// para guardar el resultado devuelto por la funcion
const resultado = sumar(2,3);

// EJEMPLO AVANZADO
let total = 0;
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total * 1.21;
}

// mostrar el carrito
 total = agregarCarrito(300);
 total = agregarCarrito(100);

console.log(total);


const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de ${totalPagar}`);