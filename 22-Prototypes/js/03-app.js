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

//Instanciarlo

const pedro = new Cliente('Pedro', 11000)
console.log(pedro.tipoCliente());
pedro.retiraSaldo(4000)
console.log(pedro.nombreClienteSaldo());


function Empresa(nombre,saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ= new Empresa('Codigo con Juan', 400, 'Cursos en linea')

console.log(CCJ)