var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito1 = "red";
  var colorcito2 = "blue";
  var colorcito3 = "orange";
  var colorcito4 = "green";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    xi = 0
    yf = 300
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito1, xi, yi, xf, yf);
    console.log("Linea Roja " + l);
    console.log("xi,yi " + xi + "," + yi);
    console.log("xf,yf " + xf + "," + yf);
    console.log("--");

  }

  for(l = 0; l < lineas; l++)
  {
    xi = 300
    yf = 300
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito2, xi, yi, xf, yf);
    console.log("Linea Azul " + l);
    console.log("xi,yi " + xi + "," + yi);
    console.log("xf,yf " + xf + "," + yf);
    console.log("--");

  }

}
