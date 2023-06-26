// .forEach y .map

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Lapiz', precio: 400},
    {nombre: 'Mouse', precio: 900},
    {nombre: 'Laptop', precio: 200},
    {nombre: 'Escritorio', precio: 100},
];

// La difererencia es que .map te crea un arreglo nuevo

const nuevoArray = carrito.map( producto => {
    return `El producto ${producto.nombre} cuesta ${producto.precio}`;
}); 

// Esto da undefined
const nuevoArray2 = carrito.forEach( producto => {
    return `El producto ${producto.nombre} cuesta ${producto.precio}`;
});

console.log(nuevoArray)
console.log(nuevoArray2)