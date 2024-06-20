async function loadDataPregunta(div, pregunta) {
    div.querySelector("#pregunta").innerHTML = pregunta.pregunta
    div.querySelector("#respuesta").innerHTML = pregunta.respuesta
}

async function loadDataFAQ(preguntas, preguntasDiv) {
    let holders = preguntasDiv.children
    console.log(holders)

    preguntas.forEach(async (pregunta, index) => {
        
        await fetch("templates/MasInfo/Pregunta.htm")
            .then(response => response.text())
            .then(html => {
                var div = document.createElement('div')
                holders[index%2].appendChild(div)
                div.outerHTML = html
                div = holders[index%2].lastChild
                loadDataPregunta(div, pregunta)
            });
    })
}

function loadFAQ() {
    const preguntasDiv = document.getElementById("faq")
    
    fetch('/data/faq.json')
        .then((response) => response.json())
        .then((json) => loadDataFAQ(json, preguntasDiv))
}