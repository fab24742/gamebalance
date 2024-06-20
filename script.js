document.getElementById('submit').addEventListener('click', function() {
    var videojuego = parseInt(document.getElementById('videojuego').value);
    var actividad = parseInt(document.getElementById('actividad').value);

    if (actividad - videojuego >= 0) {
        document.getElementById('avatar').style.transform = 'translateX(100px)'; // Cambia la posición según sea necesario
    } else {
        alert('Necesitas más actividad física para avanzar.');
    }

    // Enviar datos al correo
    var mailto_link = 'mailto:tu_correo@example.com?subject=FitQuest Data&body=Videojuego: ' + videojuego + ' horas, Actividad Física: ' + actividad + ' horas';
    window.location.href = mailto_link;
});

