const loadApi = document.querySelector('#cargarAPI');

loadApi.addEventListener('click', getData);


function getData() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then( res => res.json())
        .then(res => showHTML(res))
}

function showHTML(data) {
    const content = document.querySelector('.contenido');

    let html = ''

    data.forEach(profile => {
        const { author, post_url} = profile

        html += `
        <p> Autor: ${author}</p>
        <a href="${post_url}" target="_BLANK"> Ver imagen</a>
        `
    });

    content.innerHTML = html
}