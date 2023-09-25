import { showAlert, validate } from "./funciones.js";
import { newClient } from "./API.js";

(function() {
    const form = document.querySelector('#formulario');

    form.addEventListener('submit', clientValidation);

    function clientValidation(e) {
        e.preventDefault();

        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#telefono').value;
        const company = document.querySelector('#empresa').value;

        const client = {
            name,
            email,
            phone,
            company
        }

        if (validate(client)) {
            showAlert('All fields are required');
            return;
        }

        newClient(client)

    }
})();