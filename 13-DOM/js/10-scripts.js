// Creacion de html en javascript

const enlace = document.createElement('A');

//Agregandole el texto
enlace.textContent = 'Nuevo enlace';

//Agregandole atributos

enlace.href = '#';

enlace.target = '_BLANK';

enlace.setAttribute('data-enlace','nuevo-enlace');

enlace.classList.add('alguna-clase');

enlace.onclick = mifuncion;

const navegacion = document.querySelector('.navegacion');

// navegacion.appendChild(enlace);

navegacion.insertBefore(enlace, navegacion.children[1],)

// console.log(enlace);

function mifuncion() {
    alert('Diste click');
}


// Crear un card de forma dinamica
// Haciendo DOM scripting


const parrafo1 = document.createElement('P');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$1300MXN por ticket'
parrafo3.classList.add('precio');

//Crear DIV con la clase de info

const info = document.createElement('DIV');

info.classList.add('info');

//Añadiendo los parrafos al div

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen 

const conciertoRock = document.createElement('IMG');

conciertoRock.src = 'img/hacer1.jpg';

console.log(conciertoRock);

//Crear otro div con la clase de card

const nuevaCard = document.createElement('DIV');

nuevaCard.classList.add('card');

//Añadiendo info e imagen a la card

nuevaCard.appendChild(conciertoRock);
nuevaCard.appendChild(info);


//Añadiendo todo al html

const elementoPadre = document.querySelector('section.hacer .contenedor-cards');

elementoPadre.insertBefore(nuevaCard, elementoPadre.children[0])
