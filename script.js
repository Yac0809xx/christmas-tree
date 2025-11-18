document.getElementById("reservaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const fecha = document.getElementById("fecha").value;

    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = `¡${nombre}! Tu guapetón ${tipo} te espera el ${fecha} 😍✨`;
});
