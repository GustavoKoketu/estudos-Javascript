function calcular(){
    let num = document.getElementById("osuset").value
    let ar = document.getElementById("AR")
    let cs = document.getElementById("CS")
    let od = document.getElementById("OD")
    let hp = document.getElementById("HP")
    
    cs.innerHTML = `CS: Raio do círculo: ${(54-4.48*num).toFixed(2)} pixels`
    od.innerHTML = `OD: Janela de tempo para 300: ${79.5-6*num}ms; 100: ${139.5-8*num}ms; 50: ${199.5-10*num}ms.`

    if (num<=5){
        ar.innerHTML = `AR: Tempo desde o círculo aparecer até ele sumir: ${1800-120*num} ms.`
    } else {
        ar.innerHTML = `AR: Tempo desde o círculo aparecer até ele sumir: ${1200-150*(num-5)} ms.`
    }

    if (num<3){
        hp.innerHTML = `HP: Muito fácil`
        hp.style.color = "blue"
    } else if (num<5){
        hp.innerHTML = `HP: Fácil`
        hp.style.color = "green"
    } else if (num<6){
        hp.innerHTML = `HP: Fácil-Médio`
        hp.style.color = "rgb(204, 204, 48)"
    } else if (num<7){
        hp.innerHTML = `HP: Médio`
        hp.style.color = "orange"
    } else if (num<9){
        hp.innerHTML = `HP: Difícil`
        hp.style.color = "red"
    }  else {
        hp.innerHTML = `HP: FC ou morte`
        hp.style.color = "purple"
    }    
}

function converter(){
    let ar = document.getElementById("arinp").value
    let cs = document.getElementById("csinp").value
    let od = document.getElementById("odinp").value
    let hp = document.getElementById("hpinp").value
    let bpm = document.getElementById("bpm").value
    let time = document.getElementById("dur").value
    if(ar=="" || cs=="" || od == "" || hp == "" || bpm == "" || time == ""){
        window.alert(`Digite algo em todos os campos!`)
    } else{
        ar = parseFloat(ar)
        cs = parseFloat(cs)
        od = parseFloat(od)
        hp = parseFloat(hp)
        bpm = parseFloat(bpm)
        time = parseFloat(time)
        teste = []
        teste.push(ar,cs,od,hp)
        let max = teste[0]
        let min = teste[0]
        for(let pos in teste){
            if(teste[pos] > max){
                max = teste[pos]}
            if(teste[pos] < min){
                min = teste[pos]}
        }
        if(min<0 || max>10 || bpm<0 || time<0){
            window.alert("Número inválido! (AR,CS,OD,HP devem ser entre 0 e 10, bpm e duração devem ser maiores que 0)")
        } else{
            let mod1 = document.getElementsByName("mod")
            let mod2 = document.getElementsByName("time")
            let res = document.getElementById("res")
            if (mod1[0].checked && mod2[0].checked){
                res.innerHTML = `Nenhuma mudança!`
            } else{
                // HR
                if (mod1[1].checked){
                    teste[0] *= 1.4
                    teste[1] *= 1.3
                    teste[2] *= 1.4
                    teste[3] *= 1.4
                    for (let pos in teste){
                        if(teste[pos] > 10){
                            teste[pos] = 10
                        }}
                }
                // EZ
                if (mod1[2].checked){
                    teste[0] *= 0.5
                    teste[1] *= 0.5
                    teste[2] *= 0.5
                    teste[3] *= 0.5
                }   
                // DT
                if (mod2[1].checked){
                    if(teste[0]>5){
                        teste[0]=((teste[0]*2+13)/3).toFixed(2)
                    } else{
                        teste[0]=(teste[0]*0.533+5).toFixed(2)
                    }
                    teste[2] = (teste[2]*0.666+4.42).toFixed(2)
                    teste[3] += 1
                    bpm *= 1.5
                    time /= 1.5
                }   
                // HT
                if (mod2[2].checked){
                    if(teste[0]<5){
                        teste[0]=(teste[0]*0.666-5).toFixed(2)
                    } else if (teste[0]<7){
                        teste[0]=((teste[0]-5)*1.666*+1.666).toFixed(2)
                    } else{
                        teste[0]=((teste[0]-7)*1.333+4.992).toFixed(2)
                    }
                    teste[2] = (teste[2]*1.333-4.42).toFixed(2)
                    teste[3] /= 2
                    bpm /= 1.5
                    time *= 1.5
                }   
                res.innerHTML = `O AR é ${teste[0]}, o CS é ${teste[1]}, o OD é ${teste[2]} e o HP é ${teste[3]}, o bpm é ${(bpm).toFixed(2)} e a duração é ${Math.floor(time/60)} minuto(s) e ${(time%60).toFixed(0)} segundo(s)`
            }
        }
    }
}