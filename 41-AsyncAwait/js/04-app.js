function downloadClients() {
    return new Promise((resolve) => {
        console.log('Downloading clientes')

        setTimeout(() => {
            resolve('Clientes fueron descargados')
        }, 5000);
    })
}

function downloadPedidos() {
    return new Promise((resolve) => {
        console.log('Downloading pedidos')

        setTimeout(() => {
            resolve('Pedidos fueron descargados')
        }, 3000);
    })
}

const app = async () => {
    try {
        const response = await Promise.all([downloadClients(), downloadPedidos()])

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

app();

