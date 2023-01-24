function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade<12){
                img.setAttribute('src','fotohomemcriança.png')
            } else if (idade>=12 && idade<21){
                img.setAttribute('src','fotohomemjovem.png')
            } else if (idade>=21 && idade<52){
                img.setAttribute('src','fotohomemadulto.png')            
            } else {
                img.setAttribute('src','fotohomemvelho.png')                  
            }
            res.innerHTML = `Você é um homem com ${idade} anos!`
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade<12){
                img.setAttribute('src','fotomulhercriança.png')
            } else if (idade>=12 && idade<21){
                img.setAttribute('src','fotomulherjovem.png')
            } else if (idade>=21 && idade<52){
                img.setAttribute('src','fotomulheradulta.png')
            } else {
                img.setAttribute('src','fotomulhervelha.png')
            }
            res.innerHTML = `Você é uma mulher com ${idade} anos!`
        }
        res.appendChild(img)
    }
}


