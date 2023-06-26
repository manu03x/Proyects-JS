import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js'
import { Empresa } from './empresa.js'

nuevaFuncion()
console.log( nombreCliente )
console.log( ahorro )

console.log( mostrarInformacion(nombreCliente, ahorro) );

const cliente = new Cliente(nombreCliente, ahorro);

console.log(cliente.mostrarInformacion())

// Importar empresa


const empresa = new Empresa('Codigo Con Juan', 100, 'Aprendizaje en Linea')
console.log(empresa.mostrarInformacion())




