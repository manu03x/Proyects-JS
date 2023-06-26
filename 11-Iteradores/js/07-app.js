// For of

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];


const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Lapiz', precio: 400},
    {nombre: 'Mouse', precio: 900},
    {nombre: 'Laptop', precio: 200},
    {nombre: 'Escritorio', precio: 100},
];


for (const pendiente of pendientes) {
    console.log(pendiente);
}

for (const producto of carrito) {
    console.log(producto.nombre);
}