// Eventos con el scroll

window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    // console.log(ubicacion);
    if(ubicacion.top < 716){
        console.log('el elemento esta visible');
    } else {
        console.log('el elemento no esta visible');
    }
})
