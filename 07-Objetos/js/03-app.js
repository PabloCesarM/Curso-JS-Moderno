const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// agregar nuevas propiedades
producto.imagen = "imagen.jpg";

//eliminar una propiedad
delete producto.disponible;


console.log(producto);
