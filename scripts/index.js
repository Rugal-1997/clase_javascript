/*
var num1 = 10.5;
var num2 = 5;

var res = num1 * num2;

var nom = "Nicolas Gomez Morales";

var prf = 'Desarrollador Full Stack';

var tiene_mascota = true;

var datos=["Nicolas",11,"Gomez",22,"Morales",false];  

console.log(res);
console.log("Mi nombre es "+nom);
console.log("Profesion : "+prf);
console.log(tiene_mascota);
console.log(datos[0]+" "+datos[1]+" "+datos[2]);
console.log(datos[3]+" "+datos[4]+" "+datos[5]);

var edad = 41;

if (edad>=18 && edad<=40) {
	console.log("Eres un adulto joven");
} else {
	console.log("No eres un adulto joven");
}

var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]

for (var i = 0; i < 7; i++) {
	console.log(dias[i]);
}

for (i in dias) {
	alert(dias[i]);
}

function sumas(num1,num2) {
	var res = num1+num2;
	return res;
}

var res = sumas(88,55);

console.log(res);
*/

function iva(num1) {
	var iva = num1 * 19 / 100 ;
	return iva;
}

var res = iva(550000);

console.log(res);  