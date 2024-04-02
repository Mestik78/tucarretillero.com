var templates

const loadTemplateLevel = async function() {
    templates = document.getElementsByTagName("template");

    for (let template of templates) {
        await fetch("templates/" + template.id + '.htm')
            .then(response => response.text())
            .then(html => {
                template.outerHTML = html
            });
    }
}

const loadTemplates = async function() {
    do {
        await loadTemplateLevel()
    } while (templates.length > 0)

    loadCursos()
}

loadTemplates()