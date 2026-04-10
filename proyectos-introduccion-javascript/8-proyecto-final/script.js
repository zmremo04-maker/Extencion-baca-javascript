const comentarioInput = document.getElementById("comentarioInput");
const btnAgregar = document.getElementById("btnAgregar");
const listaComentarios = document.getElementById("listaComentarios");
const contadorComentarios = document.getElementById("contadorComentarios");

// array principal donde vivirá todo
let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

mostrarComentarios();

// agregar comentario
btnAgregar.addEventListener("click", function () {
  const textoComentario = comentarioInput.value.trim();

  if (textoComentario === "") return;

  const nuevoComentario = {
    texto: textoComentario,
    fecha: new Date().toLocaleString()
  };

  comentarios.push(nuevoComentario);

  guardarComentarios();
  mostrarComentarios();

  comentarioInput.value = "";
});

// guardar en localStorage
function guardarComentarios() {
  localStorage.setItem("comentarios", JSON.stringify(comentarios));
}

// mostrar comentarios en pantalla
function mostrarComentarios() {
  listaComentarios.innerHTML = "";

  comentarios.forEach(function (comentario, index) {
    const comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    const texto = document.createElement("p");
    texto.textContent = comentario.texto;

    const fecha = document.createElement("small");
    fecha.textContent = comentario.fecha;

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function () {
      comentarios.splice(index, 1);
      guardarComentarios();
      mostrarComentarios();
    });

    comentarioDiv.appendChild(texto);
    comentarioDiv.appendChild(fecha);
    comentarioDiv.appendChild(btnEliminar);

    listaComentarios.appendChild(comentarioDiv);
  });

  actualizarContador();
}

// actualizar contador
function actualizarContador() {
  contadorComentarios.textContent = `Comentarios: ${comentarios.length}`;
}