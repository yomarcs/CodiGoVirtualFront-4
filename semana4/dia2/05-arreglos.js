/**
 * Arreglos
 */
// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!---------- FrontEnd - JavaScript ------------>
// <!-- ------------------------------------ -->
// <!-- Video 18 - Estructuras Condicionales - Arreglos-->
//=============================================================================
// >> Arrays -> tambien coconidos como Arreglos y Matrices.
//           -> Es una colección de tipos de datos que puede tener una variable.
//           -> Para recorrer un array podemos utilizar "for" o "forEach".
//    Arrays[1] -> imprimir un solo elemento del arreglo dada su posición.
// Array.length -> Imprimir el tamaño del arreglo o la cantidad de elementos que tiene.
//=============================================================================

const numeros = [5, -1, 11, 777];

// imprimir un solo elemento del arreglo dada su posición
console.log(numeros[1]);

// Imprimir todos los elementos (inclusivo)
console.log("Imprimir todos los números del arreglo");
for (let c = 0; c < numeros.length; c++) {
    console.log(numeros[c]);
}

// Imprimir todo el arreglo
console.log("Imprimir todo el arreglo");
console.log(numeros);

// Imprimir el tamaño del arreglo
// o la cantidad de elementos que tiene
console.log("Imprimir la cantidad de elementos del arreglo");
console.log(numeros.length);