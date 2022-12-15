const XMLHttpRequest = require("xmlhttprequest");
const API = "https://api.escuela.com/api/v1";

function fetchData(urlApi, callback) {
	let xhttp = new XMLHttpRequest(); //inicializo la petición de lectura del archivo xml y lo guardo en una variable
	xhttp.open("GET", urlAPI, true); //abro el archivo con el método open: true significa que es asincronica
	//onreadystatechange monitorea cada paso de la petición de lectura del archivo
	xhttp.onreadystatechange = function (event) {
		if (xhttp.readyState === 4) {
			//valor 4 significa que la solicitud al api esté completada
			console.log("Cambiando de estado" + xhttp.readyState);
			if (xhttp.status === 200) {
				//valor 200 es que todo fue bien sin error
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				const error = new Error("Error" + urlAPI);
				return callback(error, null);
			}
		}
	};

	xhttp.send();
}

fetchData(`${API}/products`,function(error1, data1){
	if (error1) return console.error(error1);
	fetchData(`${API}/${data1[0].id}`, function (error2, data2)){

	}
}
