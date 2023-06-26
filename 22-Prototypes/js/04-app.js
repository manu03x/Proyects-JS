function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold'
    } else if (this.saldo > 5000 ){
        tipo = 'Platinum'
    } else {
        tipo = 'Normal'
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()} `
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira
}

//HEREDAR

function Persona(nombre,saldo,telefono) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono
}

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente
//Instanciarlo

const juan = new Persona('Juan', 5000, 31201231)

console.log(juan)
console.log(juan.nombreClienteSaldo())

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de ${this.nombre} es ${this.telefono}`
}

console.log(juan.mostrarTelefono())

// GOD OBJECT -- UN OBJETO PRINCIPAL QUE VA HEREDANDO PROPIEDADES