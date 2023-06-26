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

let resultado;

// De forma declarativa

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);