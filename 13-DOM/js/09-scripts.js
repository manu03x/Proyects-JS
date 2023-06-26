// Eliminar Elementos en el DOM

const primerEnlace = document.querySelector('a');

// Desde si mismo

// primerEnlace.remove();


//Eliminar desde el padre

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[0])
