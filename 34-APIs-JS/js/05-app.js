document.addEventListener('visibilitychange', () => {
    if(document.visibilityState == 'visible') {
        console.log('function pausar video');
    } else {
        console.log('pausar el video');
    }
})