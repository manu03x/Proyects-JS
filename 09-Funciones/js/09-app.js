//Metodos de propiedad -- Funciones con una sintaxis que al utilizarla es lo mismo que un metodo

const reproductor = {
    reproducir: (id) => 
        console.log(`Reproduciendo cancion con el id ${id}`)
    ,
    pausar: function(){
        console.log(`Pausando`);
    },
    borrar: function(id) {
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function (canciones) {
        let playlist = [...canciones];
        console.log(playlist);
        return playlist;
    },
    reproducirPlaylist: function(playlist){
        reproducir.forEach(cancion => {
            console.log(`${cancion}`)
        });
    }
}

reproductor.reproducir(30);

reproductor.pausar();


reproductor.borrar(40);

reproductor.crearPlaylist(['La chona','Bad bunny']);
reproductor.reproducirPlaylist()