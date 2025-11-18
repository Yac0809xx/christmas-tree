function reservar(nombre) {
    const corazon = document.getElementById("corazon");

    // Mostrar corazón animado
    corazon.style.display = "block";
    corazon.style.animation = "latir 0.6s ease";

    // Ocultar después
    setTimeout(() => {
        corazon.style.display = "none";
    }, 700);

    alert(`¡Has reservado a ${nombre}! 💖`);
}
