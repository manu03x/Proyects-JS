//Unir dos objetos

const producto = {
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);


const resultado = Object.assign(producto, medidas); 




// Spread operator o Rest operator -- La que mas se utiliza

const resultado2 = {...producto, ...medidas} // Los 3 puntos son para copiar. Aqui se copian los objetos y se ponen dentro de resultado2

console.log(resultado);
console.log(resultado2);