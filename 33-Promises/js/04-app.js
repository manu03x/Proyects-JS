const countries = [];

const newCountry = country => new Promise( resolve => {
    setTimeout( () => {
        countries.push(country);
        resolve(`Added: ${country}`);
    }, 3000)
})

newCountry('Alemania')
    .then( res => {
        console.log(res)
        console.log(countries)

        return newCountry('Francia')
    })
    .then( res => {
        console.log(res)
        console.log(countries)
        return newCountry('Inglaterra')
    })
    .then( res => {
        console.log(res)
        console.log(countries)
        return newCountry('Mexico')
    })
    .then( res => {
        console.log(res)
        console.log(countries)
    })