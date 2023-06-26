// Weak Set


// El set almacena cualquier tipo de valor, el weakset solo objetos
// No es iterable
// No se puede saber el size

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}

weakset.add(cliente);

// weakset.add(nombre); // No le puedes pasar strings



console.log(weakset.has(cliente))

console.log(weakset)