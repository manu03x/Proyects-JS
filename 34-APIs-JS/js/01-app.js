const notificationBtn = document.querySelector('#notificar');

notificationBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( res => {
            console.log('El resultado es ', res);
        })
});

const seeNotification = document.querySelector('#verNotificacion');

seeNotification.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const noti = new Notification('Notification', {
            icon: 'img/ccj.png',
            body: 'Codigo con Juan'
        })

        noti.onclick = function() {
            window.open('https://codigoconjuan.com')
        }
    }

})