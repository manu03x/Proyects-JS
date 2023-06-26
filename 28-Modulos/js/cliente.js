// IIFE Funcion que se ejecuta inmediatamente

export const nombreCliente = 'Juan';

export const ahorro = 200;


export function mostrarInformacion(nombre,ahorro) {
    return `Cliente: ${nombre} ahorro la cantidad de ${ahorro}`
}


export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene Saldo')
    } else {
        console.log('El cliente no tiene saldo')
    }
}


export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}

export default function nuevaFuncion() {
    console.log('Este es el export default')
}