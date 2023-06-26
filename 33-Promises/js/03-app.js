const setDiscount = new Promise( ( resolve, reject ) => {
    const descuento = false;

    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar')
    }

});

setDiscount
    .then( res => console.log(res))
    .catch(error => console.log(error))


// Tres valores posibles

// fullfilled - El promise se cumplio
//rejected - El promise no se cumplio
// pending - No se ha cumplido y tampoco fue rechazado