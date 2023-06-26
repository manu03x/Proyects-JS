// Multiples funciones que se pasan valores

function sumar(a,b) {
    return(a + b);
}

const resultado = sumar(3,2);



//Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}


agregarCarrito(300);
agregarCarrito(600);
agregarCarrito(900);

const totalPagar = calcularImpuesto(total);

console.log(total);

console.log(`El total a pagar es ${totalPagar}`);