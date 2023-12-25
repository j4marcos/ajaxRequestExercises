
const url = 'dados/estados.json'
fetch(url)
    .then(resp => resp.json())
    .then(estados => {
        const itens = estados.reduce(criarHTML, '')
           
            document.body.insertAdjacentHTML("beforeend", `<ul>${itens}</ul>`)
    })


    function criarHTML (html , estado) {
        return html + `<li>${estado.nome}</li>`
    }