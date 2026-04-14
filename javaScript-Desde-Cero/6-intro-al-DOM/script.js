let comentarioInput = document.getElementById("comentarioInput");
let btnAgregar = document.getElementById("btnAgregar");
let listaComentarios = document.getElementById("listaComentarios");

btnAgregar.addEventListener("click", function (){
    const textoComentario = comentarioInput.value;

    if (textoComentario.trim() === ""){
        return;
    }

    let comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    let texto = document.createElement("p");
    texto.textContent = textoComentario;

    let fecha = document.createElement("small");
    fecha.textContent = new Date().toLocaleString();

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", function (){
        comentarioDiv.remove();
    })

    comentarioDiv.appendChild(texto);
    comentarioDiv.appendChild(fecha);
    comentarioDiv.appendChild(btnEliminar);

    listaComentarios.appendChild(comentarioDiv);

    comentarioInput.value = "";

})