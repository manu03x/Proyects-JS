const jsonArrayBtn = document.querySelector('#cargarJSONArray');

jsonArrayBtn.addEventListener('click', getArrayData);


function getArrayData() {
    const url = 'data/empleados.json';

    fetch(url)
        .then( res => res.json())
        .then( res => showHtml(res))
}

function showHtml(employees) {
    const container = document.querySelector('.contenido');

    let html = ''

    employees.forEach(employee => {
        const {empresa, id , nombre, trabajo} = employee

        html += `
        <p> id: ${id} </p>
        <p> empresa: ${empresa} </p>
        <p> nombre: ${nombre} </p>
        <p> trabajo: ${trabajo} </p>

        `;
    });

    container.innerHTML = html;
}