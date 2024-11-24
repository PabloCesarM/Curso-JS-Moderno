// 
const reproductor = {
    repoducir: id => console.log(`Reproduciendo canción con el ${id}`),
    pausar: () => console.log(`Pausado`),
    /*borrar: function(id){
        console.log(`Borrando cancion con el ${id}`)
    },*/
    crearPlaylist: nombrePlaylist => console.log(`Creando la playlist ${nombrePlaylist}`),
    reproducirPlaylist: nombrePlaylist =>console.log(`Reproduciendo la playlist ${nombrePlaylist}`),

    //nuevo
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Àñadiendo ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
}

//nuevo
reproductor.nuevaCancion = 'So payaso';
reproductor.obtenerCancion;


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

