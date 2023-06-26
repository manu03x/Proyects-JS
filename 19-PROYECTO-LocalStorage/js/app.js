//Variables
const form = document.querySelector('#formulario');
const tweetList = document.querySelector('#lista-tweets');
let tweets = []



//Event Listeners
loadEventListeners()
function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
        getStorageData()
        createHTML()
        console.log(tweets)
    })
    form.addEventListener('submit', addTweet)
}


//Funciones

function addTweet(e) {
    e.preventDefault();

    //Text Area
    const tweet = document.querySelector('#tweet').value

    //Validation
    if(tweet === '') {
        showError('Un mensaje no puede ir vacio')
        return;
    }
    const year = new Date().getFullYear();
    const tweetObj = {
        text: tweet,
        id: Date.now(),
        year
    }
    // Add to tweets array

    tweets = [...tweets, tweetObj];


    //Add HTML
    createHTML()

    form.reset()
    console.log(tweets)

}

function showError(messagge) {
    const errorMessagge = document.createElement('P');
    errorMessagge.textContent = messagge
    errorMessagge.classList.add('error')

    const content = document.querySelector('#contenido')
    content.appendChild(errorMessagge)

    // Remove alert after 4 seconds
    setTimeout( () => {
        errorMessagge.remove()
    }, 4000)
}

//Show tweets

function createHTML() {
    clearHTML()
    if(tweets.length > 0) {
        tweets.forEach( tweet => {
            // Add delete button
            const deleteButton = document.createElement('a');
            deleteButton.classList.add('borrar-tweet');
            deleteButton.innerText = 'X'
            // Delete button on click
            deleteButton.onclick = () => {
                deleteTweet(tweet.id);
            }
            //Crear HTML
            const li = document.createElement('li');

            //Añadir el texto

            li.innerText = `${tweet.text} -- ${tweet.year}`

            //Assign button
            li.appendChild(deleteButton)
            // Insert into HTML
            tweetList.appendChild(li);

        })
    }

    syncStorage()
}

function clearHTML() {
    while(tweetList.firstChild){
        tweetList.removeChild(tweetList.firstChild)
    }
}

//Agrega los tweets a local storage
function syncStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function getStorageData() {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
}

function deleteTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    console.log(tweets)
    createHTML()
}