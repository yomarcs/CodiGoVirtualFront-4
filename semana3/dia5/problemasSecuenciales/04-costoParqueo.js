/**
 *  Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora se toman como completas. Determinar el cobro.
 */

// let tarifa = +prompt("Parking Perú.\nIngrese tarifa: ");
let tarifa = 8;
let horas = +prompt("Parking Perú.\nIngrese horas de parqueo: ");
let fraccion = +prompt("Parking Perú.\nIngrese fracción de hora de parqueo: ");
fraccion = 1;
horas += fraccion;
alert(`Parking Perú.\nTotal: ${tarifa * horas} soles`);