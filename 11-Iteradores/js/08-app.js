// iterador FOR IN
const automovil = {
  modelo: "Corolla",
  year: 2024,
  motor: "2.0",
};

/// FOR IN, recorre el array mientras haya elementos
for (let propiedad in automovil) {
  console.log(`${automovil[propiedad]}`);
}

console.log("///////////////////");

// llave hce referencia al nombre de la propiedades
// valor hace referencia al contendo de la propiedad
for (let [llave, valor] of Object.entries(automovil)) {
  console.log(llave);
  console.log(valor);
  console.log("///////////////////");
}
