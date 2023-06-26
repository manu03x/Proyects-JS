// Find crea un nuevo arreglo basado en la condicion que estas utilizando

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//con un ForEach

let resultado;

carrito.forEach((producto,index) => {
    if(producto.nombre === 'Tablet') {
        resultado = carrito[index];
    }
});

console.log(resultado);



// con un .find

const resultado2 = carrito.find(producto => producto.nombre == 'Tablet');
console.log(resultado2);

// .find arroja solo el primer elemento que cumpla la condicion