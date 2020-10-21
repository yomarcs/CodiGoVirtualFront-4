//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video 22 ------------->
//<----- String y sus propiedades ----->
//<--===================================================================-->
// >> string.length 
//    -> calcula longitud de un texto o tamaño de caracteres de una cadena. 
//    -> util para comprobar si una variables tiene texto o si viene vacia.
// >> string.toLowerCase()
//    -> retorna la misma cadena con todos sus caracteres en minúsculas.
//    -> ojo: no transforma la cadena inicial.
// >> string.toUpperCase()
//    -> retorna la misma cadena con todos sus caracteres en mayúsculas
//    -> OJO: no transforma la cadena inicial.
// >> toString() -> convierte cualquier tipo de dato a String.
// >> string[posicion]
//    -> Se puede manejar a un string como un arreglo es decir, podemos 
//       acceder a sus posiciones con un valor numérico.
// >> string.substr(pos.inicial, cant.caracteres)
//    -> retorna una sub-cadena desde la posicion_inicial,
//       se cuenta una cantidad_de_caracteres a la derecha.
// >> string.includes("cadena")
//    -> Retorna true si es que la cadena pasada por parámetros está dentro de la
//       cadena completa, y false, si la cadena no es parte de la frase completa.
// >> string.indexOf("cadena",opcional_posicion_inicial) 
//    -> Retorna la posición en la que la "cadena" inicia dentro de la frase, 
//       en caso de que no exista dicha sub-cadena, retorna -1.
//    -> OPCIONALMENTE: si se envía un segundo parametro (opcional_posicion_inicial)
//       la subcadena se busca desde la posicón de dicho parametro.
// >> string.trim() 
//    -> Retorna la misma cadena sin incluir los espacios en blanco tanto al final
//       como al incio no los espacios intermedios.
// >> string.concat()
//    -> Tiene la misma funcion que el operador "+" y permite concatenar
//    -> podemos agregarle cuaquier cosa: textos ,variables.
// ========================= Metodos de Busqueda =================================
// >> indexOf() -> método de búsqueda de la primera coincidencia de la palabara a buscar.
// >> search() -> se comporta igual que indexOf.
// >> lastIndexOf() -> método de búsqueda de la última coincidencia de la palabara a buscar.
// >> match() -> devuelve un array con la palabra, posicion y texto.
// >> substr() -> devuelve un fragmento.
// >> charAt() -> devuelve una letra indicandole su posicion(index).
// >> startsWith() -> Busca coincidencia al inicio del texto.
// >> endsWith() -> Busca coincidencia al final del texto.
// >> includes() -> Busca coincidencia en cualquier parte del texto.
//===================================================================================

let frase = "Mas sabe el diablo por diablo viejo diablo que por diablo";
let frase2 = "Sabe los todo";
console.log("Frase");
console.log(frase);

console.log("*******************");
// >> string.concat() -> podemos agregarle cuaquier cosa: textos ,variables.
let texto_total = frase.concat(frase2);
console.log(`Frases concatenadas: + ${texto_total}`);

console.log("*******************");
// string.length
// obtiene el tamaño de caracteres que tiene una cadena
let longitud = frase.length;
console.log(`Longitud: ${longitud}`);

// string.toLowerCase()
// retorna la misma cadena con todos sus caracteres en minúsculas
// OJO: no transforma la cadena inicial
console.log("*********************");
let enMinuscula = frase.toLowerCase();
console.log(`En minúsculas: ${enMinuscula}`);

// string.toUpperCase()
// retorna la misma cadena con todos sus caracteres en mayúsculas
// OJO: no transforma la cadena inicial
console.log("*********************");
let enMayuscula = frase.toUpperCase();
console.log(`En mayúscula: ${enMayuscula}`);


// string[posicion]
// se puede manejar a un string como un arreglo es decir, podemos 
// acceder a sus posiciones con un valor numérico.
console.log("*********************");
let posicion5 = frase[5];
console.log(`Posición 5 de frase: ${posicion5}`);

// string.substr(posicion_inicial, cantidad_de_caracteres)
// retorna una sub-cadena desde la posicion_inicial, se cuenta una
// cantidad_de_caracteres a la derecha.
console.log("**********************");
let subcadena = frase.substr(5, 2);
console.log(`Subcadena: ${subcadena}`);

// string.substring(posicion_inicial, posicion_final)
// retorna una subcadena desde la posicion_incial hasta un caracter 
// antes de la posicion_final
console.log("*********************");
let subcadena2 = frase.substring(5, 10);
console.log(`Subcadena: substring(5,10): ${subcadena2}`);

// string.includes("cadena");
// retorna true si es que la cadena pasada por parámetros está dentro de
// la cadena completa, y false, si la cadena no es parte de la frase completa
console.log("****************************");
let existeDiablo = frase.includes("diablo");
console.log(`Incluye la palabra "diablo": ${existeDiablo}`);

// string.indexOf("cadena",opcional_posicion_inicial)
// Retorna la posición en la que la "cadena" inicia dentro de la frase,
// en caso de que no exista dicha sub-cadena, retorna -1
// OPCIONALMENTE: si se envía un segundo parametro (opcional_posicion_inicial)
// la subcadena se busca desde la posicón de dicho parametro
console.log("**************************");
let posicionDiablo = frase.indexOf("diablo");
console.log(`Posición de la palabra "diablo": ${posicionDiablo}`);

const posicionesDeDiablo = () => {
    let posicionEncontrada = 0;
    while (true) {
        posicionEncontrada = frase.indexOf("diablo", posicionEncontrada);
        if (posicionEncontrada !== -1) {
            console.log(`Encontrado en posición: ${posicionEncontrada}`);
            posicionEncontrada++;
        } else {
            break;
        }
    }
};
posicionesDeDiablo();

const posicionesDeDiablo2 = () => {
    for (let pos = 0; pos < frase.length; pos++) {
        pos = frase.indexOf("diablo", pos);
        if (pos !== -1) {
            console.log(`Encontrado en la posición: ${pos}`);
        } else {
            break;
        }
    }
};
posicionesDeDiablo2();

// string.trim() -> Retorna la misma cadena sin incluir los espacios en blanco
//                  tanto al final como al incio no los espacios intermedios.
let frase3 = "    cualquier frase interna   ";
console.log(frase3);
console.log(`${frase3.trim()}`);

// Esto -> string.chartAt(9) es practicamente los mismo a ->  string[9]

// Ejercicio1: Función que imprime la cantidad de vocales de la frase
//             sin importar que sean mayuscuclas o minusculas

// Ejercicio2: Función que imprime la cantidad de palabras que tenga una frase

// Ejercicio3: Función que imprime si una frase es un palíndromo
// ¿qué es un palíndromo? -> Una frase que se lee igual al derecho y al revés
// ejemplo: anita lava la tina (si consideramos quitar los espacios en blanco, la frase se lee igual)
//          radar, amor a roma, la ruta natural.

// HINT (Pistas):
// Antes de cualquiera de las dos formas, quitarle los espacios intermedios
// ¿cómo? -> Recorrer toda la cadena e ir sumando letra a letra un nuevo string
//           y cada vez que se encuentre un espacio en blanco, saltar a la
//           siguiente iteración.

// forma 1 -> Recorrer toda la cadena de caracteres desde el final hasta el inicio, en cada iteración,
//            ir sumando un string que incialmene esté vacío con cada nuevo caracter. Al final de todas
//            las iteraciones, comparar el string original con el string creado en el ciclo for.

// forma 2 -> Recorrer toda la cadena de caracteres, desde el inicio hasta la mitad de la cadena y
//            comparar en cada iteración por ejemplo lo siguiente:
//            Iteración 1:
//            posición 0 con posición length-0
//            Iteración 2:
//            posición 1 con posición length-1
//            Iteración 3:
//            posición 2 con posición lentgh-2
//            y así sucesivamente... en cada iteración deben de compararse que ambos caracteres son iguales.

//==============================================================================================================//
// ====================================== Metodos de Busqueda ==================================================

// el index inicia desde la posición 0 hacia adelante.
var texto1 = "Bienvenido al curso de JavaScript curso de Yomar Cerdán";
var texto2 = "ES UN BUEN CURSO, EL MEJOR CURSO";

console.log("Frase");
console.log(texto1);

// indexOf -> método de búsqueda de la primera coincidencia de la palabara a buscar.
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

// search -> se comporta igual que indexOf.
var busqueda1 = texto1.search("curso");
console.log(busqueda1);

//===============================================//

// lastIndexOf -> método de búsqueda de la última coincidencia de la palabara a buscar.
console.log("Frase 2");
console.log(texto2);
var busqueda2 = texto2.lastIndexOf("CURSO");
console.log(busqueda2);

//================================================//

// match -> devuelve un array con la palabra, posicion y texto.
var busqueda3 = texto1.match("curso");
console.log(busqueda3);

// match(/palabra/g) -> devuelve un array con las coincidencias encontradas.
var busqueda4 = texto1.match(/curso/gi);
console.log(busqueda4);

//=================================================//

// substr(posicionInicial,NumeroDeCaraceresAMostrar) -> devuelve un fragmento
var busqueda5 = texto1.substr(14, 5);
console.log(busqueda5);

//=================================================//

// charAt() -> devuelve una letra indicandole su posicion(index).
var busqueda6 = texto1.charAt(9);
console.log(busqueda6);

//================================================//

// startsWith() -> Busca coincidencia al inicio del texto.
// devuelve True si lo a ncontrado o false si no.
var busqueda7 = texto1.startsWith("Bienvenido");
console.log(busqueda7);

// endsWith() -> Busca coincidencia al final del texto.
// devuelve True si lo a ncontrado o false si no.
var busqueda8 = texto1.endsWith("Yomar Cerdán");
console.log(busqueda8);

// includes() -> Busca coincidencia en cualquier parte del texto.
// devuelve True si lo a ncontrado o false si no.
var busqueda9 = texto1.includes("JavaScript");
console.log(busqueda9);