// Practicas
/*
function celcius_farenger(celcius){
    return ((9/5) * celcius + 32)
}
console.log(celcius_farenger(0))

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(fahrenheitACelsius(0))

*/


//Proyecto final

let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {

    if (librosLeidos.length === 0) {
        console.log("No has leído ningún libro.");
    } else {
        console.log("Libros leídos:");

        for (let i = 0; i < librosLeidos.length; i++) {
            console.log(librosLeidos[i]);
        }
    }

}

agregarLibro("Guerra final");
agregarLibro("Asta el ultimo Hombre");
agregarLibro("Corazon de Guerrero");



mostrarLibrosLeidos();