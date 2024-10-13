// Redirigir a GitHub cuando se presiona el botón DEV
document.getElementById("dev-button").addEventListener("click", function() {
    window.open("https://github.com", "_blank");
});

// Cambiar texto en coreano a español al pasar el cursor y mantener el color rojo
document.getElementById("korean-text").addEventListener("mouseenter", function() {
    this.innerText = "Te amo, soy feliz";
});

document.getElementById("korean-text").addEventListener("mouseleave", function() {
    this.innerText = "널 사랑해, 난 행복해.";
});

// Redirigir al archivo rguga.html al hacer clic en el botón de GUGA
document.getElementById("guga").querySelector(".view-btn").addEventListener("click", function() {
    window.location.href = "rguga.html";
});

// Redirigir al archivo rkeys.html al hacer clic en el botón de Key-Source
document.getElementById("key-source").querySelector(".view-btn").addEventListener("click", function() {
    window.location.href = "rkeys.html";
});
