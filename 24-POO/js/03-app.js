class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

//HERENCIA

class Empresa extends Cliente {
    constructor (nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono
        this.categoria = categoria
    }

    static bienvenida() { //Reescribir un metodo
        return `Bienvenido al cajero de empresas`
    }
}

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Bimbo', 5000, 3123133)

console.log(empresa)


