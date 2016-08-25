

var numero1= prompt("Ingrese el tiempo de la llamada en minutos");
var numero2 = prompt("Ingrese el costo por minuto en soles");

	var resultado = parseInt(numero1) * parseInt(numero2);
	document.write('<br>');
	document.write("El costo total de llamada es " + resultado + " soles");
