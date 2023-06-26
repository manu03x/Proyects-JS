// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');

console.log(hero);

// Si las clases existen mas de una vez, este metodo trae todos los elementos con esa clase

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);


//Si una clase no existe, no ocurre un error simplemente entrega un array vacio

const noExiste = document.getElementsByClassName('no-existe');

console.log(noExiste);