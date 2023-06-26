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

const producto4 = {
    nombre: 'Teclado 2',
    precio: 900
}

// La forma imperativa modifica el objeto actual, la declarativa no.

// Esta forma es imperativa

carrito.push(producto); 
carrito.push(producto2);
carrito.push(producto4);
carrito.unshift(producto3);


// Eliminar ultimo elemento de un array...

carrito.pop();

// Eliminar del inicio del arreglo...

carrito.shift();

// Eliminar con splice

    carrito.splice(1,2); // En el primer parametro seleccionas la posicion del elemento a eliminar
    
    // En el segundo parametro son cuantos elementos quieres eliminar una vez llegado a ese elemento



console.table(carrito);