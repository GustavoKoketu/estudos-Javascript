function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value == ''){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c=1;c<=10;c++){
            let item = document.createElement('Option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
