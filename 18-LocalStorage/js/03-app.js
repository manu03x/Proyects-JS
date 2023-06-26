localStorage.removeItem('producto')

// Actualizar un registro

const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo Mes');
localStorage.setItem('meses', JSON.stringify(mesesArray));