// Symbols

const sym = Symbol();

const sym2 = Symbol();


if(sym === sym2) {
    console.log('son iguales')
} else {
    console.log('son diferentes') // Un symbol nunca es igual a otro
}

const nombre = Symbol();
const apellido = Symbol();
const persona = {}

// Agregar nombre y apellido como llaves del objeto


persona[nombre] = 'Juan';
persona[apellido] = 'Torres';
persona[nombre] = 'Juan';

console.log(persona)

// Las propiedades que utilizan in symbol no son iterables

for( let i in persona) {
    console.log(i)
}

// Definir una descripcion del symbol

const nombreCliente = Symbol('Nombre del cliente')

const cliente = {}

cliente[nombreCliente] = 'Pedro'
console.log(cliente)