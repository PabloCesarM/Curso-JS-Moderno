// operador else if

const dinero = 300;
const totalPagar = 500;
const tarjeta = true;
const cheque = false;


if(dinero >= totalPagar){
    console.log('Si podemos pagar');
}  else if (tarjeta){
    console.log('Si puedo pagar porque llevo un cheque');
}else if (tarjeta){
    console.log('Si puedo pagar porque llevo la tarjeta');
} else {
    console.log('Fondo insuficiete');
}