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
      });
    camada.add(teste);
    };
imagemteste.src = 'imagens/paratestes.png';

/*
teste.on('dragstart', function() {
    camada.add(
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
});
*/

camada.add(side)
area.add(camada)
area.add(camada2)

area.draw()

