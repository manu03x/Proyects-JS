// Switch case

const metodoPago = 'cheque';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log(`Aun no has seleccionado un metodo de pago o con el que intentas pagar no esta soportado`)
}