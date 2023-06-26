// Form inputs

const petInput = document.querySelector('#mascota');
const phoneInput = document.querySelector('#telefono');
const ownerInput = document.querySelector('#propietario');
const dateInput = document.querySelector('#fecha');
const hourInput = document.querySelector('#hora');
const sintomsInput = document.querySelector('#sintomas');

// UI
const forms = document.querySelector('#nueva-cita');
const containerAppoints = document.querySelector('#citas');

let editando;

class Appointments {
    constructor() {
        this.appointments = [];


    }

    addAppoint(appointment) {
        this.appointments = [...this.appointments, appointment]
    }

    deleteAppoint(id) {
        this.appointments= this.appointments.filter(cita => cita.id !== id)
    }

    editAppoint(updateAppoint) {
        this.appointments = this.appointments.map( appoint => appoint.id === updateAppoint.id ? updateAppoint : appoint);
    }
}

class UI {
    showAlert(message, type) {
        const divMessage = document.createElement('div');
        divMessage.classList.add('text-center', 'alert', 'd-block', 'col-12');

        //TYPE ERROR

        if(type === 'error') {
            divMessage.classList.add('alert-danger');
        } else {
            divMessage.classList.add('alert-success');
        }

        divMessage.textContent = message;

        document.querySelector('#contenido').insertBefore(divMessage, document.querySelector('.agregar-cita'));

        setTimeout( () => {
            divMessage.remove()
        }, 5000)
    }

    showAppoints({appointments}) {
        this.limpiarHTML()

        appointments.forEach(appoint => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = appoint;

            const divAppoint = document.createElement('div');
            divAppoint.classList.add('cita', 'p-3');
            divAppoint.dataset.id = id;

            //Scripting de los elementos de la cita

            const petParraph = document.createElement('h2');
            petParraph.classList.add('card-title', 'font-weight-bolder');
            petParraph.textContent = mascota;

            const ownerParagraph = document.createElement('p');
            ownerParagraph.innerHTML = `
                <span class="font-weight-bolder">Propietario: </spam> ${propietario}
            `;

            const phoneParagraph = document.createElement('p');
            phoneParagraph.innerHTML = `
                <span class="font-weight-bolder">Telefono: </spam> ${telefono}
            `;

            const hourParagraph = document.createElement('p');
            hourParagraph.innerHTML = `
                <span class="font-weight-bolder">Fecha: </spam> ${hora}
            `;

            const dateParagraph = document.createElement('p');
            dateParagraph.innerHTML = `
                <span class="font-weight-bolder">Fecha: </spam> ${fecha}
            `;

            const sintomsParagraph = document.createElement('p');
            sintomsParagraph.innerHTML = `
                <span class="font-weight-bolder">Fecha: </spam> ${sintomas}
            `;

            // delete button

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'mr-2');
            deleteBtn.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>`;

            deleteBtn.onclick = () => deleteAppoint(id)

            // edit button

            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'btn-info');
            editBtn.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>`;

            editBtn.onclick = () => loadEdition(appoint)


            // Add parragraph
            divAppoint.appendChild(petParraph);
            divAppoint.appendChild(ownerParagraph);
            divAppoint.appendChild(phoneParagraph);
            divAppoint.appendChild(dateParagraph);
            divAppoint.appendChild(hourParagraph);
            divAppoint.appendChild(sintomsParagraph);
            divAppoint.appendChild(deleteBtn);
            divAppoint.appendChild(editBtn);

            containerAppoints.appendChild(divAppoint)
        })
    }

    limpiarHTML() {
        while(containerAppoints.firstChild) {
            containerAppoints.removeChild(containerAppoints.firstChild)
        }
    }
}

const ui = new UI();
const adminAppoint = new Appointments();
eventListeners();

function eventListeners() {
    petInput.addEventListener('input', datosCita)
    phoneInput.addEventListener('input', datosCita)
    ownerInput.addEventListener('input', datosCita)
    dateInput.addEventListener('input', datosCita)
    hourInput.addEventListener('input', datosCita)
    sintomsInput.addEventListener('input', datosCita)

    forms.addEventListener('submit', newAppoint)
}

// Principal Obj
const appointObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Add data to appointment obj
function datosCita(e) {
    appointObj[e.target.name] = e.target.value
}

function newAppoint(e) {
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas} = appointObj;

    // Validation

    if(!mascota || !propietario || !telefono || !fecha || !sintomas || !hora) {
        ui.showAlert('Todos los campos son obligatorios', 'error');

        return;
    }

    if(editando) {
        ui.showAlert('Editado correctamente');

        // Pasar el objeto de la cita a edicion

        adminAppoint.editAppoint({...appointObj})

        // Button replace
        forms.querySelector('button[type = "submit"]').textContent = 'Crear cita';

        editando = false;
    } else {
        // ID
        appointObj.id = Date.now()
        // Adding new appointment

        adminAppoint.addAppoint({.0..appointObj});

        ui.showAlert('Se agrego correctamente')
    }


    restartObj()

    forms.reset();

    //Mostar HTML de las citas

    ui.showAppoints(adminAppoint);


}


function restartObj() {
    appointObj.mascota = '';
    appointObj.propietario = '';
    appointObj.telefono = '';
    appointObj.fecha = '';
    appointObj.hora = '';
    appointObj.sintomas = '';
}

function deleteAppoint(id) {
    // Detele appoint
    adminAppoint.deleteAppoint(id)
    // Show messagge
    ui.showAlert('Cita eliminada correctamiente')
    // Show filtered dates
    ui.showAppoints(adminAppoint);

}

function loadEdition(appoint) {
    const {mascota, propietario, telefono, fecha, hora, sintomas,id} = appoint;

    petInput.value = mascota;
    phoneInput.value = telefono;
    ownerInput.value = propietario;
    dateInput.value = fecha;
    hourInput.value = hora;
    sintomsInput.value = sintomas;

    appointObj.mascota = mascota;
    appointObj.propietario = propietario;
    appointObj.telefono = telefono;
    appointObj.fecha = fecha;
    appointObj.hora = hora;
    appointObj.sintomas = sintomas;
    appointObj.id = id;


    forms.querySelector('button[type = "submit"]').textContent = 'Guardar Cambios';

    editando = true;

}