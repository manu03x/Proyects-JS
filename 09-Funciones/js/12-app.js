// Arroy functions en un for each y .map

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Lapiz', precio: 400},
    {nombre: 'Mouse', precio: 900},
    {nombre: 'Laptop', precio: 200},
    {nombre: 'Escritorio', precio: 100},
];


const nuevoArray = carrito.map( producto => `El producto ${producto.nombre} cuesta ${producto.precio}`); 

carrito.forEach( producto =>  console.log(`El producto ${producto.nombre} cuesta ${producto.precio}`));

console.log(nuevoArray);
