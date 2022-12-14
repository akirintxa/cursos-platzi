var teclas = {
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

//console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red",x-1,y-1,x+1,y+1,papel);

function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal,lienzo)
{
    lienzo.beginPath(); 
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

// function dibujarTeclado(evento)
// {
//     console.log ("Tecla presionada");
//     console.log (evento.keyCode);
// }

// function dibujarTeclado(evento)
// {
//     if(evento.keyCode == teclas.UP)
//     {
//         console.log("Hacia arriba");
//     }
//     if(evento.keyCode == teclas.DOWN)
//     {
//         console.log("Hacia abajo");
//     }

//     switch(evento.keyCode)
//     {
//         case teclas.LEFT:
//             console.log("Hacia la izquierda");
//         break;
//         case teclas.RIGHT:
//             console.log("Hacia la derecha");
//         break;
//         default:
//             console.log("Otra tecla")
//         break;
//     }
// }

function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 2;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
            y=y-movimiento;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
            y=y+movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
            x=x-movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
            x=x+movimiento;
        break;
    }
}