

//CLOSURE -- FORMA DE ACCEDER A UN VALOR O FUNCION DESDE EL EXTERIOR DE UNA FUNCION

const obtenerCliente = () => {
    const nombre = 'Juan'

    function muestraNombre(params) {
        console.log(nombre)
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();
