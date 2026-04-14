import {
  registrarDestino,
  obtenerViajes,
  eliminarViaje
} from "./viajes.js";

const destinoInput = document.getElementById("destino");
const fechaInput = document.getElementById("fecha");
const transporteSelect = document.getElementById("transporte");
const btnAgregar = document.getElementById("btnAgregar");
const listaViajes = document.getElementById("listaViajes");

const mostrarViajesEnPantalla = () => {
  listaViajes.innerHTML = "";

  const viajes = obtenerViajes();

  viajes.forEach((viaje) => {
    listaViajes.innerHTML += `
      <div class="viaje">
        <p><strong>Destino:</strong> ${viaje.destino}</p>
        <p><strong>Fecha:</strong> ${viaje.fecha}</p>
        <p><strong>Transporte:</strong> ${viaje.transporte}</p>
        <p><strong>Costo:</strong> $${viaje.costo}</p>
        <button class="btnEliminar" data-id="${viaje.id}">
          Eliminar
        </button>
      </div>
    `;
  });

  const botonesEliminar = document.querySelectorAll(".btnEliminar");

  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
      const id = Number(boton.dataset.id);

      eliminarViaje(id);
      mostrarViajesEnPantalla();
    });
  });
};

btnAgregar.addEventListener("click", () => {
  const destino = destinoInput.value;
  const fecha = fechaInput.value;
  const transporte = transporteSelect.value;

  registrarDestino(destino, fecha, transporte);
  mostrarViajesEnPantalla();

  destinoInput.value = "";
  fechaInput.value = "";
});

mostrarViajesEnPantalla();