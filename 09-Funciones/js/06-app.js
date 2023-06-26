// Parametros por default

function saludar(nombre, apellido = ""){ // Si no esta presente un valor se agrega otro
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Emmanuel', 'Ruiz');
saludar('Emmanuel');