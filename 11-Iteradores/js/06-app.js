// forEach y .map


const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

pendientes.forEach( (element, index ) => { 
    console.log(element + index);
});

// Al poner un segundo parametro en un forEach se le pasa el indice del array automaticamente.

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Lapiz', precio: 400},
    {nombre: 'Mouse', precio: 900},
    {nombre: 'Laptop', precio: 200},
    {nombre: 'Escritorio', precio: 100},
];

const nuevoArreglo = carrito.forEach( producto => producto.nombre);



const nuevoArreglo2 = carrito.map( producto => producto.nombre);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);

