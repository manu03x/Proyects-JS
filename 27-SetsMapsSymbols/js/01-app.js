// Set
// Crear una lista de valores sin duplicado


const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1'); // Agregar
carrito.add('Disco #2');
carrito.add('Disco #3');

carrito.delete('Disco #3') // Si tratas de eliminar y no existe retorna true o false
console.log(carrito.has('Camisa')) // True o false si existe el valor

carrito.clear();
console.log(carrito)

console.log(carrito.size) // Tamaño del set

// Los sets son iterables, pero no tienen index

carrito.forEach(element => {
    console.log(element)
});

// Del siguiente arreglo elimina los duplicados

const numeros = [10,20,30,40,10,20]

const noDuplicados = new Set(numeros);

console.log(noDuplicados)