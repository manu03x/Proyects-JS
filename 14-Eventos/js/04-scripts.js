// Evento submit en forms

//Seleccionar id o clase de un formulario valido.

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault(); //Evitar que el navegador haga lo que tiene que hacer normalmente
    console.log('Consultar una API');

    console.log(e.target.action);
}