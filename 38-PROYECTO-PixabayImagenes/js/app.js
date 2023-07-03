const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario');
const pagerElement = document.querySelector('#paginacion');

const recordsPerPage = 40;
let totalPages;
let pager;

let currentPage = 1;


window.onload = () => {
    form.addEventListener('submit', formValidation);
}


function formValidation(e) {
    e.preventDefault();
    const searchTerm = document.querySelector("#termino").value;
    if(searchTerm === '') {
        showAlert('Insert a search term');
        return;
    }

    getImage();

}

function showAlert(message) {

    const isAlertVisible = document.querySelector('.bg-red-100');

    if(!isAlertVisible) {
        const alert = document.createElement('P');

        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4' , 'py-3', 'rounded', 'max-w-lg', 'mt-6', 'text-center');

        alert.innerHTML = `
            <strong class="font-bold"> ERROR </strong>
            <span class="block sm:inline"> ${message} </span>
        `;

        form.appendChild(alert);

        setTimeout(() => {
            alert.remove()
        }, 3000);
    }
}

function getImage() {
    const searchTerm = document.querySelector("#termino").value;
    const key = '37980427-d67be9e9449980bfe802941ad';
    const url = `https://pixabay.com/api/?key=${key}&q=${searchTerm}&per_page=${recordsPerPage}&page=${currentPage}`;
    const totalPagination = 
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            totalPages = pagesCalculator(json.totalHits)
            showImages(json.hits)
        })
}

function pagesCalculator(totalHits) {
    return parseInt(Math.ceil(totalHits / recordsPerPage))
}

function *createPager(totalPages) {
    for (let i = 1; i <= totalPages; i++) {
        yield i;
    }
}

function showImages(images) {
    cleanHTML(result)
    images.forEach(image => {
        const { previewURL, likes, views, largeImageURL } = image;

        result.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}">

                <div class="p-4">
                    <p class="font-bold"> ${likes} <span class="font-light"> likes </span></p>
                    <p class="font-bold"> ${views} <span class="font-light"> views </span></p>

                    <a class=" block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                    href="${largeImageURL}" target="_BLANK" rel="noopener noreferrer"
                    >
                        Open
                    </a>
                </div>
            </div>
        </div>
        `
    });

    cleanHTML(pagerElement);
    printPager();
}

function cleanHTML(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

function printPager() {
    pager = createPager(totalPages);

    while(true) {
        const {done , value} = pager.next();

        if (done) return;

        const button = document.createElement('A');

        button.href = '#';
        button.dataset.page = value;
        button.textContent = value;
        button.classList.add('bg-yellow-400', 'mb-4', 'px-4', 'py-1', 'mr-2', 'font-bold', 'rounded', 'next');

        button.onclick = () => {
            currentPage = value;

            getImage()
        }
        pagerElement.appendChild(button);
    }
}