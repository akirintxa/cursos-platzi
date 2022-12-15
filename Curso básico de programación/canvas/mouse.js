//Se identifica como areaDibujo al canvas o lienzo de HTML.
var cuadro = document.getElementById("areaDibujo");
 //Se define el context.
var papel = cuadro.getContext("2d");
//Cuando escucha el evento del clic abajo del mouse y ejecuta la función InicioLinea
cuadro.addEventListener("mousedown", inicioLinea); 
//Cuando escucha el evento clic arriba -soltar- y ejecuta finLinea
cuadro.addEventListener("mouseup", finLinea);
//Cuando escucha el mov del mouse y ejecutas moverLinea.
cuadro.addEventListener("mousemove", moverLinea); 

//El color de la linea.
var colorPincel = "green";
// La variable mouse por defecto será false porque así lo definí
let mouse = false; 

//Esta es la función base del dibujo.
function dibujarLinea(colorin, xinicial, yinicial, xfinal, yfinal, lienzo){ 
    lienzo.beginPath();
    lienzo.strokeStyle= colorin; //Cambié esta variable por otro nombre
    lienzo.lineWidth = 2;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function inicioLinea(){ //Linea inicial me cambia el false por defecto a true.
    mouse = true;
}

function finLinea(){ //Esta función me vuelve a poner al mouse como nulo, es decir false.
    mouse = false;
}
function moverLinea(event){ //Esta función dice
//Si mouse es está mousedown, va a dibujar.
    if(mouse == true){ 
        dibujarLinea(colorPincel, event.layerX - 1, event.layerY - 1, event.layerX + 1, event.layerY + 1, papel);
    }
}