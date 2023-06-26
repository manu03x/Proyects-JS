// This
const producto = {
    nombre:'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    showInfo: function () {
        console.log(`El ${this.nombre} tiene un precio de ${this.precio}`);
    }
}