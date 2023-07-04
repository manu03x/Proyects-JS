let client = {
    table: '',
    hour: '',
    order: []
};



const saveClientButton = document.querySelector('#guardar-cliente');
saveClientButton.addEventListener( 'click', saveClient);

function saveClient() {
    const table = document.querySelector('#mesa').value;
    const hour = document.querySelector('#hora').value;

    // Array literal or Inline Array // Array al vuelo
    const isInputEmpty = [ table , hour ].some( input => input === '');

    if (isInputEmpty) {
        // Verify alert
        const isAlertVisible = document.querySelector('.invalid-feedback')

        if(!isAlertVisible){
            const alert = document.createElement('DIV');
            alert.classList.add('invalid-feedback', 'd-block', 'text-center');

            alert.textContent = "Required fields are empty"

            document.querySelector('.modal-body form').appendChild(alert)

            setTimeout(() => {
                alert.remove()
            }, 2000);
        }

        return;
    }

    // Fill object with form data
    client = {...client, table, hour}


    const form = document.querySelector('#formulario');
    const bootstrapModal = bootstrap.Modal.getInstance(form)
    bootstrapModal.hide();


    // Show sections
    showSections()

    // Get dishes from API

    getDishes()
}

function showSections() {
    const invisibleSections = document.querySelectorAll('.d-none')

    invisibleSections.forEach( section => section.classList.remove('d-none'))
}

async function getDishes() {
    const url = "http://localhost:4000/dishes"

    try {
        const response = await fetch(url)
        const json = await response.json()

        showDishes(json)
    } catch (error) {
        console.error(error)
    }
}

function showDishes(dishes) {
    const content = document.querySelector('#platillos .contenido')

    dishes.forEach( dish => {

        const {name, price, category, id} = dish

        const row = document.createElement('DIV');

        row.classList.add('row', 'py-3', 'border-top');

        const nameElement = document.createElement('DIV');
        nameElement.classList.add('col-md-4');
        nameElement.textContent = name

        const priceElement = document.createElement('DIV');
        priceElement.classList.add('col-md-3', 'fw-bold');
        priceElement.textContent = '$' + price


        const categories = {
            1: 'Meal',
            2: 'Drink',
            3: 'Dessert'
        }

        const categoryElement = document.createElement('DIV');
        categoryElement.classList.add('col-md-3');
        categoryElement.textContent = categories[category];

        const amountElement = document.createElement('INPUT');
        amountElement.type = 'number'
        amountElement.min = 0;
        amountElement.id = `product-${id}`
        amountElement.value = 0;
        amountElement.classList.add('form-control')

        // Detect wich dish is and amount is editing

        amountElement.onchange = function() {
            // LINEAR FUNCTION
            const amount = Number(amountElement.value)
            addDish({...dish, amount})
        }

        const addInput = document.createElement('DIV')
        addInput.classList.add('col-md-2')
        addInput.appendChild(amountElement)

        row.appendChild(nameElement)
        row.appendChild(priceElement)
        row.appendChild(categoryElement)
        row.appendChild(addInput)
        
        content.appendChild(row)
    })
}

function addDish(product) {

    let { order } = client;

    if (product.amount > 0) {
        const isDishRepeated = order.some( dish => dish.id === product.id );

        if (isDishRepeated) {
            const updatedOrder = order.map( dish => {
                if(dish.amount === product.id) {
                    dish.amount = product.amount;
                }

                return dish;
            });

            // Update the array
            client.order = [...updatedOrder];
        } else {
            client.order = [...order, product];
        }

    } else {
        const res = order.filter( dish => dish.id !== product.id );

        client.order = [...res];
    }

    updateSummary()
}

function updateSummary() {
    const content = document.querySelector('#resumen .contenido');

    const summary = document.createElement('DIV');

    summary.classList.add('col-md-6');


    // Table Info
    const table = document.createElement('P');
    table.textContent = 'Table: ';
    table.classList.add('fw-bold');

    const tableSpan = document.createElement('SPAN');
    tableSpan.textContent = client.table
    tableSpan.classList.add('fw-normal')


    // Hour info

    const hour = document.createElement('P');
    hour.textContent = 'Hour: ';
    hour.classList.add('fw-bold');

    const hourSpan = document.createElement('SPAN');
    hourSpan.textContent = client.hour
    hourSpan.classList.add('fw-normal')

    hour.appendChild(hourSpan)
    table.appendChild(tableSpan)

    content.appendChild(table)
    content.appendChild(hour)

}