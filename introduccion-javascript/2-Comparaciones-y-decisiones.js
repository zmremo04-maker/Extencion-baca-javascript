let nota = 89;

if (nota >= 0) {
    if (nota >= 90) {
        console.log("Nota: ", nota, "Excelente");
    } else if (nota >= 75 && nota <= 89) {
        console.log("Nota: ", nota, "Bien");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Nota: ", nota, "Suficiente");
    } else {
        console.log("Nota: ", nota, "No aprueba");
    }
} else {
    console.log("Nota inválida");
}
