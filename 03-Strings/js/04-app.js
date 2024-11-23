const producto = '            Monitor 20 pulgadas';

console.log(producto);
console.log(producto.length);

//eliminar espacios del inicio
console.log(producto.trimStart());
//eliminar espacios del final
console.log(producto.trimEnd());
console.log(producto.trimStart().trimEnd());

//elimina todoslos espacios
console.log(producto.trim());
