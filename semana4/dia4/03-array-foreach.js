// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 20 ----------->
// <!------ Propiedades Arrays -------->
//====================================//
//===================================================================================
// forEach -> sirve para recorrer un arreglo sin necesidad de usar un ciclo for.
//         -> recibe una función anónima la cual ejecutará tantas veces como 
//            elementos tenga mi arreglo
//         -> internamente se realiza un callback.
//                              0      1     2
//         -> Array.forEach((elemento,index,array)=>{});
//       0 -> Podemos pasarle solo el parametro que en este caso le hemos puesto 
//            de nombre "elemento" y se imprimira solo los elementos del array.
//         -> Podemos agregarle mas parametros que tendran diferentes funciones.
//       1 -> en esta posición nos imprimira  tambien el index o posición de cada elemento.
//       2 -> en esta pocion nos imprimira todo el contenido del array.
//         -> Los nombres que hemos colocado son referenciales, solo ocupan el parametro
//            para que funcionen.
// for in -> itera sobre todos los elementos de un objeto, en un orden arbitrario. 
//        -> Para cada uno de los elementos, se ejecuta la sentencia especificada.
// find -> busca un elemento dentro del array e imprimi su texto.
// findIndex -> nos devuelve el indice en el cual se encuentra el texto.
// some -> busca una condicion y nos devuelve true o false.
//===================================================================================

// const nombres = ["Juliana", "Carlos", "Mónica", "Abel", "Pepillo"];
// nombres.forEach((elemento, c) => {
//     console.log(`Elemento ${elemento}, C =${c}`);
// });

//=====================================================================================

var nombres = ["Yomar Cerdán", "Fabian Cerdán", "Gabriel Cerdán", 58, true];
//                index(0)   ,    index(1)   ,    index(2)    ,......etc

//Otra forma de definir un array es como un objeto.
var lenguajes = new Array("PHP", "JavaScript", "Go", "Java", "C#", "C", "C++", "Pascal", "Fortran");
//                           0       1        2        3

console.log(nombres);
console.log(lenguajes);
console.log(lenguajes[1]);

//====================================================================================

console.log(nombres.length);

var elemento = parseInt(prompt("Qué elemento del array quieres: ", 0));

while (elemento >= nombres.length) {
    alert("Introduce indice correcto, menor a " + nombres.length);
    elemento = parseInt(prompt("Qué elemento del array quieres: ", 0));
}
alert("El usuario seleccionado es: " + nombres[elemento]);

document.write("<h1>Lenguajes de programación del 2020:</h1>");
document.write("<ul>")
lenguajes.forEach((elemento, index, array) => {
    //console.log(array);
    document.write("<li>" + index + " - " + elemento + "</li>");
});
document.write("</ul>");

//===================================================================================
/* for in -> itera sobre todos los elementos de un objeto, en un orden arbitrario. 
          -> Para cada uno de los elementos, se ejecuta la sentencia especificada. */
document.write("<ul>")
for (var lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}
document.write("</ul>");

//=====================================================================================

// find -> busca un elemento dentro del array e imprimi su texto.
var busqueda = lenguajes.find(function(lenguaje) { return lenguaje == "PHP"; });
console.log(busqueda);

// Podemos reducir aún mas esta sentencia con flecha "=>"
var busqueda1 = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda1);

//=====================================================================================

// findIndex -> nos devuelve el indice en el cual se encuentra el texto.
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "Pascal");
console.log(busqueda2);

//=====================================================================================
// some -> busca una condicion y nos devuelve true o false.
var precios = [10, 20, 50, 80, 12];
var busqueda3 = precios.some(precio => precio > 80);
console.log(busqueda3);