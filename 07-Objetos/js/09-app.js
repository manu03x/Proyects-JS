"use strict";

const producto = {
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

Object.seal( producto ); // No permite agregar ni eliminar propiedades pero si modificar las existentes.


console.log(producto);

console.log(Object.isSealed(producto)); // Object method para saber si el objeto esta congelado