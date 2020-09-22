/**
 *  Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.
 * 
 *  tipo de cambio al 19/09/20
 *  1 sol = 0.28 dolares
 */

// let tipoCambio = +prompt("Kambista => PEN - USD.\nIngrese tipo de cambio");
let tipoCambio = 0.28;
let monedaNacional = +prompt("Kambista Perú: PEN => USD.\nIngrese monto en soles: ");
let dolares = tipoCambio * monedaNacional;
alert(`Kambista Perú: PEN => USD.\n${monedaNacional} PEN = ${dolares} USD`);