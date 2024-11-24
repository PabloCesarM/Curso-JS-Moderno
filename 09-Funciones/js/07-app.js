// interaccion entre funciones
iniciarApp();
function iniciarApp(){
    console.log('Iniciando app..');

    segundaFuncion();
}


function segundaFuncion(){
    console.log('Desde la segunda funcion');

    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario){
    console.log('Autendicando usuarrio... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}