export function caloriasAnteriores () {
    if (localStorage.getItem('prevCal')) {
        const container = document.getElementById("container2");
        const mensaje = document.createElement("p");
        const textoMensaje = document.createTextNode(`Conteo de calorías anterior: ${localStorage.getItem('prevCal') || '0'}`);
        mensaje.appendChild(textoMensaje);
        mensaje.setAttribute("id", "prevCals");
        container.appendChild(mensaje); 
    }
};