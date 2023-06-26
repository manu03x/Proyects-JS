const producto = {
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

console.log( Object.keys(producto)); // Retorna las llaves -- La izquerda

console.log( Object.values(producto)); // Retorna los valores -- La derecha

console.log( Object.entries(producto)); // Retorna todo en pares