// --- ELEMENTOS DEL MÓDULO A ---
let titulo = document.getElementById("titulo");
let p1 = document.getElementById("parrafo1");
let btnCambiar = document.getElementById("cambiarContenido");

// --- ELEMENTOS DEL MÓDULO B ---
let p2 = document.getElementById("parrafo2");
let btnMostrar = document.getElementById("mostrar");

// Lógica Módulo A: Cambiar texto al pasar el mouse
btnCambiar.addEventListener("mouseenter", function() {
    titulo.textContent = "¡Texto Transformado!";
    p1.textContent = "El mouse está encima del botón.";
});

btnCambiar.addEventListener("mouseleave", function() {
    titulo.textContent = "¡Bienvenido a mi página!";
    p1.textContent = "Este es el contenido inicial.";
});

// Lógica Módulo B: Mostrar/Ocultar con clic
btnMostrar.addEventListener("click", function() {
    if (p2.style.display === "none") {
        p2.style.display = "block";
        btnMostrar.textContent = "Ocultar contenido";
    } else {
        p2.style.display = "none";
        btnMostrar.textContent = "Mostrar contenido";
    }
});