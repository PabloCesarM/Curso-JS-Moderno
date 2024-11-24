const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;

//eliminar propiedad precio
delete producto.precio;

console.log(producto);