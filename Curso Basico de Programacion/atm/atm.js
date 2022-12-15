//Algoritmo
//1.Llenar el cajero con billetes
//2. Pedir el dinero que se va a retirar
//3. Ejecutar el algoritmo de selección de billetes
//4. Mostrar billetes resultantes

//Crear la clase Billete
class Billete {
	constructor(v, c) {
		this.valor = v;
		this.cantidad = c;
	}
}

//Llenar el cajero con billetes

var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
var entregado = [];
var div = 0;
var papeles = 0;

//Pedir el dinero que se va a retirar
var dinero = 1000;

//Ejecutar el algoritmo de selección de billetes
var b = document.getElementById("retirar");
b.addEventListener("click", entregarDinero);

//Se ejecuta al hacer click en el botón Retirar
var resultado = document.getElementById("resultado");
function entregarDinero() {
	//Pedir el dinero que se va a retirar desde el navegador
	var t = document.getElementById("dinero");
	dinero = parseInt(t.value);

	for (var bi of caja) {
		//console.log(bi);
		if (dinero > 0) {
			div = Math.floor(dinero / bi.valor);
			if (div > bi.cantidad) {
				//comparo contra la cantidad de billetes disponibles en el ATM
				papeles = bi.cantidad;
			} else {
				papeles = div;
			}
			entregado.push(new Billete(bi.valor, papeles)); //agrego la denominación del billete y la cantidad final entregada
			dinero = dinero - bi.valor * papeles;
		}
	}
	//Mostrar billetes resultantes
	if (dinero > 0) {
		resultado.innerHTML =
			"El ATM no tiene esa cantidad disponible. Intente con un monto menor";
	} else {
		for (var e of entregado) {
			if (e.cantidad > 0) {
				//que no muestre los billetes que no se entreguen
				resultado.innerHTML +=
					e.cantidad + " billetes de $ " + e.valor + "<br>";
			}
		}
		console.log(entregado);
	}
}

//Desafío 1: Mostrar billetes resultantes con imágenes
//Desafío 2: Que la caja del ATM se quede sin dinero (restar a caja)
