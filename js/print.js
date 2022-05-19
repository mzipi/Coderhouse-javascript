import { botonMas, botonMenos } from "./events.js";

export async function imprimir() {
    const res = await fetch("json/calorias.json");
    const data = await res.json();

    const container = document.getElementById('container');

    for (let i = 0; i < data.length; i++) {
        const rowItems = document.createElement("div");
        rowItems.setAttribute("class", "row");
        container.appendChild(rowItems);

        const colName = document.createElement("div");
        colName.setAttribute("class", "col-2");
        rowItems.appendChild(colName);

        const item = document.createElement("p");
        const textoItem = document.createTextNode(`${data[i].nombre}`);
        item.appendChild(textoItem);
        colName.appendChild(item);

        const colPlus = document.createElement("div");
        colPlus.setAttribute("class", "col-auto");
        rowItems.appendChild(colPlus);

        const mas = document.createElement("button");
        const textoMas = document.createTextNode("+");
        mas.appendChild(textoMas);
        mas.addEventListener("click", botonMas);
        mas.setAttribute("id", `boton${i+1}`);
        mas.setAttribute("type", "button");
        mas.setAttribute("class", "btn btn-primary btn-sm");
        colPlus.appendChild(mas);

        const colMinus = document.createElement("div");
        colMinus.setAttribute("class", "col-auto");
        rowItems.appendChild(colMinus);

        const menos = document.createElement("button");
        const textoMenos = document.createTextNode("-");
        menos.appendChild(textoMenos);
        menos.addEventListener("click", botonMenos);
        menos.setAttribute("id", `menos${i+1}`);
        menos.setAttribute("type", "button");
        menos.setAttribute("class", "btn btn-primary btn-sm");
        menos.setAttribute("disabled", "");
        colMinus.appendChild(menos);
    }
};