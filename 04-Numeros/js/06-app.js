const numero1 = 20;
const numero2 = "20";
const numero3 = "uno";
const numero4 = 20.2;

//convertir string a numero
console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(Number.parseInt(numero2));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3));//devuelve naan, no lo puede leer


//revisar si un numero es entero o no
console.log(Number.isInteger(numero4));
console.log(Number.isInteger(numero3));
