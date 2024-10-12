// Cambio de texto al hacer hover en el título coreano
document.getElementById("titulo-coreano").addEventListener("mouseover", function() {
    this.textContent = "Te amo, estoy feliz";
});

document.getElementById("titulo-coreano").addEventListener("mouseout", function() {
    this.textContent = "널 사랑해, 난 행복해.";
});

// Interactividad para el botón DEV (cuando se clickea)
document.querySelector(".dev").addEventListener("click", function() {
    alert("Redirigiendo a tus perfiles DEV...");
    window.open("https://github.com/", "_blank"); // Abre GitHub, podés cambiar la URL
});

// Interactividad para los botones "Ver"
document.querySelectorAll(".ver").forEach(function(button) {
    button.addEventListener("click", function() {
        if (!this.classList.contains("disabled")) {
            alert("Vas a ver el proyecto seleccionado...");
            // Acá podés agregar la lógica para redirigir a cada proyecto
        }
    });
});
