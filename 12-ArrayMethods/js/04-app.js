// Filter

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


// Todos los productos cuyo precio sea mayor a 400
let resultado = carrito.filter( producto => producto.precio > 400);

// Todos los productos cuyo precio sea menor a 600
resultado = carrito.filter( producto => producto.precio < 600);

// Todos los productos menos audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos')

console.log(resultado);

// Filter crea un nuevo arreglo con la condicion que este revisando en ese momento