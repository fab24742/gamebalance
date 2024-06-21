let storedHorasJuego = 0;
let storedHorasActividad = 0;

function registrarHoras() {
    const horasJuego = parseInt(document.getElementById('horasJuego').value);
    const horasActividad = parseInt(document.getElementById('horasActividad').value);

    if (isNaN(horasJuego) || isNaN(horasActividad)) {
        alert('Por favor, ingrese valores válidos para las horas.');
        return;
    }

    storedHorasJuego = horasJuego;
    storedHorasActividad = horasActividad;

    const progreso = horasActividad - horasJuego;
    moverAvatar(progreso);

    const mensajesMotivacionales = [
        "¡Sigue así, estás haciendo un gran trabajo!",
        "¡Cada paso cuenta, no te rindas!",
        "¡El esfuerzo de hoy es el éxito de mañana!",
        "¡Mantente enfocado y sigue avanzando!",
        "¡Cada día es una nueva oportunidad para mejorar!",
        "¡Eres más fuerte de lo que piensas!",
        "¡No hay límites para lo que puedes lograr!",
        "¡Sigue moviéndote, estás en el camino correcto!",
        "¡Cada gota de sudor es un paso hacia tu meta!",
        "¡El progreso es progreso, no importa cuán pequeño sea!"
    ];

    if (progreso >= 0) {
        document.getElementById('message-container').innerText = '';
    } else {
        const mensaje = mensajesMotivacionales[Math.floor(Math.random() * mensajesMotivacionales.length)];
        document.getElementById('message-container').innerText = mensaje;
    }

    document.getElementById('sendEmailButton').style.display = 'inline-block';

    // Guardar el estado en localStorage
    guardarEstado(horasJuego, horasActividad);

    // Limpiar los valores de las casillas
    document.getElementById('horasJuego').value = '';
    document.getElementById('horasActividad').value = '';
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

    // Guardar la posición del avatar en localStorage
    localStorage.setItem('avatarPosition', newBottom);
}

function enviarCorreo() {
    const email = "tu_email@example.com";
    const subject = "Registro de Horas FitQuest";
    const body = `Horas de Juego: ${storedHorasJuego}%0AHoras de Actividad Física: ${storedHorasActividad}`;

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    document.getElementById('sendEmailButton').style.display = 'none';
}

function volverAlInicio() {
    const avatar = document.getElementById('avatar');
    avatar.style.bottom = '10px';
    document.getElementById('message-container').innerText = '';
    document.getElementById('sendEmailButton').style.display = 'none';

    // Limpiar localStorage
    localStorage.removeItem('avatarPosition');
    localStorage.removeItem('horasJuego');
    localStorage.removeItem('horasActividad');
}

function guardarEstado(horasJuego, horasActividad) {
    localStorage.setItem('horasJuego', horasJuego);
    localStorage.setItem('horasActividad', horasActividad);
}

function cargarEstado() {
    const horasJuego = localStorage.getItem('horasJuego');
    const horasActividad = localStorage.getItem('horasActividad');
    const avatarPosition = localStorage.getItem('avatarPosition');

    if (horasJuego !== null) {
        document.getElementById('horasJuego').value = horasJuego;
    }
    if (horasActividad !== null) {
        document.getElementById('horasActividad').value = horasActividad;
    }
    if (avatarPosition !== null) {
        document.getElementById('avatar').style.bottom = avatarPosition + 'px';
    }
}

window.onload = cargarEstado;
