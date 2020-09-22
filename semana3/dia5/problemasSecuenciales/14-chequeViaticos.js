/**
 * Una empresa desea determinar el monto de un cheque que debe proporcionar a uno de sus empleados que tendrá que ir por equis número de días a la ciudad de Monterrey; los gastos que cubre la empresa son: hotel, comida y 100.00 pesos diarios para otros gastos. El monto debe estar desglosado para cada concepto. Determine el monto del cheque.
 */

let dias = +prompt("Viáticos Monterrey.\nIngrese días viajeros: ");
let costoHotel = +prompt("Viáticos Monterrey.\nIngrese costo hotelero x día: ");
let costoAlimentacion = +prompt("Viáticos Monterrey.\nIngrese costo alimentación x día: ");
let gastosVarios = 100;
let cheque = dias * (costoHotel + costoAlimentacion + gastosVarios);
alert(`Viáticos Monterrey.\nGenerar cheque por: S/. ${cheque} soles`);