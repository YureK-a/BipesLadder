
//Janela do stage
var width = window.innerWidth
var height = window.innerHeight

//Área para o simulador acontecer
var area = new Konva.Stage ({
    container: 'konva',
    width: width,
    height: height,
})


//Camadas
var camada = new Konva.Layer()
var camada2 = new Konva.Layer()

//Barra lateral
var side = new Konva.Rect({
    x: -100,
    y: -150,
    width: 350,
    height: 8000,
    fill: 'white',
    stroke: '#212529',
    strokeWidth: 7,
  })

//Para testes
function escrever(mensagem) {
  text.text(mensagem)
}

var text = new Konva.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black',
});


//Imagem teste
var imagemteste = new Image();
imagemteste.onload = function () {
    var teste = new Konva.Image({
      x: 20,
      y: 20,
      image: imagemteste,
      width: 100,
      height: 100,
      draggable: true,
      stroke: 'black',
      strokeWidth: 7,
      })

    camada.add(teste)

    //Função para clonar durante o drag and drop
    teste.on('dragstart', function() {
      teste.stopDrag()
      var clone = teste.clone()
      clone.off('dragstart')
      camada.add(clone)
      clone.startDrag()
  })
}



imagemteste.src = 'imagens/paratestes.png';

camada.add(side)
camada2.add(text)

area.add(camada)
area.add(camada2)

area.draw()
