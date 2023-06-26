

const dinero = 1000;
const totalAPagar = 300;
const tarjeta = true;
const cheque = true;


if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si puedo pagar por que tengo la tarjeta')
} else if (cheque) {
    console.log('Si tengo cheque');
} else { 
    console.log('Fondos Insuficientes');
}