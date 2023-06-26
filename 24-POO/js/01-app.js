// Class declaration

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades estaticas
    // No requieren instancia para llamarlo
    // Se llaman desde la clase

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

console.log(Cliente.bienvenida())


const juan = new Cliente('Juan', 400);
console.log(juan)
// Class expression

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const juan2 = new Cliente2('Manuel');

console.log(juan.mostrarInformacion())