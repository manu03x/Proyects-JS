const producto = 'Monitor 20 Pulgadas';


// Replace // Changes strings characters that already had been written. 

console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// Slice // Commonly used to cut strings

console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Slice alternative

console.log(producto.substring(0,10))

const usuario = "Juan";
console.log(usuario.charAt(0));
console.log(usuario.substring(0,1));