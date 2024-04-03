async function loadDataCurso(div, curso) {
    div.querySelector("#name").innerHTML = curso.nombre
}

async function loadDataCur(cursos, cursosDiv) {
    for (let curso of cursos) {
        
        await fetch("/templates/Cursos/Curso.htm")
            .then(response => response.text())
            .then(html => {
                var div = document.createElement('div')
                cursosDiv.appendChild(div)
                div.outerHTML = html
                div = cursosDiv.lastChild
                loadDataCurso(div, curso)
            });
    }
}

function loadCursos() {
    const cursosDiv = document.getElementById("cursos")
    
    fetch('/data/cursos/cursos.json')
        .then((response) => response.json())
        .then((json) => loadDataCur(json, cursosDiv))
}