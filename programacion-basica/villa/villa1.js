var vp=document.getElementById("villaplatzi");
var papel=vp.getContext("2d");

var mapa = "tile.png"
var fondo = new Image(); //Creamos un nuevo objeto
fondo.src = mapa; //En la propiedad src del objeto asiganamos el archivo a cargar
fondo.addEventListener("load",dibujar); //Se dispara la función dibujar cuando el evento load termina de ocurrir


var vaca = new Image();
vaca.src = "vaca.png";
vaca.addEventListener("load",dibujarVacas);

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load",dibujarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load",dibujarPollos);

function dibujar()
{
    papel.drawImage(fondo,0,0); //objeto a cargar, x,y)
}

function dibujarVacas()
{
    papel.drawImage(vaca,100,10); //objeto a cargar, x,y)
}

function dibujarCerdos()
{
    papel.drawImage(cerdo,50,300); //objeto a cargar, x,y)
}

function dibujarPollos()
{
    papel.drawImage(pollo,300,200); //objeto a cargar, x,y)
}

function aleatorio(min,maxi)
{
    var resultado;
    resultado=Math.floor(Math.random()*(maxi-min+1))+min;return resultado;
}

//Probando los numeros aleatorios
// var z;
// for(var i=0;i<10;i++)
// {
//     z = aleatorio(-1,5);
//     document.write(z + ",");
// }