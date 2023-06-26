const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];


// For in itera sobre objetos mientras que For of itera sobre arreglos


// for (const pendiente in pendientes) { // Esto imprime los indices 
//     console.log(pendiente);
// }


// Iterando un objeto
const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: 6.0
}

// for(let propiedad in automovil) {
//     console.log(`${automovil[propiedad]}`);
// }

// Nueva forma en ECMAScript 7

for( let [ket, value] of Object.entries(automovil)){
    console.log(value);
}