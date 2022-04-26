let num = document.getElementById("txtn")
let lista = document.getElementById("seltab")
let res = document.querySelector('div#resp')
let array = []
let sum = 0

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function veriadd(){

    if(isNumero(num.value) && !inLista(num.value, array)){
                let n = Number(num.value)
                array.push(n)
                let item = document.createElement("option")
                item.text = `O número ${n} foi adicionado`
                lista.appendChild(item)
                res.innerHTML = ""
                num.value = ""
                num.focus()
    }else{
        window.alert("Valor inválido ou já encontrado na lista!")
    }
}


function analisar(){
    if(array.length == 0){
        window.alert("Adicione valores para analisar!")
    }else{
        for(var cont = 0; cont < array.length; cont++){
            sum += array[cont]
        }
        res.innerHTML = `
        <p>Ao todo, temos ${array.length}</p>
        <p>O maior valor informado foi ${Math.max(...array)}</p>
        <p>O menor valor informado foi ${Math.min(...array)}</p>
        <p>Somando todos os valores, temos ${sum} </p>
        <p>A média dos valores digitados é ${sum/array.length}</p>`
    }
}