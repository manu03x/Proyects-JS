// For loop

// for(let i = 0; i < 10; i++) {
//     console.log(`Numero: ${i}`);
// }

// Pregunta a programadores junior
// Mostrar los numeros que son pares y los que son nones

// for(let i = 0; i < 100; i++) {
//     console.log(i % 2 == 0 ? `${i} es par` : `${i} es impar`);
// }



const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Lapiz', precio: 400},
    {nombre: 'Mouse', precio: 900},
    {nombre: 'Laptop', precio: 200},
    {nombre: 'Escritorio', precio: 100},
];

for(let i = 0; i < carrito.length; i++ ) { // No es <= por que el array va 0...5 y el length son 6
    console.log(carrito[i].nombre);
}