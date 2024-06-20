function registrarHoras() {
    const horasJuego = parseInt(document.getElementById('horasJuego').value);
    const horasActividad = parseInt(document.getElementById('horasActividad').value);

    if (isNaN(horasJuego) || isNaN(horasActividad)) {
        alert('Por favor, ingrese valores válidos para las horas.');
        return;
    }

    const progreso = horasActividad - horasJuego;
    moverAvatar(progreso);

    // Enviar correo con las horas registradas
    enviarCorreo(horasJuego, horasActividad);
}

function moverAvatar(progreso) {
    const avatar = document.getElementById('avatar');
    const maxTop = document.getElementById('map').offsetHeight - avatar.offsetHeight;

    let currentBottom = parseInt(avatar.style.bottom) || 10;
    let newBottom = currentBottom + (progreso * 10); // Ajusta este valor según el nivel de avance deseado

    if (newBottom < 10) newBottom = 10;
    if (newBottom > maxTop) newBottom = maxTop;

    avatar.style.bottom = newBottom + 'px';
}

function enviarCorreo(horasJuego, horasActividad) {
    const email = "tu_email@example.com";
    const subject = "Registro de Horas FitQuest";
    const body = `Horas de Juego: ${horasJuego}%0AHoras de Actividad Física: ${horasActividad}`;

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}
