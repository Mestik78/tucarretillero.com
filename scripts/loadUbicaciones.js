async function loadDataUbicacion(div, ubicacion) {
    div.querySelector("#name").innerHTML = ubicacion.nombre
}

async function loadDataUbi(ubicaciones, ubicacionesDiv) {
    console.log("Polla")
    for (let ubicacion of ubicaciones) {
        await fetch("/templates/Ubicaciones/Ubicacion.htm")
            .then(response => response.text())
            .then(html => {
                var div = document.createElement('div')
                ubicacionesDiv.appendChild(div)
                console.log(html)
                div.outerHTML = html
                div = ubicacionesDiv.lastChild
                loadDataUbicacion(div, ubicacion)
            });
    }
}

function loadUbicaciones() {
    console.log("pollica")
    const ubicacionesDiv = document.getElementById("ubi-cards")
    
    fetch('/data/ubicaciones.json')
        .then((response) => response.json())
        .then((json) => loadDataUbi(json, ubicacionesDiv))
}