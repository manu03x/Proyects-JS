const producto = {
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Aunque el objeto este declarado con const se le pueden añadir y cambiar propiedades

delete producto.disponible;

producto.precio = 400;