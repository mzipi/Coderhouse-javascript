let salir = false;
let eleccion = " ";
let calorias = 0;
const arreglo = [4];

const div = document.getElementById('main');

//------------> Titulo <------------------
const titulo = document.createElement("h1");
const textoH1 = document.createTextNode("CONTADOR DE CALORÍAS");
titulo.appendChild(textoH1);
div.appendChild(titulo);

//------------> Clase Comida <----------------
class Comida {
    constructor(nombre, calorias) {
        this.nombre = nombre;
        this.calorias = calorias;
    }
    mensaje(){
        const metodo = document.createElement("p");
        const msjMetodo = document.createTextNode(`Seleccionaste ${this.nombre}`);
        metodo.appendChild(msjMetodo);
        div.appendChild(metodo);
    }
}

//------------> Objetos <----------------
arreglo[0] = new Comida("Alfajor", 50);
arreglo[1] = new Comida("Ensalada", 10);
arreglo[2] = new Comida("Pan", 30);
arreglo[3] = new Comida("Carne", 25);

//------------> Función imprimir texto <-----------------
function imprimir(eleccion) {
    const lista = document.createElement("ol");

    for (var i = 0; i < arreglo.length; i++) {
        const item = document.createElement("li");
        item.setAttribute("id", `item${i}`);
        const textoItem = document.createTextNode(`${arreglo[i].nombre}`);
        item.appendChild(textoItem);
        lista.appendChild(item);
    }
    div.appendChild(lista);
}

function seleccion (eleccion) {
    document.getElementById(eleccion).style.background = "skyblue";
}

imprimir();
eleccion = prompt("Elija una opción");

switch (eleccion) {
    case "1":
        seleccion("item0");
        calorias += arreglo[0].calorias;
        arreglo[0].mensaje();
        break;
    case "2":
        seleccion("item1");
        calorias += arreglo[1].calorias;
        arreglo[1].mensaje();
        break;
    case "3":
        seleccion("item2");
        calorias += arreglo[2].calorias;
        arreglo[2].mensaje();
        break;
    case "4":
        seleccion("item3");
        calorias += arreglo[3].calorias;
        arreglo[3].mensaje();
        break;
    default:
        break;
};

if (calorias) {
    const mensaje = document.createElement("i");
    const textoMensaje = document.createTextNode(`Calorías totales: ${calorias}`);
    mensaje.appendChild(textoMensaje);
    div.appendChild(mensaje);
}
else {
    const mensaje = document.createElement("i");
    const textoMensaje = document.createTextNode(`No seleccionaste una opción`);
    mensaje.appendChild(textoMensaje);
    div.appendChild(mensaje);
}
