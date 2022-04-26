let amigo = {
    nome: 'José',
    sexo: 'Masculino',
    idade: 20,
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
}
}

amigo.engordar(2)
console.log(`${amigo.nome} engordou e está com ${amigo.peso}kg`);