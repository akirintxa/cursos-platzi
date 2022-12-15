class billete
{
	constructor(v, c)
    {
    	this.valor = v;
    	this.cantidad = c;
    }
}

function entregarBillete()
{
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);
	entregado.length = 0;

	for(var bill of caja)
	{
		if (dinero > 0)
		{
			div = Math.floor(dinero / bill.valor);

			if (div > bill.cantidad)
			{
				papeles = bill.cantidad;
			}
			else
			{
				papeles = div;
			}

			entregado.push( new billete(bill.valor, papeles) );
     		dinero = dinero - (bill.valor * papeles);
     	}	
	}

		if (dinero > 0)
		{
			resultado.innerHTML = "No puedo darte esa cantidad";
		}
		else
		{
			for(var e of entregado)
    		{
      			if(e.cantidad > 0)
      			{
         	     resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "
";
      			}
			}
		}

	}

function limpiarPantalla()
{
	resultado.innerHTML = " ";
}

var caja = [];
var entregado = [];

caja.push(new billete(100, 5));
caja.push(new billete(50, 5));
caja.push(new billete(20, 10));
caja.push(new billete(10, 10));
caja.push(new billete(5, 10));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarBillete);

var l = document.getElementById("limpiar");
l.addEventListener("click", limpiarPantalla);