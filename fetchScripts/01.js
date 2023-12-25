fetch(url)
    .then(resp => resp.json())
    .then(estados => {
        const itens = estados.reduce(
            (html, estados) => {html + `<li>${estados.nome}</li>`, ''})

            document. body . insertAdjacentHTML ("beforeend", `<ul>${itens}</ul>`)
    })