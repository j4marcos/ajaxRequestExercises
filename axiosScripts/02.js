function exibirResultado(id, dados) {
    const text = JSON.stringify(dados)
    document.getElementById(id).innerHTML = text
}

const input = document.querySelector('#numero')
input.onchange = e => {
    const numero = input.value
// axios.get("parOuImpar", {
//     params: {
//         numero
//     }
// }).then(resp => exibirResultado('get', resp.data))

//o padrao é get 
axios(`parOuImpar?numero=${numero}`).then(resp => exibirResultado('get', resp.data))

}

axios.post('formulario', {
    nome : 'joao' ,
    sobrenome : "silva"
}).then(resp => exibirResultado('post', resp.data))