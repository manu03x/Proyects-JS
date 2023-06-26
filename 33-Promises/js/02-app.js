const countries = [];

function newCountry(country,callback) {
    countries.push(country);
    console.log(`Agregado: ${country}`);
    callback();
}


function showCountries() {
    console.log(countries);
}


function callbackHell(){
    setTimeout(() => {
        newCountry('Alemania', showCountries)

        setTimeout(() => {
            newCountry('Francia', showCountries)
            setTimeout(() => {
                newCountry('Mexico', showCountries)
            }, 3000);
        }, 3000);
    }, 3000);
}

callbackHell();