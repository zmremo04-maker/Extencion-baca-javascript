const passwordOutput = document.getElementById("passwordOutput");
const slider = document.getElementById("longitud");
const valorLongitud = document.getElementById("valorLongitud");

const usarMayusculas = document.getElementById("usarMayusculas");
const usarMinusculas = document.getElementById("usarMinusculas");
const usarNumeros = document.getElementById("usarNumeros");
const usarSimbolos = document.getElementById("usarSimbolos");

const btnGenerar = document.getElementById("btnGenerar");
const copiarBtn = document.getElementById("copiarBtn");
const nivelFuerza = document.getElementById("nivelFuerza");

// actualizar número del slider
slider.addEventListener("input", function () {
  valorLongitud.textContent = slider.value;
});

// generar password
btnGenerar.addEventListener("click", function () {
  let caracteres = "";

  if (usarMinusculas.checked) {
    caracteres += "abcdefghijklmnopqrstuvwxyz";
  }

  if (usarMayusculas.checked) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (usarNumeros.checked) {
    caracteres += "0123456789";
  }

  if (usarSimbolos.checked) {
    caracteres += "!@#$%^&*()_+";
  }

  let longitud = Number(slider.value);
  let password = "";

  for (let i = 0; i < longitud; i++) {
    let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    password += caracteres[indiceAleatorio];
  }

  passwordOutput.value = password;
  actualizarFuerza(password);
});

// copiar password
copiarBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordOutput.value);
  alert("Password copiado");
});

// fuerza básica
function actualizarFuerza(password) {
  if (password.length >= 16) {
    nivelFuerza.textContent = "FUERTE";
  } else if (password.length >= 12) {
    nivelFuerza.textContent = "MEDIO";
  } else {
    nivelFuerza.textContent = "DEBIL";
  }
}