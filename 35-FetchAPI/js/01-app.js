const txtBtn = document.querySelector('#cargarTxt');

txtBtn.addEventListener('click', getData);


function getData() {
    const url = 'data/datos.txt'

    fetch(url)
        .then(res => {
            console.log(res)
            console.log(res.status)
            console.log(res.type)

            return res.text()
        })
        .then( data => {
            console.log(data);
        })
        .catch( error => {
            console.log(error)
        })
}