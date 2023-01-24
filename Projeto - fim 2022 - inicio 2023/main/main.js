function expandir(){
    let div = document.getElementById('drpdwn')
    let arw = document.getElementById('drpdwnarw')
    div.style.height = "500px"
    div.setAttribute('onclick','fechar()')
    arw.setAttribute('src','../midia/flechacima.png')
}

function fechar(){
    let div = document.getElementById('drpdwn')
    let arw = document.getElementById('drpdwnarw')
    div.style.height = "20px"
    div.setAttribute('onclick','expandir()')
    arw.setAttribute('src','../midia/flechabaixo.png')
}