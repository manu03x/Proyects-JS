function descargarClientes() {
    
    return new Promise((resolve, reject) => {
        const error = false

        setTimeout(() => {
            if (!error) {
                resolve('Listado descargado :)')
            } else {
                reject('error en la conexion')
            }
        }, 3000);
    })
}

// Async await

const ejecutar = async () => {
    try {
        const response = await descargarClientes()

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

ejecutar();