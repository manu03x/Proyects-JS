let client = {
    table: '',
    hour: '',
    order: []
};

let subtotal = 0;


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
            console.log('se repitio')
            const updatedOrder = order.map( dish => {
                if(dish.id === product.id) {
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

    

    cleanHTML();
    conditionalPrintOrder();

}

function updateSummary() {
    const content = document.querySelector('#resumen .contenido');

    const summary = document.createElement('DIV');

    summary.classList.add('col-md-6', 'py-5', 'px-3', 'shadow');


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

    hour.appendChild(hourSpan);
    table.appendChild(tableSpan);

    const heading = document.createElement('H3');
    heading.textContent = 'Ordered Dishes';
    heading.classList.add('my-4', 'text-center');

    // Print dishes

    const group = document.createElement('UL');
    group.classList.add('list-group');

    const { order } = client

    order.forEach( dish => {
        const {name, price, amount, id} = dish;

        subtotal += price * amount

        const list = document.createElement('LI');
        list.classList.add('list-group-item');

        const nameElement = document.createElement('H4');
        nameElement.classList.add('my-4');
        nameElement.textContent = name;

        const amountElement = document.createElement('P');
        amountElement.classList.add('fw-bold');
        amountElement.textContent = 'Amount: ' + amount;

        const priceElement = document.createElement('P');
        priceElement.classList.add('fw-bold');
        priceElement.textContent = 'Price: $' + price;

        const deleteButton = document.createElement('BUTTON');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Delete';

        deleteButton.onclick = function() {
            deleteDish(id);
        }

        //Add Elements to Li
        list.appendChild(nameElement)
        list.appendChild(amountElement)
        list.appendChild(priceElement)
        list.appendChild(deleteButton)

        //Add to UL

        group.appendChild(list);
    })

    const subtotalEl = document.createElement('P');
    subtotalEl.classList.add('fw-bold', 'py-4');
    subtotalEl.textContent = 'SubTotal: $' + subtotal


    summary.appendChild(table)
    summary.appendChild(hour)
    summary.appendChild(heading)
    summary.appendChild(group)
    summary.appendChild(subtotalEl)

    content.appendChild(summary)

    createTipsForm();
}

function cleanHTML() {
    const content = document.querySelector('#resumen .contenido');

    while (content.firstChild) {
        content.removeChild(content.firstChild)
    }
}

function deleteDish(id) {

    const { order } = client;

    const filtered = order.filter( dish => dish.id !== id);



    client.order = [...filtered];

    console.log(client.order)

    cleanHTML();
    conditionalPrintOrder();

    //Reset number input if product deleted

    const dishInput = document.querySelector(`#product-${id}`)
    dishInput.value = 0



}

function emptyOrder() {
    const content = document.querySelector('#resumen .contenido');

    const emptyOrderP = document.createElement('P');
    emptyOrderP.classList.add('text-center');
    emptyOrderP.textContent = 'Add items to your order';

    content.appendChild(emptyOrderP);
}

function conditionalPrintOrder() {
    if(client.order.length) {
        updateSummary();
    } else {
        emptyOrder();
    }
}

function createTipsForm() {
    const content = document.querySelector('#resumen .contenido');

    const tipsForm = document.createElement('DIV');
    tipsForm.classList.add('col-md-4', 'form', 'shadow', 'mx-5');

    const heading = document.createElement('H3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'Tips';

    const tip10 = document.createElement('INPUT');
    tip10.type = 'radio';
    tip10.name = 'tip';
    tip10.value = '10';

    tip10.classList.add('form-check-input');

    const tip10label = document.createElement('LABEL');
    tip10label.textContent = '10%'
    tip10label.classList.add('form-check-label');

    tip10div = document.createElement('DIV');
    tip10div.classList.add('form-check')

    tip10div.appendChild(tip10)
    tip10div.appendChild(tip10label)

    const total =  document.createElement('H3')
    total.textContent = 'Total: ' + subtotal + (subtotal) // PENDIENTE

    tipsForm.appendChild(heading);
    tipsForm.appendChild(tip10div);

    content.appendChild(tipsForm);
    content.appendChild(total);
}