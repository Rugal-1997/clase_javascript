function agregar(){

	var lm = document.getElementById('lista');
	var item = document.createElement('li');
	var prd = document.getElementById('producto').value; /* trae el valor del id del html */
	var txt = document.createTextNode(prd); /* crea el texto que trajo del html */ 
	item.appendChild(txt); /* Inserta en el html en su elemento hijo */
	lm.appendChild(item);

}

var elm = document.getElementsByTagName('li');
var lm = elm[0].parentNode; /* Retorna al elemento padre del html */
console.log(lm);
var item = document.createElement('li'); /* Crea un elemento en el html */
var txt = document.createTextNode('Ejemplo');
item.appendChild(txt);
lm.insertBefore(item,elm[0]); /* Inserta el elemento en la primer pocision */
item.innerHTML="<p>Otro ejemplo</p>"; /* Inserta directamente el texto en el html */
lm.replaceChild(item,elm[0]); /* Reemplaza un elemento por otro */