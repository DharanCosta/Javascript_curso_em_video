var agora = new Date()
var hora = agora.getHours()//pega a hora
var minuto = agora.getMinutes()//pega o minuto

console.log(`Agora são ${hora} horas`)	

if(hora < 12){
    console.log("Bom dia!")
}else if(hora <= 18){
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}