//servidor local en node js http://127.0.0.1:8989/

var express = require("express");
var app = express(); //invoco la función express y se la asigno a la variable app

app.get("/", inicio);
app.get("/cursos", cursos);

function inicio(peticion, resultado) {
	resultado.send("Hola pepsicola");
}

function cursos(peticion, resultado) {
	resultado.send("Estos son los <strong>cursos</cursos>");
}
app.listen(8989);
