function exibirResultado(id, dados) {
    const text = JSON.stringify(dados)
    document.getElementById(id).innerHTML = text
}

// $ === jQuery

$.ajax({
    url: 'parOuImpar',
    data: {
        numero: 5 
    }, 
    success(data) {
        exibirResultado('get', data)
    }

})

$.ajax({
    url: 'formulario',
    method: 'post',
    data: {
        nome : 'João',
        sobrenome: 'Silva'
    },
    success(data) {
        exibirResultado('post',data)
    },
    error (e) {
        exibirResultado ('post', e)
    }
})