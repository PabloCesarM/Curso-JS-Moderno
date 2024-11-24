// ARROW FUNCTION
const aprendiendo = function (tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js');


const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2('JavaScript'));

// con mas de 1 parametro hace falta poner los parentesis
const aprendiendo3 = (tecnologia,tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo3('JavaScript', 'Node.js'));
