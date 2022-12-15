//Ejemplo 1
function sum(num1, num2) {
	return num1 + num2;
}
function calc(num1, num2, callback) {
	return callback(num1, num2);
}
console.log(calc(2, 2, sum)); //no lleva parentesis después de la función que se pasa ej. sum//

//Ejemplo 2
setTimeout(function () {
	console.log("Hola JS");
}, 2000);
//Esta función es anónima y por eso no tiene nombre

//Ejemplo 3
function gretting(name) {
	console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Maria"); //se pasa primero la función, de segundo el tiempo de espera y el argumento
