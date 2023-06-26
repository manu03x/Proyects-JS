const fullScreen = document.getElementById('abrir-pantalla-completa')
const noFullScreen = document.getElementById('salir-pantalla-completa')


fullScreen.addEventListener('click', fullScreenOn);
noFullScreen.addEventListener('click', fullScreenOff);


function fullScreenOn() {
    document.documentElement.requestFullscreen();
}

function fullScreenOff() {
    document.exitFullscreen();
}