// funciones con parametros y argumentos

//parametros por defecto
function saludar(nombre = 'desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar('Pablo','Magro');
saludar('Pablo');
saludar();



