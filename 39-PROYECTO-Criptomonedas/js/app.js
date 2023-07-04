const cryptoSelect = document.querySelector('#criptomonedas');
const fiatSelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

const searchObject = {
    fiat: '',
    crypto: ''
}

document.addEventListener('DOMContentLoaded', function() {
    getCryptos();

    form.addEventListener('submit', submitForm)
    cryptoSelect.addEventListener('change', readValue)
    fiatSelect.addEventListener('change', readValue)
})

async function getCryptos() {
    const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    // fetch(url)
    //     .then(response => response.json())
    //     .then(json => promiseCryptos(json.Data))
    //     .then(cryptos => printOnSelect(cryptos))

    try {
        const response = await fetch(url)
        const json = await response.json()
        const getCryptocurrency = await promiseCryptos(json.Data)

        printOnSelect(getCryptocurrency)
    } catch (error) {
        console.error(error)
    }
}

function readValue(e){

    searchObject[e.target.name] = e.target.value

}

const promiseCryptos =  cryptos => new Promise ( resolve  => {
    resolve(cryptos)
});

function printOnSelect(cryptos) {
    cryptos.forEach(crypto => {
        const {Name, FullName} = crypto.CoinInfo

        const option = document.createElement('OPTION');
        option.textContent = FullName;
        option.value = Name

        cryptoSelect.appendChild(option)
    });
}

function submitForm(e) {
    e.preventDefault();

    // Validation

    const {fiat , crypto} = searchObject;

    if(!fiat || !crypto) {
        showAlert('All fields are required');
        return;
    }
    
    // API

    queryToAPI()
}

function showAlert(message) {
    const alertExists = document.querySelector('.error');

    if(alertExists) {
        return;
    }

    const divMessage = document.createElement('DIV');
    divMessage.classList.add('error');

    divMessage.textContent = message;

    form.appendChild(divMessage);

    setTimeout(() => {
        divMessage.remove();
    }, 3000);
}

async function queryToAPI() {
    const {fiat , crypto} = searchObject;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${fiat}`;

    showSpinner();

    // fetch(url)
    //     .then(response => response.json())
    //     .then(json => showCryptoInfo(json.DISPLAY[crypto][fiat]))

    try {
        const response = await fetch(url)
        const json = await response.json()
        showCryptoInfo(json.DISPLAY[crypto][fiat])
    } catch (error) {
        console.error(error)
    }
}

function cleanHTML(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}
function showCryptoInfo(data) {

    cleanHTML(result)

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = data

    console.log(data)
    const price = document.createElement('P');
    price.classList.add('price');
    price.innerHTML = `PRICE: <span>${PRICE}</span>`;


    const highPrice = document.createElement('P');
    highPrice.innerHTML = `MAX PRICE(24H): <span>${HIGHDAY}</span>`;

    const lowPrice = document.createElement('P');
    lowPrice.innerHTML = `LOWEST PRICE(24H): <span>${LOWDAY}</span>`;

    const changeDay = document.createElement('P');
    changeDay.innerHTML = `CHANGE % (24H): <span> % ${CHANGEPCT24HOUR}</span>`;

    const lastUpdate = document.createElement('P');
    lastUpdate.innerHTML = `LAST UPDATE: <span> ${LASTUPDATE}</span>`;


    result.appendChild(price);
    result.appendChild(highPrice);
    result.appendChild(lowPrice);
    result.appendChild(changeDay);
    result.appendChild(lastUpdate);
}

function showSpinner() {

    cleanHTML(result)

    const spinner = document.createElement('DIV');
    spinner.classList.add('sk-folding-cube'),

    spinner.innerHTML = `
    <div class="sk-cube1 sk-cube"></div>
    <div class="sk-cube2 sk-cube"></div>
    <div class="sk-cube4 sk-cube"></div>
    <div class="sk-cube3 sk-cube"></div>
    `
    result.appendChild(spinner)

}
