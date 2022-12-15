for (var num = 1; num <= 100; num++) 
{
	if (num%3 != 0 && num%5 != 0) respuesta = '<br>'
	if (num%3 == 0 && num%5 != 0) respuesta = ' Fizz<br>'
	if (num%3 != 0 && num%5 == 0) respuesta = ' Buzz<br>'
	if (num%3 == 0 && num%5 == 0) respuesta = ' FizzBuzz<br>'
	document.write(num + respuesta)
}

// **Recuerda**:
// - Para calcular el módulo puedes usar %
// - Los programadores dividen los programas complejos en problemas pequeños
// - La operación lógica and (y) se escribe en JavaScript con &&

// Aporte creado por: Edgar Bañuelos