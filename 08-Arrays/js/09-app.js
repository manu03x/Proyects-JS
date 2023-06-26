// For each para iterar arrays

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Lapiz', precio: 400},
    {nombre: 'Mouse', precio: 900},
    {nombre: 'Laptop', precio: 200},
    {nombre: 'Escritorio', precio: 100},
];

// carrito.forEach(); // Esto es un metodo por que tiene un punto.

// sumar(); // Esto es una funcion por que no tiene nada atras.

carrito.forEach( producto => {
    console.log(`El producto ${producto.nombre} cuesta ${producto.precio}`);
});