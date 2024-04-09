async function loadDataPaquete(div, paquete) {
    div.querySelector("#name").innerHTML = paquete.nombre
    div.style.backgroundImage = "url(" + paquete.foto + ")"
}

async function loadDataPaq(paquetes, paquetesDiv) {
    for (let paquete of paquetes) {
        
        await fetch("templates/Cursos/Paquete.htm")
            .then(response => response.text())
            .then(html => {
                var div = document.createElement('div')
                paquetesDiv.appendChild(div)
                div.outerHTML = html
                div = paquetesDiv.lastChild
                loadDataPaquete(div, paquete)
            });
    }
}

function loadPaquetes() {
    const paquetesDiv = document.getElementById("paquetes-holder")
    
    fetch('/data/cursos/paquetes.json')
        .then((response) => response.json())
        .then((json) => loadDataPaq(json, paquetesDiv))
}