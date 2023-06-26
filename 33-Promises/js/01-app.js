// Callbacks


const countries = ['France', 'Italy', 'England', 'Austria']

function newCountry(country, callback){
    setTimeout(() => {
        countries.push(country);
        callback();
    }, 2000);
}
function showCountries() {
    setTimeout(() => {
        countries.forEach(element => {
            console.log(element)
        });
    }, 1000);
}

// showCountries();

newCountry('Mexico', showCountries)