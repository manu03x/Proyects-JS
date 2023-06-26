// Event Bubbling -- cuando presionas en un evento que se propaga con otros lugares dando un resultado no esperado


const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en card');
})

infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info');
})

tituloDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo');
})