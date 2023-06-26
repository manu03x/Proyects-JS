// Maps

// Listas ordenadas en llave y valor

// Map contiene llave valor y los sets solo valores
const cliente = new Map();

cliente.set('nombre', 'Karen')
cliente.set('tipo', 'Premium')
cliente.set('saldo', 3000)


console.log(cliente.size)
console.log(cliente.has('nombre'))
console.log(cliente.get('nombre'))
console.log(cliente.delete('saldo'))


cliente.clear();
console.log(cliente)


const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('dr', 'DR asignado');
paciente.set('nombre', 'Antonio');

console.log(paciente)

paciente.forEach((datos, index) => { // son iterable
    console.log(datos)
})