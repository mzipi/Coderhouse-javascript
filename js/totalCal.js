import { calorias } from "./events.js"

export function caloriasTotales () {
    const container = document.getElementById("container2");
    if (document.getElementById("msj")) {
        document.getElementById("msj").remove();   
    }
    const mensaje = document.createElement("p");
    const textoMensaje = document.createTextNode(`Total de calorías actuales: ${calorias}`);
    mensaje.appendChild(textoMensaje);
    mensaje.setAttribute("id", "msj");
    container.appendChild(mensaje);
};
