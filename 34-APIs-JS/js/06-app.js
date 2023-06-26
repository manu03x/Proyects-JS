const microButton = document.querySelector('#microfono')
const output = document.querySelector('#salida');


microButton.addEventListener('click', executeSpeechAPI);


function executeSpeechAPI() {
    const SpeechRecognition =webkitSpeechRecognition;

    const recognition = new SpeechRecognition();


    recognition.start()

    recognition.onstart = function() {
        output.classList.add('mostrar')
        output.textContent = 'Listening'
    }

    recognition.onspeechend = () => {
        output.textContent = 'Stopped'
        recognition.stop();
    };

    recognition.onresult = function(e) {
        const {confidence, transcript} = e.results[0][0]

        const p = document.createElement('p');

        p.innerHTML = transcript

        const conf = document.createElement('p')
        conf.innerHTML = confidence * 100

        microButton.appendChild(p)
        microButton.appendChild(conf)
    }
}