// .every

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


// con .every la condicion se debe de cumplir en todos los objetos 

const resultado = carrito.every(producto => producto.precio < 1000);
// Si todos los objetos del array son menor a 1000 retorna un true

// con .some en al menos 1 se debe de cumplir
const resultado2 = carrito.some(producto => producto.precio < 500);

console.log(resultado);
console.log(resultado2);