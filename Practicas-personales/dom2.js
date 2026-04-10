const container = document.querySelector(".container");
const visible = document.querySelector(".visible");

document.getElementById("btnTextContent").addEventListener("click", function () {
  console.log(container.textContent);
});

document.getElementById("btnInnerText").addEventListener("click", function () {
  console.log(container.innerText);
});

document.getElementById("btnOuterText").addEventListener("click", function () {
  visible.outerText = "Etiqueta eliminada y reemplazada";
});