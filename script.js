const mensajesMotivacionales = [
    "¡No te rindas, cada paso cuenta!",
    "¡Eres increíble, sigue así!",
    "¡El esfuerzo de hoy es el éxito de mañana!",
    "¡Cada día es una nueva oportunidad!",
    "¡Sigue adelante, estás haciendo un gran trabajo!",
    "¡No hay límites para lo que puedes lograr!",
    "¡La perseverancia te llevará al éxito!",
    "¡Cada esfuerzo cuenta, sigue adelante!",
    "¡Tu dedicación es inspiradora!",
    "¡Estás haciendo un gran progreso, sigue así!"
];

function registrarHoras() {
    const horasJuego = parseInt(document.getElementById('horasJuego').value);
    const horasActividad = parseInt(document.getElementById('horasActividad').value);

    if (isNaN(horasJuego) || isNaN(horasActividad)) {
        alert('Por favor, ingrese valores válidos para las horas.');
        return;
    }

    const progreso = horasActividad - horasJuego;
    moverAvatar(progreso);

    // Mostrar mensaje motivacional si el avatar no avanza
    if (progreso <= 0) {
        mostrarMensajeMotivacional();
    } else {
        document.getElementById('mensaje-container').innerText = '';
    }

    // Mostrar botón de enviar correo
    document.getElementById('email-container').style.display = 'block';
}

function moverAvatar(progreso) {
    const avatar = document.getElementById('avatar');
    const mapaContainer = document.getElementById('mapa-container');
    const maxBottom = mapaContainer.offsetHeight - avatar.offsetHeight - 10;

    let currentBottom = parseInt(avatar.style.bottom) || 10;
    let newBottom = currentBottom + (progreso * 10); // Ajusta este valor según el nivel de avance deseado

    if (newBottom < 10) newBottom = 10;
    if (newBottom > maxBottom) newBottom = maxBottom;

    avatar.style.bottom = newBottom + 'px';
}

function mostrarMensajeMotivacional() {
    const mensajeContainer = document.getElementById('mensaje-container');
    const mensajeAleatorio = mensajesMotivacionales[Math.floor(Math.random() * mensajesMotivacionales.length)];
    mensajeContainer.innerText = mensajeAleatorio;
}

function enviarCorreo() {
    const horasJuego = parseInt(document.getElementById('horasJuego').value);
    const horasActividad = parseInt(document.getElementById('horasActividad').value);

    const email = "tu_email@example.com";
    const subject = "Registro de Horas FitQuest";
    const body = `Horas de Juego: ${horasJuego}%0AHoras de Actividad Física: ${horasActividad}`;

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function volverInicio() {
    location.reload();
}
