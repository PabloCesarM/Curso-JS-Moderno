// operador ternario

const autenticado = true;
const puedePagar = true;

// el interrogante verifica si se cumple lo que tiene delante
console.log( autenticado ? 'El usuario está autenticado' : 'No está autenticado');
console.log( autenticado && puedePagar ? 'El usuario puede pagar' : 'No puede pagar');

console.log( autenticado ? puedePagar ? 'El usuario está autenticado': 'El usuario está' +
    + 'autenticado, no puede pagar' : 'No puede pagar');
