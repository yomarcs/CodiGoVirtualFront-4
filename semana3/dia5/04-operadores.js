// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!-- FrontEnd - JavaScript -->
// <!-- ------------------------------------ -->
// <!-- Video 16 - Operadores -->
//===================================================
// >> Operaciones Aritméticas
//    suma = +
//    resta = -
//    multiplicación = *
//    división = /
//    módulo = %
//    potencia = **
// >> Operadores Adicionales
//    incremento = "+="
//    decremento = "-="
//    incremento en unidad = "++"
//    deccremento en unidad = "--"
// >> debugger -> punto de interrupcion en la ejecucion de un programa permitiendo avanzar paso a paso hasta el
//                fin del programa buscando errores, en el entorno de programacion se le llama debuggear el programa.
// ================================================== 

let a = 60;
let b = 20;
let division = a / b;
let modulo = a % b;

console.log(`Division: 60 / 20 = ${division}`);
console.log(`Modulo: 60 % 20 = ${modulo}`);

debugger;

let numero = 50;
let numero2 = 100;
numero = numero + numero2;
// numero += numero2; => numero = numero + numero2;
console.log(numero);
numero2++;
console.log(numero2);