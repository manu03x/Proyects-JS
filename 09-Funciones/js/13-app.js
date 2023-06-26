const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log(`Pausando`),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist con el nombre de ${nombre}`),
    reproducirPlaylist: playlist => console.log(`Reproduciendo playlist ${playlist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añandiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(40);
reproductor.crearPlaylist('Reggaeton');
reproductor.reproducirPlaylist('Pop');