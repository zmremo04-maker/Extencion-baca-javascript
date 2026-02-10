let edades = 21;
const nombre = "Elpro";

//console.log(edades);
//console.log(nombre);


/*let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let divicion = numero1 / numero2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(divicion);*/



let contador = 0;

contador += 5
contador -= 2;

//console.log(contador)


let edadUsuario = 18;
let edadMinima = "18";

//console.log(edadUsuario == edadMinima);
//console.log(edadUsuario === edadMinima)

/*
let temperatura = 30;
if (temperatura >25){
    console.log("Hay mucha calor")
}*/


//Ejercicio 6 if/else
/*let numero = 10;
if (numero >= 10){
    console.log("El numero es muy grande")
} else {
    console.log("El numero es pequeño")
}*/



//Ejercicio 7 else if
/*let calificacion = 5;

if (calificacion >= 9){
    console.log("Tienes una calificacion excelente");
} else if (calificacion >= 6 && calificacion <= 8){
    console.log("Tu calificacion ")
} else {
    console.log("Tienes calificacion reprobatoria");
} */



// Ejercicio 8. Operadores logicos
/*let edad = 11
let tieneINE = true;
if (edad >= 18 && tieneINE === true ){
    console.log("Tienes la edad calificada para votar")
} else {
    console.log("Aun no tienes las edad para votar")
}*/



// Ejercicio 9 - operadores logicos OR
/*let esEstudiante = false
let tieneBeca = true
if (esEstudiante === true || tieneBeca === true){
    console.log("Tienes un descuento")
} else {
    console.log("No tienes descuentos")
} */


// Ejercicio 10
let edad = 16;
let tienePermiso = true;
let estaAcompanado = false;

if (edad >= 18 || tienePermiso === true && estaAcompanado === true){
    console.log("Usted puede entrar")
}else {
    console.log("No tiene acceso a esta red")
}