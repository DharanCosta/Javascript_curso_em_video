//Par ou Impar
function parimpar(n){
    if(n % 2 == 0){
        return "Par";
    }else{
        return "Impar";
    }
}
//Soma
function soma(n1=0, n2=0){
    return n1+n2
}
//Multiplicação 2x
let v = function(x){
    return x * 2
}
//Fatorial
function fatorial(n){
    let f = 1
    for(let c = n; c > 1; c--){
        f *= c
    }
    return f
}
//Recursividade e Ternário
function fatorial2(n){
    return (n != 1) ? n * fatorial2(n-1) : 1
}
console.log(fatorial2(5))


let mult = v(2)
let sum = soma(3, mult)
console.log(sum)
let fat = fatorial(sum)
console.log(`O fatorial de ${sum} é ${fat} e o número é ${parimpar(sum)}`)





