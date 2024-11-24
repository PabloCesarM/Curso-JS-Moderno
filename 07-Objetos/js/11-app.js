const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    motrarInfo: function(){
        //utilizar this para referenciar a si mismo
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

const producto2 = {
    nombre: "tablet 20 pulgadas",
    precio: 3000,
    disponible: true,
    motrarInfo: function(){
        //utilizar this para referenciar a si mismo
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}



producto.motrarInfo();
producto2.motrarInfo();

