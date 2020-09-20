/**
 *  Problema 2.2 pagina 30 - Algoritmos Resueltos.
 * 
 * Por defecto todo lo ingresado en el prompt entra como String. Con el nuevo Standar: con "+" adelante lo convertimos a Num
 */

let c1 = +prompt("Ingrese la 1ra nota");
let c2 = +prompt("Ingrese la 2da nota");
let c3 = +prompt("Ingrese la 3ra nota");
let c4 = +prompt("Ingrese la 4ta nota");
let suma = 0;
let promedio = 0;
suma = c1 + c2 + c3 + c4;
promedio = suma / 4;
console.log(`Joven su promedio es: ${promedio}`);
alert(`Joven su promedio es: ${promedio}`)