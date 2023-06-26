"use strict";

const producto = {
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

Object.freeze( producto ); // Esto permite congelar el objeto y no hacer modificaciones.


console.log(producto);

console.log(Object.isFrozen(producto)); // Object method para saber si el objeto esta congelado
