//Se llevan los elementos de HTML a variables (objetos)
const h1 = document.querySelector("h1");
const input1 = document.querySelector("#numero1");
const input2 = document.querySelector("#numero2");
const btn = document.querySelector("#btnSumar");
const rSuma = document.querySelector("#suma");
const form = document.querySelector("#form");

//Se escucha el elemento que va a tener u evento, se pasa el evento y la función a ejecutar como argumentos
btn.addEventListener("click", btnOnClick);

//Se define la función
function btnOnClick() {
	console.log("Botón presionado");
	const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
	rSuma.innerText = "La suma es: " + sumaInputs;
}
