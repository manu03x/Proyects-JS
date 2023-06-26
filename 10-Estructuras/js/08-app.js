// Buenas practicas
const autenticado = true;
if (autenticado) {
    console.log('Usuario autenticado')
}

// Detener la ejecucion de un if con una funcion // Codigo similar al de un proyecto real

const puntaje = 500;

const revisarPuntaje = () => {
    if (puntaje > 400) {
        console.log('Excelente!!');
        return;
    }

    if (puntaje > 300) {
        console.log('Excelente!!');
        return;
    }
}

revisarPuntaje();
