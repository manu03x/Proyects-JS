// Aunque los arreglos esten declarados con const se pueden modificar

const meses = ['enero', 'febrero', 'abril', 'mayo'];

meses[0] = 'Primer mes'; // Sobreescribe enero
meses[10] = 'Ultimo mes'; // Agrega el indice 10 sin necesidad de llenar el arreglo con espacios en blanco

console.table(meses);

