var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo)

lienzo.beginPath(); /*funcion*/
lienzo.strokeStyle = "red"; /*atributo de lienzo*/
lienzo.moveTo(100,100);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath(); /*funcion*/

lienzo.beginPath(); /*funcion*/
lienzo.strokeStyle = "blue"; /*atributo de lienzo*/
lienzo.moveTo(10,80);
lienzo.lineTo(250,150);
lienzo.stroke();
lienzo.closePath(); /*funcion*/

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal){
    lienzo.beginPath(); 
    lienzo.strokeStyle = color; 
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("green", 0, 0,50,300);
dibujarLinea("cyan", 50, 200,10,30);