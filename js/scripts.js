let calorias = contador1 = contador2 = contador3 = contador4 = 0;
/*
class Comida {
    constructor(nombre, calorias) {
        this.nombre = nombre;
        this.calorias = calorias;
    }
    mensaje(){
        console.log(`${this.nombre} tiene ${this.calorias} calorías`);
    }
};

arreglo[0] = new Comida("Alfajor", 50);
arreglo[1] = new Comida("Ensalada", 10);
arreglo[2] = new Comida("Pan", 30);
arreglo[3] = new Comida("Carne", 25);
*/
imprimir();
caloriasAnteriores();

//vvvvvvvvvvvvvvvvvvvvvvvv FUNIONES vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

async function imprimir(eleccion) {
    const res = await fetch("json/calorias.json");
    const data = await res.json();

    const div = document.getElementById('main');
    const titulo = document.createElement("h1");
    const textoH1 = document.createTextNode("CONTADOR DE CALORÍAS");
    titulo.appendChild(textoH1);
    div.appendChild(titulo);

    for (i = 0; i < data.length; i++) {
        const item = document.createElement("p");
        const textoItem = document.createTextNode(`${data[i].nombre}`);
        item.appendChild(textoItem);
        main.appendChild(item);

        const mas = document.createElement("button");
        const textoMas = document.createTextNode("+");
        mas.appendChild(textoMas);
        mas.addEventListener("click", botonMas);
        mas.setAttribute("id", `boton${i+1}`);
        main.appendChild(mas);

        const menos = document.createElement("button");
        const textoMenos = document.createTextNode("-");
        menos.appendChild(textoMenos);
        menos.addEventListener("click", botonMenos);
        menos.setAttribute("id", `menos${i+1}`);
        menos.setAttribute("disabled", "");
        main.appendChild(menos);
    }
};

async function botonMas () {
    const res = await fetch("json/calorias.json");
    const data = await res.json();
    switch (this.id) {
        case "boton1":
            calorias += data[0].calorias;
            document.getElementById("menos1").removeAttribute("disabled");
            document.getElementById("menos1").setAttribute("enabled", "");
            contador1++;
            Toastify({
                text: "Agregaste alfajor al contador",
                style: {
                    background: "#804000",
                },
                gravity: "bottom"
            }).showToast();
            break;
        case "boton2":
            calorias += data[1].calorias;
            document.getElementById("menos2").removeAttribute("disabled");
            document.getElementById("menos2").setAttribute("enabled", "");
            contador2++;
            Toastify({
                text: "Agregaste ensalada al contador",
                style: {
                    background: "#00aa00",
                },
                gravity: "bottom"
            }).showToast();
            break;
        case "boton3":
            calorias += data[2].calorias;
            document.getElementById("menos3").removeAttribute("disabled");
            document.getElementById("menos3").setAttribute("enabled", "");
            contador3++;
            Toastify({
                text: "Agregaste pan al contador",
                style: {
                    background: "#cccc00",
                },
                gravity: "bottom"
            }).showToast();
            break;
        case "boton4":
            calorias += data[3].calorias;
            document.getElementById("menos4").removeAttribute("disabled");
            document.getElementById("menos4").setAttribute("enabled", "");
            contador4++;
            Toastify({
                text: "Agregaste carne al contador",
                style: {
                    background: "#aa0000",
                },
                gravity: "bottom"
            }).showToast();
            break;
        default:
            break;
    };
    caloriasTotales();
    localStorage.setItem('prevCal', calorias); 
};

async function botonMenos () {
    const res = await fetch("json/calorias.json");
    const data = await res.json();
    switch (this.id) {
        case "menos1":
            contador1--;
            if (contador1 == 0) {
                document.getElementById("menos1").setAttribute("disabled", "");
                document.getElementById("menos4").removeAttribute("enabled");
            }
            calorias -= data[0].calorias;
            Toastify({
                text: "Eliminaste un alfajor del contador",
                style: {
                    background: "#804000",
                },
                gravity: "bottom"
            }).showToast();
            break;
        case "menos2":
            contador2--;
            if (contador2 == 0) {
                document.getElementById("menos2").setAttribute("disabled", "");
                document.getElementById("menos4").removeAttribute("enabled");
            }
            calorias -= data[1].calorias;
            Toastify({
                text: "Eliminaste una porción de ensalada del contador",
                style: {
                    background: "#00aa00",
                },
                gravity: "bottom"
            }).showToast();
            break;
        case "menos3":
            contador3--;
            if (contador3 == 0) {
                document.getElementById("menos3").setAttribute("disabled", "");
                document.getElementById("menos4").removeAttribute("enabled");
            }
            calorias -= data[2].calorias;
            Toastify({
                text: "Eliminaste una porción de pan del contador",
                style: {
                    background: "#cccc00",
                },
                gravity: "bottom"
            }).showToast();
            break;
        case "menos4":
            contador4--;
            if (contador4 == 0) {
                document.getElementById("menos4").setAttribute("disabled", "");
                document.getElementById("menos4").removeAttribute("enabled");
            }
            calorias -= data[3].calorias;
            Toastify({
                text: "Eliminaste un porción de carne del contador",
                style: {
                    background: "#aa0000",
                },
                gravity: "bottom"
            }).showToast();
            break;
        default:
            break;
    };
    caloriasTotales();
    localStorage.setItem('prevCal', calorias);
};

function caloriasAnteriores () {
    const mensaje = document.createElement("p");
    const textoMensaje = document.createTextNode(`Conteo de calorías anterior: ${localStorage.getItem('prevCal') || '0'}`);
    mensaje.appendChild(textoMensaje);
    document.getElementById("main").appendChild(mensaje);
};

function caloriasTotales () {
    if (document.getElementById("msj")) {
        document.getElementById("msj").remove();   
    }
    const mensaje = document.createElement("p");
    const textoMensaje = document.createTextNode(`Total de calorías actuales: ${calorias}`);
    mensaje.appendChild(textoMensaje);
    mensaje.setAttribute("id", "msj");
    document.getElementById("main").appendChild(mensaje);
};