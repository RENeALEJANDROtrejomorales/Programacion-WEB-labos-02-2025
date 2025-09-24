document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); // evita que se recargue la página

    let dia = document.getElementById("dia").value.trim().toLowerCase();
    let mensaje = document.getElementById("mensaje").value.trim();
    let resultado = document.getElementById("resultado");

    let actividades = {
        "lunes": "Atender un cliente específico.",
        "martes": "Visitar una agencia fuera de la ciudad.",
        "miércoles": "Llevar a mi hija al ballet.",
        "miercoles": "Llevar a mi hija al ballet.", // por si no ponen tilde
        "jueves": "Priorizar entregas de desarrollo.",
        "viernes": "Atender problemas de manera remota.",
        "sábado": "Hacer lo que mi esposa quiera.",
        "sabado": "Hacer lo que mi esposa quiera."
    };

    if (actividades[dia]) {
        resultado.innerHTML = `✅ Hoy es <b>${dia.charAt(0).toUpperCase() + dia.slice(1)}</b>. <br> 
        Actividad: ${actividades[dia]} <br>
        ${mensaje ? "Nota personal: " + mensaje : ""}`;
    } else {
        resultado.innerHTML = `⚠️ No tengo actividades registradas para "${dia}".`;
    }
});
