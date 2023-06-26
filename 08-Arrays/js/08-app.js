const producto = {
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

const {nombre, precio, disponible} = producto;



// Destructuring con arrays 

const numeros = [1, 2, 3, 4];

const [uno, dos, tres] = numeros; // Asigna un nombre a el valor del array deseado

console.log(dos);

const [ , , , cuatro] = numeros; // Si solo se requiere un elemento en especifico

console.log(cuatro); 

const [primero, segundo, ...restantes] = numeros; // Se hacen las variables que quieras pero las restantes de hacen un arreglo por separado

console.log(restantes);
