// Funciones para redirigir a las páginas de proyectos
document.getElementById("ver-guga").addEventListener("click", function() {
    window.open("recursos/Recursos-GUGA/index.html", "_blank");
});

document.getElementById("ver-keysource").addEventListener("click", function() {
    window.open("recursos/Recursos-KS/index.html", "_blank");
});

// Funciones para el botón DEV
document.getElementById("dev-btn").addEventListener("click", function() {
    // Mostrar opciones de Reddit e Instagram
    let devOptions = document.getElementById("dev-options");
    devOptions.classList.toggle("hidden");
});

// Funciones para botones de redes
document.getElementById("reddit-btn").addEventListener("click", function() {
    window.open("https://www.reddit.com/user/tu_perfil", "_blank");
});

document.getElementById("instagram-btn").addEventListener("click", function() {
    window.open("https://www.instagram.com/tu_perfil", "_blank");
});

// Animación para el hover de los botones "Ver" (puede personalizarse si querés algo más)
const botonesVer = document.querySelectorAll(".ver-btn");
botonesVer.forEach(boton => {
    boton.addEventListener("mouseenter", function() {
        boton.style.backgroundColor = "#3A3B3E";  // Cambia el color al hover
    });
    boton.addEventListener("mouseleave", function() {
        boton.style.backgroundColor = "#2A2B2E";  // Vuelve al color original
    });
});

// Otras animaciones o eventos
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Ejemplo para cambiar contenido dinámicamente (puedes modificar según necesidad)
document.addEventListener("DOMContentLoaded", function() {
    let tituloPrincipal = document.getElementById("titulo-principal");
    tituloPrincipal.innerText = "Bienvenido a mis proyectos";
});

// Más animaciones
const animacionTarjetas = () => {
    const tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.transitionDelay = `${index * 100}ms`;
        tarjeta.classList.add("animar-tarjeta");
    });
};

window.onload = animacionTarjetas;

// Puedes seguir agregando más funciones y animaciones acá
