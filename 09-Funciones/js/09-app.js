// añadir funciones en un objeto

const reproductor = {
    repoducir: function(id){
        console.log(`Reproduciendo canción con el ${id}`)
    },
    pausar: function(){
        console.log(`Pausado`)

    },
    /*borrar: function(id){
        console.log(`Borrando cancion con el ${id}`)
    },*/
    crearPlaylist: function(nombrePlaylist){
        console.log(`Creando la playlist ${nombrePlaylist}`);
    },
    reproducirPlaylist: function(nombrePlaylist){
        console.log(`Reproduciendo la playlist ${nombrePlaylist}`)
    }
}

reproductor.repoducir(30);
reproductor.repoducir(3);
reproductor.pausar();

// otra opcion de crear la función
reproductor.borrar = function(id){
    console.log(`Borrando cancion con el ${id}`)
}

reproductor.borrar(30);
reproductor.crearPlaylist('Éxitos 2000');
reproductor.reproducirPlaylist('Boom bap');

