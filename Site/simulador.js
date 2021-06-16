var width = window.innerWidth
var height = window.innerHeight

//Área para o simulador acontecer
var area = new Konva.Stage ({
    container: 'aaa',
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
    stroke: 'brown',
    strokeWidth: 7,
  });

//Para testes
function escrever(mensagem) {
  text.text(mensagem);
}

function writeMessage(message) {
  text.text(message);
}

var text = new Konva.Text({
  x: 10,
  y: 10,
  fontFamily: 'Calibri',
  fontSize: 24,
  text: '',
  fill: 'black',
});

/*
  for (var i = 0; i < 7; i++) {
    camada2.add(
      new Konva.Rect({
        x: 20,
        y: 20 + (110 * i),
        width: 100,
        height: 100,
        fill: 'blue',
        draggable: true,
        name: 'object',
      })
    );
  }

  for (var i = 0; i < 7; i++) {
    camada2.add(
      new Konva.Rect({
        x: 130,
        y: 20 + (110 * i),
        width: 100,
        height: 100,
        fill: 'blue',
        draggable: true,
        name: 'object',
      })
    );
  }
*/

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
      id:'idteste',
      });
    camada.add(teste);
    };
imagemteste.src = 'imagens/paratestes.png';

/*
teste.on('dragstart', function() {
    /*camada.add(
      new Konva.Rect({
        x: 130,
        y: 20 + (110),
        width: 100,
        height: 100,
        fill: 'blue',
        draggable: true,
        name: 'object',
      })
    ); 
    escrever('julia boboca')
});


imagemteste.on('dragstart', function() {
  writeMessage('dragstart');
});
*/

document.getElementById('idteste').addEventListener('click',
  function () {
    writeMessage('dragstart');
    })

camada.add(side)
camada2.add(text);

area.add(camada)
area.add(camada2)

area.draw()

