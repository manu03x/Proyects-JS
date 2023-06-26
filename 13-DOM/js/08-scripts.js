//                      Traversing the DOM

// Ir recorriendo tu camino sobre los diferentes nodos de tu html

const nav = document.querySelector('nav');
console.log(nav)

console.log(nav.lastElementChild);
// console.log(nav.childNodes); // Los espacios en blanco son considerados elementos
// console.log(nav.children); // Lista elementos reales


// console.log(nav.children[1]);
// console.log(nav.children[1].nodeName);
// console.log(nav.children[1].nodeType);


const card = document.querySelector('.card');
// const tituloP = card.children[1].children[1];

// tituloP.textContent = 'Nuevo Heading desde traversing the DOM';

// const imagen = card.children[0];
// imagen.src = 'img/lupa.png'

// console.log(imagen);

//                          Traversing de hijo al padre

// console.log(card.parentNode); // Estos node toman en cuenta los espacios en blanco

console.log(card.parentElement.parentElement.parentElement.parentElement);


//            Con children vas recorriendo los elementos hijos y con parent Element
//                              vas recorriendo los padres

// Traversing the dom, element siblings (Elementos Hermanos)


// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

const lastCard = document.querySelector('.card:last-of-type');

console.log(lastCard);
console.log(lastCard.previousElementSibling) // Va al elemento previo