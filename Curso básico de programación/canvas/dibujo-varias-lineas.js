var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo)

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath(); 
    lienzo.strokeStyle = color; 
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

var tam_lienzo = 300;
var escala = tam_lienzo/30;

//Inicio arriba a la izquierda
var xi = 0;
var yi = 0;
var xf = escala;
var yf = tam_lienzo;
//Inicio arriba a la derecha
var xi2 = tam_lienzo;
var yi2 = 0;
var xf2 = tam_lienzo - escala;
var yf2 = tam_lienzo;
//Inicio abajo a la derecha
var xi3 = tam_lienzo;
var yi3 = tam_lienzo;
var xf3 = tam_lienzo-escala;
var yf3 = 0

// dibujarLinea("black",xi3,yi3,xf3,yf3);
// dibujarLinea("red",xi3,yi3-escala,xf3+escala,yf3);

while (xf<=tam_lienzo || yi<=tam_lienzo) {
dibujarLinea("blue",xi,yi,xf,yf);
yi=yi+escala;
xf=xf+escala;
}

while (xf2>=0 || yi2<=tam_lienzo) {
dibujarLinea("red",xi2,yi2,xf2,yf2);
yi2=yi2+escala;
xf2=xf2-escala
}
