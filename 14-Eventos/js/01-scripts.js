console.log(1);


//Este evento sirve para saber cuando el HTML esta listo
document.addEventListener('DOMContentLoaded', () => { // FUNCION ANONIMA
    console.log(2);
});

console.log(3);

//Resultado en consola:
// 1
// 3
// 2

