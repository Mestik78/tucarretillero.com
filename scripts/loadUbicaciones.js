async function loadDataUbicacion(div, ubicacion) {
    div.querySelector("#name").innerHTML = ubicacion.nombre
    div.style.backgroundImage = "url(" + ubicacion.foto + ")"
    div.onclick = function(){clickUbicacion(ubicacion)}
}

async function loadDataUbi(ubicaciones, ubicacionesDiv) {
    for (let ubicacion of ubicaciones) {
        await fetch("templates/Ubicaciones/Ubicacion.htm")
            .then(response => response.text())
            .then(html => {
                var div = document.createElement('div')
                ubicacionesDiv.appendChild(div)
                div.outerHTML = html
                div = ubicacionesDiv.lastChild
                loadDataUbicacion(div, ubicacion)
            });
    }
}

function loadUbicaciones() {
    const ubicacionesDiv = document.getElementById("ubi-cards")
    
    fetch('/data/ubicaciones.json')
        .then((response) => response.json())
        .then((json) => loadDataUbi(json, ubicacionesDiv))
}