// Haciendo un boton interactivo

const botonFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

botonFlotante.addEventListener('click', function() { //Funcion anonima
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent ='Idioma y moneda'
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    
});

