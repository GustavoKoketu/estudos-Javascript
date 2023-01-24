function carregar(){
    var text = document.querySelector('div#text')
    var jogo = document.getElementsByName('jogo')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (jogo[0].checked){
        text.innerHTML = 'Risk of rain 1 é um jogo 2D do estilo <em> Roguelike </em> de 2013, desenvolvido por uma equipe de 2 pessoas. <br> O jogo tem a mecânica única dificuldade do jogo aumentar conforme o tempo passa.<br> Mesmo sendo simples, o jogo obteve considerável sucesso, vendendo várias unidades e obtendo notas por volta de 8/10. <br>'
        img.setAttribute('src','ror1.png')
    } else if(jogo[1].checked){
        text.innerHTML = 'Risk of rain 2 é a sequência de RoR1, lançado em 2020 pela Hopoo Games. <br> Ele é basicamente uma adaptação 3D do primeiro jogo, com novas mecânicas e novos personagens jogáveis. <br> O jogo foi de grande sucesso, vendendo 1M de unidades em um mês e obtendo notas >8,5, mesmo sendo um jogo indie. Ele conta com atualizações de conteúdo até os dias de hoje. <br>'
        img.setAttribute('src','ror2.png')
    } else {
        text.innerHTML = 'Risk of rain returns é um remake do primeiro jogo sem data de lançamento definida ainda, pela Gearbox entertainment. <br> Ele contará com uma atulização visual, de código, além de conteúdo e mecãnicas novas. <br> Seu desenvolvimento foi anunciado em 20/12/22, deixando expectativas para fâs e jogadores da série. <br>'
        img.setAttribute('src','rorr.png')
    }
    text.appendChild(img)
}
