// Eventos que suceden en el teclado sobre los inputs

const search = document.querySelector('.busqueda');

//

search.addEventListener('keydown', () => { 
    // console.log('escribiendo');
});

search.addEventListener('keyup', () => { 
    console.log('Presionaste y soltaste');
});

search.addEventListener('blur', () => { 
    console.log('Clickeaste el input y lo dejaste de presionar');
});

search.addEventListener('input', (e) => { // Se pasa automaticamente el evento al parametro e
    console.log(e.target.value); // Para saber lo que el usuario escribe
});

// Ejemplo
busqueda.addEventListener('input', (e) => {
    if(e.target.value === '') {
        console.log('Fallo la validacion');
    }
})

// keydown -- cuando presionas una tecla
// keyup -- cuando presionas una tecla y la sueltas
// input -- Escucha todos los eventos del input
// blur -- Clickeaste el input y lo dejaste de presionar