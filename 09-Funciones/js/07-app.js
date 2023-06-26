//Funciones que llaman a otras

iniciarApp()

function iniciarApp() {
    console.log('Iniciando App...');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion')

    usuarioAutenticado('Pablo')
}


function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario');
    console.log('Usuario autenticado exitosamente');
    console.log(`Bienvenido ${usuario}`); 
}