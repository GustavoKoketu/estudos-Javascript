let vetor = []

function adicionar(){
    let num = document.getElementById('num')
    num = Number(num.value)
    if (num == '' || vetor.indexOf(num) != -1 || num < 1 || num > 100){
        window.alert('Número inválido/já na lista!')
    } else {
        let notif = document.getElementById('notif')
        let linha = document.createElement('Option')
        linha.text = `Valor ${num} adicionado.`
        notif.appendChild(linha)
        vetor.push(num)
    }
}

function calcular(){
    let tamanho = vetor.length
    if (tamanho == 0){
        window.alert('Por favor, adicione números antes de finalizar!')
    } else {
        let max = min = vetor[0]
        let soma = 0
        for (let i in vetor){
            if (vetor[i] > max){
                max = vetor[i]
            }
            if (vetor[i] < min){
                min = vetor[i]
            }
            soma += vetor[i]
        }
        let res = document.getElementById('res')
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tamanho} números cadastrados </p>`
        res.innerHTML += `<p> O maior valor informado foi ${max} </p>`
        res.innerHTML += `<p> O menor valor informado foi ${min} </p>`
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} </p>`
        res.innerHTML += `<p> A média dos valors digitados é ${soma/tamanho}`
    }

}