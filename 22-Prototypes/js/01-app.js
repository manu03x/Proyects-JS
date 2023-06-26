// Todos los objetos tienen prototypes

//OBJECT LITERAL

const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

//OBJECT CONSTRUCTOR

//Esto se concocia anteriormente como POO

function Cliente(nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

console.log(juan)