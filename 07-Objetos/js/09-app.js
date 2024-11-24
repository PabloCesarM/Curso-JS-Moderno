const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//sellar un objeto, perminte cambiar el valor de las propiedades
//no permite añadir nuevas propiedades o eliminarlas
Object.seal(producto);

producto.disponible=false;
