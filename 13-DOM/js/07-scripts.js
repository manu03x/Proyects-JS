// Modificar css en js

// Las propiedades no llevan el guion y la segunda palabra es en mayuscula

// const titulo = document.querySelector('h1');

// titulo.style.backgroundColor = 'red';
// titulo.style.fontFamily = 'Arial';
// titulo.style.textTransform = 'Uppercase'; 

const primerCard = document.querySelector('section.hacer .card');
primerCard.classList.add('nueva-clase', 'segunda-clase');
primerCard.classList.remove('.card');
console.log(primerCard);