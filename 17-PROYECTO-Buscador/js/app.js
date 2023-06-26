//Variables


const year = document.querySelector('#year');
const select = document.querySelectorAll('select');

console.log(select)

//Contenedor para los resultados

const resultadosDiv = document.querySelector('#resultado');



const maxYear = new Date().getFullYear();
const min = maxYear - 10;


//Hacer un objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color:'',
}


//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los automoviles

    //Llena las opciones de años

    llenarSelect();
});

//Event listener para los select en una busqueda
select.forEach(s => {
    s.addEventListener('change', e => {
        const id = s.getAttribute('id');

        switch (id) {
            case 'marca':
                datosBusqueda.marca = e.target.value; 
                break;
            case 'year':
                datosBusqueda.year = parseInt(e.target.value); 
                break;
            case 'minimo':
                datosBusqueda.minimo = parseInt(e.target.value); 
                break;
            case 'maximo':
                datosBusqueda.maximo = parseInt(e.target.value); 
                break;
            case 'puertas':
                datosBusqueda.puertas = parseInt(e.target.value); 
                break;
            case 'transmision':
                datosBusqueda.transmision = e.target.value; 
                break;
            case 'color':
                datosBusqueda.color = e.target.value; 
                break;
        }

        filtrarAuto();
    })
});


//Funciones
function mostrarAutos(autos) {
    //Limpiar HTML
    limpiarHTML();

    //Iterar el arreglo

    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const carroDiv = document.createElement('DIV');
        carroDiv.innerHTML = 
        `<p>
            ${marca} 
            ${modelo} -
            ${year}
            ${puertas} Puertas - 
            Transmision: ${transmision} - 
            Precio: ${precio} - 
            Color: ${color}
        </p>`


        //Insertar en el HTML
        resultadosDiv.appendChild(carroDiv);

        
    });
}

function limpiarHTML() {
    while(resultadosDiv.firstChild) {
        resultadosDiv.removeChild(resultado.firstChild);
    }
}

function llenarSelect() {
    for(let i = maxYear; i >= min; i--) {
        const option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

function filtrarAuto() {
    //High Level Function
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor).filter(filtrarMinimo).filter(filtrarMaximo);

    if(!resultado.length){ // Ver si el array trae 0 elementos
        const noresultado = document.createElement('P');
        noresultado.textContent = `No hay resultados`;
        limpiarHTML();
        return resultadosDiv.appendChild(noresultado);
    };
    mostrarAutos(resultado);


}

function filtrarMarca(auto) {
    const {marca} = datosBusqueda // Deconstructing
    if(marca) {
        return marca === auto.marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const {year} = datosBusqueda;

    if(year) {
        return year === auto.year;
    }
    return auto;
}

//Aqui me quede
function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;

    if(minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;

    if(maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;

    if (puertas) {
        return puertas === auto.puertas;
    }

    return auto;
}

function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;

    if(transmision) {
        return transmision === auto.transmision; 
    }

    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBusqueda;

    if(color) {
        return color === auto.color;
    }

    return auto;
}