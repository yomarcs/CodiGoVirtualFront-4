/**
 *  Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas. Determinar el cobro.
 */

let tarifa = +prompt("Ingrese tarifa: ");
let horas = +prompt("Ingrese horas de parqueo: ");
let fraccion = +prompt("Ingrese fracción de hora de parqueo: ");
fraccion = 1;
horas += fraccion;
alert(`Cobrar: ${tarifa * horas} soles`);