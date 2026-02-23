let colores = ['Amarillo', 'rojo', 'naranja', 'verde'];

//console.log(colores[1]);

colores[2] = 'morado'
//console.log(colores[2])

colores.push('cafe');
//console.log(colores[4]);

colores.shift();

for(let i=0;i<=colores.length;i++){
    console.log(colores[i]);
}