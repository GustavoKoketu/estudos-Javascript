function contagem(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    var res = document.querySelector('div#res')
    if (ini.value=='' || fim.value=='' || pas.value==''){
        res.innerHTML = 'Por favor, preencha os campos!'
    } else if (pas.value==0 || (ini.value > fim.value && pas.value >=0) || (ini.value < fim.value && pas.value <= 0)){
        res.innerHTML = 'Impossível Calcular!'
    } else {
        res.innerHTML = ''
        ini = Number(ini.value)
        fim = Number(fim.value)
        pas = Number(pas.value)
        if (ini<fim){
            for(ini;ini<=fim;ini+=pas){
                res.innerHTML += `${ini} \u{1F449}`
            }
        } else{
            for(ini;ini>=fim;ini+=pas){
                res.innerHTML += `${ini} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}