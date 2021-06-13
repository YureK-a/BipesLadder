var width = window.innerWidth
var height = window.innerHeight

var area = new Konva.Stage ({
    container: 'aaa',
    width: width,
    height: height,
})

var camadoca = new Konva.Layer()
var camada = new Konva.Layer()

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
  var quadrado = new Konva.Rect({
    x: 20,
    y: 20,
    width: 100,
    height: 100,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
  });
//x 130
  var quadrado2 = new Konva.Rect({
    x: 20,
    y: 130,
    width: 100,
    height: 100,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
  });
  var quadrado3 = new Konva.Rect({
    x: 20,
    y: 240,
    width: 100,
    height: 100,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true,
  });

*/

  for (var i = 0; i < 7; i++) {
    camadoca.add(
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
    camadoca.add(
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
/*
  var imageObj = new Image();
  imageObj.onload = function () {
    var yoda = new Konva.Image({
      x: 500,
      y: 50,
      image: imageObj,
      width: 106,
      height: 118,
    });

  camada.add(yoda);
      };
      imageObj.src = 'teste.jfif';
*/
camada.add(side)
/*
camada.add(quadrado)
camada.add(quadrado2)
camada.add(quadrado3)
*/

area.add(camada)
area.add(camadoca)

area.draw()

