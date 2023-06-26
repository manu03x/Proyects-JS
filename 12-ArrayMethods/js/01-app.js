const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//Comprobar si un valor existe en un arreglo


// Forma tradicional
meses.forEach( mes =>{
    if(mes === 'Enero'){
        console.log('Enero si existe');
    }
});


//Array method

const resultado = meses.includes('Enero'); // Includes solo soporta arrays y no objetos

console.log(resultado);// true

// En un array de objetos se usa .some

const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe); // true


// En un arreglo tradicional con .some

const existe2 = meses.some( mes => mes === 'Enero');
console.log(existe2) // true

//.some soporta objetos y arrays (ambos)