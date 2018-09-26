var frutas = ["fresa","uva","manzana","naranja","pera"];

function mostrar_frutas(){
	console.log("-------------------------");
	console.log("En total hay "+frutas.length+" frutas"); /* length cuenta el numero de elementos de un arreglo */
	for (var i = 0; i < frutas.length; i++) {
	console.log("En la pocision "+i+" esta la fruta "+frutas[i]);
	}
}

frutas.push("mandarina"); /* push agrega un elemento en la ultima pocision */
frutas.push("melon"); 
mostrar_frutas();
frutas.pop(); /* pop elimina el ultimo elemento del arreglo */
frutas.unshift("banana");  /* unshift agrega un elemento en la primera pocision */
mostrar_frutas();
frutas.shift(); /* shift elimina el primer elemento del arreglo */
mostrar_frutas();

var equipos = ["Barcelona","Real Madrid","Juventus",1000];
var jugador = ["Messi","Bale","Cristiano",20];

var futbol = equipos.concat(jugador); /* concat une arreglos */

console.log(futbol);

console.log(futbol.join(" / ")); /* join separa los elementos de un arreglo con un caracter en la consola */

console.log(futbol.sort()); /* sort ordena los elementos de un arreglo alfabeticamente */

var pos1 = futbol.indexOf("Messi"); /* indexOf trae el valor de la pocision del arreglo */
var pos2 = futbol.indexOf("Cristiano");
console.log("Messi pos: "+pos1+" / Cristiano pos:"+pos2); 

futbol.splice(pos2,3); /* splice borra una cantidad de elementos dada desde un pocision del arreglo */
console.log(futbol);

var persona = {nombre:"Nicolas",edad:21,tiene_mascota:true,mascota:{nombre:"Firulais",raza:"galgo"}}
/* Un objeto es una agrupacion de datos un sola variable */

console.log(persona['nombre']+" "+persona.edad);

console.log(persona.mascota['nombre']+" "+persona['mascota'].raza);

var ahora = new Date(); /* el objeto fecha analiza la fecha actual si no hay parametros */

console.log(ahora);

console.log(typeof persona); /* typeof devuelve el tipo de variable */

console.log(persona.edad);
console.log(persona.edad.toString()); /* numero a cadena de texto */

var cant = "25 manzanas";
console.log(cant);
console.log(parseInt(cant)); /* cadena de texto a numero entero o decimal */

var texto = " En algun lugar de la mancha ";

console.log(texto.length); /* numero de caracteres de la cadena */
console.log(texto.indexOf('lugar')); /* Primera aparicion de un caracter */
console.log(texto.lastIndexOf('ch')); /* Ultima aparicion de un caracter */

var pal = texto.slice(10,15); /* extrae una parte de la cadena desde una pocision a otra */
console.log(pal);

var pal2 = texto.substr(22,6); /* extrae una parte de la cadena desde una pocision diciendo cuantos caracteres quiero sacar*/
console.log(pal2);

console.log(texto.replace('mancha','ciudad')); /* reemplaza una parte de cadena con otra */

console.log(texto.toUpperCase()); /* Mayusculas */
console.log(texto.toLowerCase()); /* Minusculas */ 

console.log(texto.trim()); /* elimina los espacios en blanco del principio y el final */

