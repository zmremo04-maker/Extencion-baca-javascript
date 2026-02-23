let frutas = ['platano', 'melon', 'sandia', 'mansana', 'pera', 'naranja', 'limon', 'pera', 'mansana', 'mansana', 'sandia', 'sandia', 'naranja' ]

let cantidades_frutas = {};

// ESTE ES UN INTENTO FALLIDO :)
/*
for(let i = 0; i < frutas.length; i++){
    
    console.log(frutas[i]);
    contador_fruta = i;
}
contador_fruta +=1;
console.log("La cantidad total de frutas es: ", contador_fruta)

*/


// PRACTICA CON EL SICLO FOR
/*
for(let i=0; i< frutas.length; i++){
    let nom_fruta = frutas[i];
    if(cantidades_frutas[nom_fruta] == undefined){
        cantidades_frutas[nom_fruta] = 1;
    } else {
        cantidades_frutas[nom_fruta] = cantidades_frutas[nom_fruta] + 1;
    }
}
*/

let i = 0;
while(i < frutas.length ){
    let nom_fruta = frutas[i];

    if(cantidades_frutas[nom_fruta] === undefined){
        cantidades_frutas[nom_fruta] = 1;
    } else {
        cantidades_frutas[nom_fruta] = cantidades_frutas[nom_fruta] + 1;
    }
    i++;
}


console.log("Las cantidad de cada tipo de fruta es: ", cantidades_frutas);