//Variables

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosAgregados = [];

loadListeners();
function loadListeners() {
    listaCursos.addEventListener('click', agregarCurso); // Cuando agregas curso presionando al boton

    carrito.addEventListener('click', eliminarCurso);

    vaciarCarrito.addEventListener('click', borrarCarrito);
}


//Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerCurso(cursoSeleccionado);
    }
}

// Lee el contenido del html y extrae la informacion
function leerCurso(curso) {

    // Crear un objeto

    const detallesCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1 
    }

    //Revisa si un curso ya esta en el carrito

    const existe = articulosAgregados.some(curso => curso.id === detallesCurso.id)
    if(existe){
        const cursos = articulosAgregados.map(curso => {
            if(curso.id === detallesCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }
            else {
                return curso; //retorna el objeto que no ha sido actualizado
            }
        });
        articulosAgregados = [...cursos]
    } else {
        //Agregamos al array
        articulosAgregados = [...articulosAgregados, detallesCurso]
    }

    // Agrega elementos al arreglo

    mostrarHtml();
}

//Muestra el carrito en el html

function mostrarHtml() {

    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosAgregados.forEach( curso => {
        const {imagen, titulo, id, precio, cantidad} = curso
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a> 
        </td>
        `;

        //Añadir al HTML
        contenedorCarrito.appendChild(row);
    });
}

//Limpia los cursos del html 

function limpiarHTML() {

    //Forma lenta
    //contenedorCarrito.innerHTML = '';


    //Forma optimizada
    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

//Eliminar curso del carrito
function eliminarCurso(e) {
        if(e.target.classList.contains('borrar-curso')){
        const targetId = e.target.getAttribute('data-id');

        //Elimina del arreglo


        articulosAgregados = articulosAgregados.filter(curso => {
        if(curso.id === targetId){
            if (curso.cantidad > 1) {
            curso.cantidad--
            return curso;
            } else {
                delete curso;
            }
        } else {
             return curso;
        }
        });

        mostrarHtml();
        }
    

}

function borrarCarrito() {
    articulosAgregados = []; // Resetear el array
    limpiarHTML(); // Eliminar HTML
}
