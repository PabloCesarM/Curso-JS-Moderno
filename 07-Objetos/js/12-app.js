// Objec literal
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}


// Object Constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto ('Monitor 24 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto ('television', 100);
console.log(producto3);