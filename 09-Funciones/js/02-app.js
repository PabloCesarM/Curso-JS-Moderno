// delclaración de Funcion(Function Declaration)
sumar();
function sumar(){
    console.log( 2+2 );
}
//llamando a la funcion



// expresion de Función (Function Expression)
// sumar2(); no se puede poner aqui porque no esta declarado como una funcion como tal
const sumar2 = function(){
    console.log( 3+3);
}

sumar2();


//EXPLICACION DE DIFERENCIAS
/*
javascript se ejecuta en dos vueltas
    - la primera busca las variable y funciones
    - la segunda es la etapa de ejecucion
*/