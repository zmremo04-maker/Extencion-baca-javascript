const auto = {
    marca : "Nisaan",
    modelo: "Sentra",
    color: "blanco",
    ano: 2026,

    info: function(){
        console.log(`auto: ${this.marca}, modelo: ${this.modelo}, color: ${this.color}, ano: ${this.ano}`)
    }
};

auto.info();


const laptop = {
    marca: "HP",
    modelo: "Victus",
    precio: 16500,
    fecha: "12 junio 2022",

    imprimir: function(){
        console.log(`La laptop es marca: ${this.marca}, El modelo es: ${this.modelo}, El precio de la laptop es: ${this.precio}, Y la feacha de compra es: ${this.fecha}`)
    }
};

laptop.imprimir()