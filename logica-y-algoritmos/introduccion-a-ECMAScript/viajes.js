const destinos = JSON.parse(localStorage.getItem("viajes")) || [];

const guardarEnStorage = () => {
  localStorage.setItem("viajes", JSON.stringify(destinos));
};

const calcularCosto = (destino, transporte) => {
  let costoBase = 0;

  if (destino === "Paris") costoBase = 500;
  else if (destino === "Londres") costoBase = 400;
  else if (destino === "New York") costoBase = 600;
  else costoBase = 300;

  if (transporte === "Avión") costoBase += 200;
  else if (transporte === "Tren") costoBase += 100;

  return costoBase;
};

const registrarDestino = (destino, fecha, transporte) => {
  const nuevoViaje = {
    id: Date.now(),
    destino,
    fecha,
    transporte,
    costo: calcularCosto(destino, transporte)
  };

  destinos.push(nuevoViaje);
  guardarEnStorage();
};

const eliminarViaje = (id) => {
  const nuevosViajes = destinos.filter((viaje) => viaje.id !== id);

  destinos.length = 0;
  destinos.push(...nuevosViajes);

  guardarEnStorage();
};

const obtenerViajes = () => destinos;

export { registrarDestino, obtenerViajes, eliminarViaje };