// break y continue

//break va a cortar la ejecucion de un for loop

//continue intercepta un elemento, identificarlo y continuar la ejecucion

// for(let i = 0; i < 10; i++) {
//     if (i == 5) {
//         console.log('Cinco')
//         continue;
//     }
    
//     console.log(`Numero: ${i}`);
// }

const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Celular', precio: 800},
    {nombre: 'Lapiz', precio: 400, descuento: true},
    {nombre: 'Mouse', precio: 900},
    {nombre: 'Laptop', precio: 200},
    {nombre: 'Escritorio', precio: 100,},
];

carrito[5].descuento = true;

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El ${carrito[i].nombre} tiene un descuento activo y fue agregado al carrito`);
        continue;
    }
    console.log(`${carrito[i].nombre} agregado al carrito`)
}