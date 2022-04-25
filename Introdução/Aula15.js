let num =[4,5,8,7]
num.push(21,9,12,10,45)
num.sort()

console.log(`Nosso vetor é ${num}`)

console.log(`O tamanho do vetor é de ${num.length} valores`)

// for(let i = 0; i < num.length; i++){
//     console.log(`O valor da posição ${i} é ${num[i]}`)
// }
// Versão simplificada:
for(let i in num){
    console.log(num[i])
}

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)