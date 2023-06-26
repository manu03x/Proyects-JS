window.addEventListener('online', updateStatus)
window.addEventListener('offline', updateStatus)

function updateStatus() {
    if (navigator.onLine) {
        console.log('Conected')
    } else {
        console.log('Offline')
    }
}