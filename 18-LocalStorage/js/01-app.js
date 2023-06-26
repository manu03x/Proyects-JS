localStorage.setItem('nombre', 'Juan');

const producto = {
    nombre: "Monito 24 Pulgadas",
    precio: 300
}
const meses = ['Enero', 'Febrero', 'Marzo']

const productoString = JSON.stringify(producto);
const mesesString = JSON.stringify(meses);

localStorage.setItem('producto', productoString);
localStorage.setItem('meses', mesesString);