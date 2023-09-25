import { getClient , updateClient} from "./API.js";
import { showAlert, validate } from "./funciones.js";

(function () {

    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const companyInput = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded' , async () => {
        const id = getId()

        const client = await getClient(id);

        showClient(client)

        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validateClient)
    })

    function showClient(client) {
    
        // Llenar los campos con los valores del cliente
        nameInput.value = client.name;
        emailInput.value = client.email;
        phoneInput.value = client.phone;
        companyInput.value = client.company;

    }

    function getId() {
        const urlParmeters = new URLSearchParams(window.location.search);
        const clientId = parseInt(urlParmeters.get('id'));

        return clientId;
    }

    function validateClient(e) {
        e.preventDefault();

        const client = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            company: companyInput.value,
            id: getId()
        }

        if (validate(client)) {
            showAlert('All fields are required');
            return;
        }
        
        updateClient(client)
    }
})();