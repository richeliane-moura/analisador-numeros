let num =document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // Vetor que armazenará os valores inseridos

function adicionar(){
    // Verifica se o valor é um número entre 1 e 100 e se ainda não está na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // Converte para número e adiciona ao array

        let item = document.createElement('option') // Cria um novo elemento <option>
        item.text = `Valor ${num.value} adicionado.` // Define o texto exibido no <select>
        lista.appendChild(item) // Adiciona o <option> à lista

        res.innerHTML = '' // Limpa a área de resultados caso tenha algum conteúdo antigo
    } else {
        window.alert('Valor inválido ou já encontrado na lista.') // Alerta se o valor for inválido ou repetido
    }

    num.value = '' // Limpa o campo de entrada
    num.focus() // Devolve o foco ao input para digitar o próximo número
}



function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}


function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function finalizar(){
    if(valores.length == 0){ // Se nenhum valor foi adicionado
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length // Quantidade de números adicionados
        let maior = valores[0] // Assume o primeiro como o maior (para comparação)
        let menor = valores[0] // Assume o primeiro como o menor
        let soma = 0 // Variável para acumular a soma dos valores
        let media = 0 // Variável para calcular a média

        // Percorre todos os valores do array
        for(let pos in valores){
            soma += valores[pos] // Soma todos os valores

            if(valores[pos] > maior)
                maior = valores[pos] // Atualiza o maior valor encontrado

            if(valores[pos] < menor)
                menor = valores[pos] // Atualiza o menor valor encontrado
        }

        media = soma / total // Calcula a média dos valores

        // Exibe os resultados na área <div id="res">
        res.innerHTML = '' // Limpa o conteúdo anterior
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
}
