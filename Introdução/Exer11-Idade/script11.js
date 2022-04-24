function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano').value
    var res = document.querySelector('div#res')

    if (nasc.length == 0 || Number(nasc.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - nasc
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

       if(fsex[0].checked){
           genero = 'Masculino'
              if(idade >= 0 && idade < 3){
                  // Baby
                  img.setAttribute('src', 'BabyM.jpg')
              }else if(idade >3 && idade < 12){
                  // Criança
                  img.setAttribute('src', 'CriançaM.jpg')
              }else if(idade > 12 && idade < 21){
                  // Jovem
                  img.setAttribute('src', 'JovemM.jpg')
              }else if(idade>21 && idade < 60){
                  // Adulto
                  img.setAttribute('src', 'AdultoM.jpg')
              }else{
                    // Idoso
                    img.setAttribute('src', 'IdosoM.jpg')
                }

       }else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 3){
                // Baby
                img.setAttribute('src', 'BabyF.jpg')
            }else if(idade >3 && idade < 12){
                // Criança
                img.setAttribute('src', 'CriançaF.jpg')
            }else if(idade > 12 && idade < 21){
                // Jovem
                img.setAttribute('src', 'JovemF.jpg')
            }else if(idade>21 && idade < 60){
                // Adulto
                img.setAttribute('src', 'AdultoF.jpg')
            }else{
                  // Idoso
                  img.setAttribute('src', 'IdosoF.jpg')
              }
       }

       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos um gênero ${genero} com ${idade} anos.`+`<br></br>`
       
       res.appendChild(img)
    }
}