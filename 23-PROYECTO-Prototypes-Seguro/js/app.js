//Constructors

function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

Insurance.prototype.quote = function(brand, year, type) {

    /*
        1= Americano 1.15
        2= Asiatico 1.05
        3= Europeo 1.35

    */

    let total;
    const floorPrice = 5000;
    switch (this.brand) {
        case "1":
            total = floorPrice * 1.15;
            break;
        case "2":
            total = floorPrice * 1.05;
            break;
        case "3":
            total = floorPrice * 1.35;
            break;

        default:
            break;
    }

    // Read year
    const difference = new Date().getFullYear() - this.year;

    // Each past year the total will be 3% cheaper

    total -= ((difference * 3) * total) / 100;
    /*
        if insurance type is basic total will be 30% more
        if insurance type is complete total will be 50% more
    */
    if(this.type === 'basico') {
        total *= 1.3;
    }

    if(this.type === 'completo') {
        total *= 1.5;
    }

    return total;

}

function UI() {}


// Fill option years
UI.prototype.fillYears = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

UI.prototype.showMessage = (message, type) => {
    const div = document.createElement('div');


    if(type === 'error') {
        div.classList.add( 'error');
    } else {
        div.classList.add( 'correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = message

    // Insert into HTML

    const formulario = document.querySelector('#cotizar-seguro')
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout( () => {
        div.remove();
    }, 3000)

}

UI.prototype.showResult = (total, insurance) => {

    const {brand, year, type} = insurance;
    let brandText;
    switch (brand) {
        case "1":
            brandText = 'Americano'
            break;
        case "2":
            brandText = 'Asiatico'
            break;
        case "3":
            brandText = 'Europeo'
            break;
        default:
            break;
    }

    //Create result
    const div = document.createElement('DIV')
    div.classList.add('mt-10')
    div.innerHTML = `
        <p class="header">TU COTIZACION</p>
        <p class= "font-bold"> TOTAL: <span class ="font-normal">$${total}.00 MXN</span></p>
        <p class= "font-bold"> MARCA: <span class ="font-normal">${brandText}</span></p>
        <p class= "font-bold"> AÑO: <span class ="font-normal">${year}</span></p>
        <p class= "font-bold"> TIPO: <span class ="font-normal capitalize">${type}</span></p>
    `;

    const resutadoDiv = document.querySelector('#resultado');

    const spinner = document.querySelector('#cargando')
    spinner.classList.remove('hidden')
    setTimeout(() => {
        spinner.classList.add('hidden')
        resutadoDiv.appendChild(div);
    }, 3000);
}
// UI Instance

const ui = new UI()

console.log(ui)

document.addEventListener('DOMContentLoaded', () => {
    ui.fillYears();
})

//Event Listeners
eventListeners()
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', quoteInsurance);
}

function quoteInsurance(e) {
    e.preventDefault();

    // Read brand
    const brand = document.querySelector('#marca').value;

    // Read year
    const year = document.querySelector('#year').value;

    //Read type
    const type = document.querySelector('input[name="tipo"]:checked').value;

    if(brand === "" || year === "" || type === ""){
        ui.showMessage('All fields are required', 'error');
        return;
    }

    ui.showMessage('Estimating...', 'exito');

    // delete previuos quotes

    const results = document.querySelector('#resultado div')
    results && results.remove()

    // Instanciar el seguro

    const insurance =  new Insurance(brand, year, type);
    const total = insurance.quote();
    ui.showResult(total, insurance)
    console.log(insurance)

}


