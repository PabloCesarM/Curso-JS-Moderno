// ARROW FUNCTION
const aprendiendo = function (){
    console.log('Aprendiendo JavaScript');
}

// CONVERTIR LA FUNCION EN ARROW FUNCTION
const aprendiendo2 = () => {
    console.log('Aprendiendo JavaScript');
}

/*
AL SER UNA FUNCION DE UNA SOLA LINEA NO HACEN FALTA LAS LLAVES
Y SE DA POR HECHO EL RETORNO, SE PUEDE QUITAR "console.log()"

const aprendiendo2 = () => 'Aprendiendo JavaScript';

PERO PARA MOSTRARLA POR PANTALLA HABRÍA QUE LLAMAR A LA FUNCION DENTRO DE console.log()
console.log(aprendiendo2());
*/

aprendiendo();
aprendiendo2();
