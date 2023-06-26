const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Si puedes comprar');
} else if(!usuario && !puedePagar) {
    console.log('No puedes comprar');
} else if (!usuario){
    console.log('Inicia sesion o saca una cuenta');
} else if (!puedePagar) {
    console.log('No tienes el saldo suficiente');
} else {
    console.log('No no puedes comprar');
}