// operador &&

const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Puede comprar');
} else if(!usuario && !puedePagar){
    console.log('No puede comprar')
}else if(!usuario){
    console.log('Crea una cuenta');
} else if(!puedePagar){
    console.log('Fondo insuficiente');
}