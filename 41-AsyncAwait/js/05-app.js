const url = 'https://picsum.photos/list';

function getData() {
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error))
}


 async function getData() {
    try {
        const response = await fetch(url);
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}