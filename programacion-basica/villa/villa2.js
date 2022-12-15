var vp=document.getElementById("villaplatzi");
var papel=vp.getContext("2d");

var fondo={
    url:"tile.png",
    cargaOK:false
};
var vaca={
    url:"vaca.png",
    cargaOK:false
};
var cantidad=aleatorio(1,50);

//Crear un atributo nuevo al objeto fondo
fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);

function cargarFondo()
{
    fondo.cargaOK=true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK=true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
    papel.drawImage(fondo.imagen,0,0);
    }

    if(vaca.cargaOK)
    {
        console.log(cantidad);
        for(var v=0;v<cantidad;v++)
        {
            var x=aleatorio(0,7);
            var y=aleatorio(0,10);
            var x=x*60; //para que no se muestren apinadas
            var y=y*40; //para que no se muestren apinadas
            papel.drawImage(vaca.imagen,x,y);
        }
    }

    if(cerdo.cargaOK)
    {
     //   papel.drawImage(cerdo.imagen,245,245);
        document.addEventListener("keydown", dibujarTeclado);
    }
    
}

function aleatorio(min,maxi)
{
    var resultado;
    resultado=Math.floor(Math.random()*(maxi-min+1))+min;return resultado;
}

// mover cerdo
var cerdo={
    url:"cerdo.png",
    cargaOK:false
};

var teclas = {
    UP:38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
  };

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

function cargarCerdos()
{
    cerdo.cargaOK=true;
    papel.drawImage(cerdo.imagen,245,245);
}

// document.addEventListener("keydown", dibujarTeclado);
var x = 245;
var y = 245;

function dibujarTeclado(evento)
{
    var movimiento = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            papel.drawImage(cerdo.imagen,x,y-movimiento);
            y=y-movimiento;
        break;
        case teclas.DOWN:
            papel.drawImage(cerdo.imagen,x,y+movimiento);
            y=y+movimiento;
        break;
        case teclas.LEFT:
            papel.drawImage(cerdo.imagen,x-movimiento,y);
            x=x-movimiento;
        break;
        case teclas.RIGHT:
            papel.drawImage(cerdo.imagen,x+movimiento,y);
            x=x+movimiento;
        break;
    }
}








