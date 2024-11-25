const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo','Junio','Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubbre', 'Noviembre','Diciembre'];

// CONCAT concatena en el orden en el que los pongas
const resultado = meses.concat(meses2, meses3, 'Otro mes');

console.log(resultado);

// SPREAD OPERATOR, NO PONER LOS PUNTOS SUSPENSIVOS SI NO ES UN ARRAY concatena en el orden en el que los pongasR
const resultado2 = [...meses,...meses2, 'otro mes'];
console.log(resultado2);
