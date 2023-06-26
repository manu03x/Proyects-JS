const carrito = [];

// Definir producto

const producto = {
    nombre: 'Monitor 24',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 800
}



carrito.push(producto); //Empuja al objeto al final del array
carrito.push(producto2);
carrito.unshift(producto3);// Empuja el objeto al inicio del array


console.table(carrito);