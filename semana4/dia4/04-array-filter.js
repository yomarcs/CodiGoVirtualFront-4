// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 20 ----------->
// <!----------- Array.filter --------->
//====================================//
//===================================================================================
// filter -> filter es una función propia de los arreglos, recibe un callback con
//           los mismos parametros que la función forEach, la diferencia es que 
//           filter retorna un nuevo arreglo con los elementos filtrados
// >> push -> Introduce elementos a un array.
// >> pop -> Elimina el ultimo elemento de un array.
// >> splice(index,modo,ingreso) ->cambia el contenido de un array eliminando elementos
//                                 existentes y/o agregando nuevos elementos
// >> join() -> convierte los elementos de un array en String, separados por comas ",".
// >> split() -> Ingresa todo el String(texto) dentro de una array.
// >> sort() -> Ordena alfabeticamente un array.
//           -> Ingresando un callback a sort nos lo ordena de menor a mayor(buscar en 07-ejercicio-arrays.js)
// >> reverse() -> Nos permite revertir el orden de un array.
//===================================================================================

const numeros = [12, -3, 0, -9, 67, 0, -10, 0, -500, -4, 32, 33];

let resultado = numeros.filter((elemento) => {
    if (elemento < 0) {
        return elemento;
    }
});

console.log(resultado);

//====================================================================================

var categorias = ["Terror", "Acción", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran Torino"];

var cine = [categorias, peliculas];

//console.log(cine);
//console.log(cine[0][1]);
//console.log(cine[1][2]);

//========================================//

// push -> Introduce elementos a un array.
//var elemento = prompt("Introduce tu pelicula:");
while (elemento != "fin") {
    var elemento = prompt("Introduce tu pelicula:");
    if (elemento == "fin") {
        break;
    } else
        peliculas.push(elemento);
}

console.log(peliculas);

//=======================================//

// pop -> Elimina el ultimo elemento de un array.

peliculas.pop();
console.log(peliculas);

//=========================================//

// splice(index,modo,ingreso) -> cambia el contenido de un array eliminando elementos
//                               existentes y/o agregando nuevos elementos
/*     -> index -> index o posicion que deseamos modificar o eliminar.
       -> modo -> (0) inserta un elemento adicional al array y corre el resto hacia la derecha.
                  (1) reemplaza el elemento en la posicion indicada.
                      Si queremos eliminar el elemento no ingresamos ningun parametro en  "ingreso".
       -> ingreso -> nuevo elemento que reemplaza o se agrega al array.
*/

var indice = peliculas.indexOf("La vida es bella");
//indexOf devuelve -1 si no encontrase el elemento a buscar.
if (indice > -1) {
    peliculas.splice(indice, 1);
}

console.log(peliculas);

//=========================================//

// join() -> convierte los elementos de un array en String, separados por comas ",".

var peliculas_string = peliculas.join();
console.log(peliculas_string);

//===============================================//

//split() -> Ingresa todo el String(texto) dentro de una array.
//        -> Si no ingresamos ningun parametro  convetira todo el texto es un solo elemento String dentro del array.
//        -> Si ingresamos (",") le decimos que nos separe cada elemnto por comas.
//           Previamente el String tiene que estar separado por comas sino nos arrojara un solo elemento. 
var cadena = "texto1,texto2,texto3";
var cadena_array = cadena.split(",");

console.log(cadena_array);

//============================================//

// sort() -> Ordena alfabeticamente un array.

categorias.sort();
console.log(categorias);

//============================================//

// reverse() -> Nos permite revertir el orden de un array.

categorias.reverse();
console.log(categorias);