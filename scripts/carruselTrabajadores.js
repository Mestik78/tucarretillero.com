var carrusel

var trabajadorSeleccionado
var indexSeleccionado = 0
var numTrabajadores
var carruselOffset
var trabajadores
var bolas

var haInteractuado = false

function updatePosicionCarrusel() {
    offset = "translateX(calc((" + carruselOffset + ") * " + indexSeleccionado + "))"
    console.log(offset)
    carrusel.style.transform = offset
}

function updateClasesCarrusel() {
    for (let i = 0; i < trabajadores.length; i++) {
        const trabajador = trabajadores[i];
        const bola = bolas[i]
        trabajador.classList.remove("seleccionado")
        bola.classList.remove("seleccionado")
        if (i == indexSeleccionado) {
            trabajador.classList.add("seleccionado")
            bola.classList.add("seleccionado")
        }
    }
}

function seleccionarTrabajador(i, notUser) {
    if (!notUser) haInteractuado = true
    indexSeleccionado = i

    while (indexSeleccionado < 0) indexSeleccionado += numTrabajadores
    while (indexSeleccionado >= numTrabajadores) indexSeleccionado -= numTrabajadores

    updatePosicionCarrusel()
    updateClasesCarrusel()
}

function moverTrabajador(offset) {
    seleccionarTrabajador(indexSeleccionado + offset)
}


function startCarruselTrabajadores() {
    carrusel = document.getElementById("trabajadores")

    trabajadores = carrusel.querySelectorAll("#trabajadores > div")
    numTrabajadores = trabajadores.length
    trabajadorSeleccionado = trabajadores[indexSeleccionado];

    progreso = document.getElementById("progreso")
    console.log(progreso)
    bolas = progreso.querySelectorAll("#progreso > div")
    console.log(bolas)

    margin = window.getComputedStyle(trabajadorSeleccionado).marginRight
    carruselOffset = "-" + trabajadorSeleccionado.offsetWidth + "px - " + margin + " - " + margin
    
    updatePosicionCarrusel()
    updateClasesCarrusel()
    autoWaitForMoveCarrusel()
}

function autoWaitForMoveCarrusel() {
    setTimeout(autoMoveCarrusel, 5000)
}

function autoMoveCarrusel() {
    if (!haInteractuado) {
        seleccionarTrabajador(indexSeleccionado + 1, true)
        autoWaitForMoveCarrusel()
    }
}