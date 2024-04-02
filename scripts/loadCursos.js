async function loadDataCurso(div, curso) {
    console.log(div)
    div.querySelector("#name").innerHTML = curso.nombre
}

async function loadData(cursos, cursosDiv) {
    console.log(cursosDiv)
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
        .then((json) => loadData(json, cursosDiv))
}