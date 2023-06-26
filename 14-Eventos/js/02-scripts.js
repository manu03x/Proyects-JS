// Eventos del mouse

const nav = document.querySelector('.navegacion');

// Registrar un evento

nav.addEventListener('click', () => {
    console.log('click en nav');
});

// Mouse Enter
nav.addEventListener('mouseenter', () => {
    console.log('hiciste hover en la navegacion');
});

// Mouse Out

nav.addEventListener('mouseout', () => {
    console.log('Dejaste de hacer hover en la navegacion');
});


nav.addEventListener('mousedown', () => {
    console.log('Es similar a un click');
});

nav.addEventListener('mouseup', () => {
    console.log('Diste click pero soltaste el mouse ahi mismo');
});

nav.addEventListener('dblclick', () => {
    console.log('Diste click pero soltaste el mouse ahi mismo');
});

//       Algunos eventos

// mousedown -- similar al click
// click
// dblclick -- double click
// mouseup -- cuando sueltas el mouse


