// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!---------- FrontEnd - JavaScript ------------>
// <!-- --------------------------------------- -->
// <!---------- Propiedades de Arrays ------------>
//================================================//
/* Realizar un programa que:
1. pida 6 numeros por pantalla y los ingrese a un array.
2. Mostrar el array en el cuerpo de la pagina y consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Busqueda de un valor introducido por el usuario y que 
   nos diga si esta en el array y ademas que nos diga su posición.
*/
//================================================================//

function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array" + textoCustom + "</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => { document.write("<li>" + elemento + "</li>") });
    document.write("</ul><hr>");
}

/* 1. pida 6 numeros por pantalla y los ingrese a un array.
var array = new Array();
for(var i=1; i<=6;i++){
	var elemento = prompt(String("Ingrese el " + i + " dato del array:"),"");
	array.push(elemento);
}
*/
// 1. Solucion del profe
//var numeros = new Array(6);
var numeros = []
for (var i = 0; i <= 5; i++) {
    //numeros[i]=parseInt(prompt("Introduce un número",0));
    numeros.push(parseInt(prompt("Introduce un número", 0)));
}

/*2. Mostrar el array en el cuerpo de la pagina y consola.
console.log(array);

document.write("<h2>Los elementos ingresados en el array son:</h2><br>");
document.write("<ul>");
for(var element in array){
   document.write("<li>" + array[element] + "</li>");   
}

document.write("</ul>");
*/

// 2. Solución del profe.
mostrarArray(numeros);
console.log(numeros);

/* 3. Ordenarlo y mostrarlo.
array.sort();
console.log(array);
*/

// 3. Solucion de profe
//Ingresando un callback a sort nos lo ordena de menor a mayor
// cuando el primer digito son iguales de mayor a mnor si colocamos b-a
numeros.sort(function(a, b) { return a - b });
mostrarArray(numeros, " ordenado");
console.log(numeros);

/* 4. Invertir su orden y mostrarlo.
array.reverse();
console.log(array);
*/

// 4. solucion profe
numeros.reverse();
mostrarArray(numeros, " en reversa");
console.log(numeros);

// 5. Mostrar cuantos elementos tiene el array.
//console.log(array.length);

// 5. solucion profe
document.write("<h2>El array tiene : " + numeros.length + "<hr>");
console.log("La cantidad de elementos del array es: " + numeros.length);


/* 6. Busqueda de un valor introducido por el usuario y que 
//    nos diga si esta en el array y ademas que nos diga su posición.

var dato = prompt("Ingrese texto a buscar en el array:",);
var posicion = array.findIndex(elemento => elemento == dato);
	
if(posicion != -1){
		console.log(dato + " si es parte de los elmentos del array.");
        console.log("Se encuentra en la posición " + posicion);
        document.write("<h1>Encontrado</h1>");
        document.write("<h1>posición de la busqueda: " + posicion);
}else
        console.log("Ese elemento No existe en el array.");
*/

// 6. solucion profe

var dato = prompt("Ingrese numero a buscar en el array:", );
var posicion = numeros.findIndex(elemento => elemento == dato);

if (posicion != -1) {
    console.log(dato + " si es parte de los elmentos del array.");
    console.log("Se encuentra en la posición " + posicion);
    document.write("<h2>Encontrado</h2>");
    document.write("posición de la busqueda: " + posicion + "<hr>");
} else
    console.log("Ese elemento No existe en el array.");