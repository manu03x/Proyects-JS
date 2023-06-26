//Pasar parametros a un arrow function

// Si solo le pasas un parametro le puedes quitar los parentesis

const aprendiendo1 = tecnologia => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo1('JS'));



// Si le pasas dos parametros tienes que ponerle los parentesis

const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('JS','Node'));