const jsonBtn = document.querySelector('#cargarJSON');

jsonBtn.addEventListener('click', getJSON);


function getJSON() {

    const url = 'data/empleado.json';

    fetch(url)
        .then( res => res.json())
        .then( res => showHtml(res))
}

const showHtml = ({empresa, id , nombre, trabajo}) => {
    const contenido = document.querySelector('.contenido')

    contenido.innerHTML = `
    <p> Empleado: ${nombre}</p>
    <p> Id: ${id}</p>
    <p> Empresa: ${empresa}</p>
    <p> Trabajo: ${trabajo}</p>
    `
}