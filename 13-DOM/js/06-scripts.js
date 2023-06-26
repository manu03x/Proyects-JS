// Modificar encabezado

const tituloHero = document.querySelector('.contenido-hero h1');


console.log(tituloHero.textContent); // Si lo va a encontrar aunque este oculto
console.log(tituloHero.innerText); // Si en el CSS visibility: hidden; no lo va a encontrar
console.log(tituloHero.innerHTML);// Se trae el html


// Chaining 

const tituloHero2 = document.querySelector('.contenido-hero h1').textContent = 'Nuevo Hero';


//Cambiar una imagen

const imagen = document.querySelector('.card img');

imagen.src = 'img/logo.png'

const info = document.querySelector('.hacer .contenedor-cards .card .info .titulo');
console.log(info);

info.textContent = 'MIERDESILLA';


