const botonSwitch = document.getElementById("dianoche");
const body = document.body;

// Función para alternar el modo día/noche
botonSwitch.addEventListener("click", () => {
    if (body.classList.contains("luna")) {
        body.classList.remove("luna");
        botonSwitch.classList.remove("cambiado");
    } else {
        body.classList.add("luna");
        botonSwitch.classList.add("cambiado");
    }
});
