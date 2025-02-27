function crearNotificacion(titulo, mensaje, tipo = 'info') {
    const template = document.getElementById('notification-template');
    const notificacion = template.content.cloneNode(true);
    
    notificacion.querySelector('.notification-title').textContent = titulo;
    notificacion.querySelector('.notification-message').textContent = mensaje;
    
    const notificacionElement = notificacion.querySelector('.notification');
    notificacionElement.classList.add(tipo);
    
    const iconoElement = notificacion.querySelector('.notification-icon svg');
    iconoElement.setAttribute('fill', 'currentColor');
    
    let sonidoSrc;
    switch (tipo) {
        case 'success':
            iconoElement.innerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>';
            sonidoSrc = 'Assets/mixkit-positive-notification-951.wav';
            break;
        case 'warning': 
            iconoElement.innerHTML = '<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>';
            sonidoSrc = 'Assets/mixkit-game-quick-warning-notification-268.wav';
            break;
        case 'error':
            iconoElement.innerHTML = '<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>';
            sonidoSrc = 'https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3';
            break;
        default:
            iconoElement.innerHTML = '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>';
            sonidoSrc = 'https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3';
    }
    
    const audio = new Audio(sonidoSrc);
    audio.volume = 0.08;
    audio.play();
    
    document.getElementById('notification-center').appendChild(notificacionElement);
    
    setTimeout(() => {
        notificacionElement.style.opacity = '0';
        notificacionElement.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notificacionElement.remove();
        }, 300);
    }, 5000);
}

window.addEventListener('message', (event) => {
    if (event.data.type === 'notification') {
        crearNotificacion(event.data.title, event.data.message, event.data.notificationType);
    }
});