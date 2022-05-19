import { caloriasTotales } from "./TotalCal.js";

let calorias = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let contador4 = 0;

export async function botonMas () {
    const res = await fetch("./json/calorias.json");
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
                    background: "#00aa00",
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
                    background: "#00aa00",
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
                    background: "#00aa00",
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

export async function botonMenos () {
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
                    background: "#aa0000",
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
                    background: "#aa0000",
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
                    background: "#aa0000",
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
export { calorias };