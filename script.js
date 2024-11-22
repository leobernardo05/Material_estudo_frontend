//VARIÁVEIS
let num = document.getElementById ('num')
let sel = document.querySelector('select#seletor')
let res = document.getElementById ('res')
let valores = []

//VALOR DIGITADO
function Numero(n){
    
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//VALORES DA LISTA
function inLista(n, l){
    
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

//FUNÇÃO ADICIONAR
function Adicionar(){
    if(Numero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sel.appendChild(item)
        res.innerHTML
    }else{
        window.alert('valor invalido!')
    }
    num.value = ''
    num.focus()

}

//FUNÇÃO PARA FINALIZAR
function Finalizar(){
    
    if(valores.length == 0){
       window.alert ('Digite um número!') 
    } else {

        //numero de elementos 
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Essa lista tem <strong>${tot}</strong> números.</p>`

        //variaveis
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            //soma
            soma += valores[pos]

            //maior e menor
            if (maior < valores[pos]){
            maior = valores[pos]
            }

            if (menor > valores[pos]){
                menor = valores[pos]
            }
        }

        //media
        media = soma/tot

        //exibição dos elementos 
        res.innerHTML += `<p>O maior número dessa lista é <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor número dessa lista é <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma dos valores é <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média dos valores é <strong>${media}</strong></p>`
        
    }
}