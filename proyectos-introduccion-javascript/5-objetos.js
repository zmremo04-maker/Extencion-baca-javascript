const libro = {

  titulo: "El evangelio",
  autor: "Juan",
  anio: 1990,
  estado: "disponible",
  capitulos: [],

  describirLibro() {
    console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor}, en el año ${this.anio}, el estado es: ${this.estado}.`);
  },

  agregarCapitulo(nombreCapitulo) {
    this.capitulos.push(nombreCapitulo);
    console.log(`El capítulo "${nombreCapitulo}" se agregó correctamente.`);
  },


};

libro.describirLibro();
libro.agregarCapitulo("Introducción");
libro.agregarCapitulo("Capítulo 1");

console.log(libro.capitulos);