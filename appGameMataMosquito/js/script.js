var altura
var largura
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.href.search

//nivel = nivel.replace('?', '')
if(nivel === '?normal'){
  criaMosquitoTempo = 1500
}else if(nivel ==='?dificil'){
  criaMosquitoTempo = 1000
}else if(nivel ==='?chucknorris'){
  criaMosquitoTempo = 500
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
  console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
  tempo-=1
  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(cria_mosca)
    window.location.href = 'vitoria.html'
  }else{
    document.getElementById('cronometro').innerHTML = tempo
  }
}, 1000)


function posicaoRandomica(){

    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
      document.getElementById('mosquito').remove()

      if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
      }else{
        document.getElementById('v'+vidas).src = 'imagens/coracao_vazio.png'
        vidas++
      }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html que representa o mosquito
    var mosquito = document.createElement('img')
    //criar o atributo src pro elemento img criado
    mosquito.src = 'imagens/mosca.png'
    //define a classe mosquito1 para o elemento img criado
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    //anexa o elemento mosquito como filho do body
    document.body.appendChild(mosquito)
    //define a posicao do mosquito
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    //atribui o id mosquito ao elemento img criado acima
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
      this.remove()
    }
}

function tamanhoAleatorio(){
  var classe = Math.floor(Math.random() * 3)
  switch(classe){
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

function ladoAleatorio(){
  var lado = Math.floor(Math.random()*2)

  switch(lado){
    case 0:
      return 'ladoA'
    case 1:
      return'ladoB'
  }
}
