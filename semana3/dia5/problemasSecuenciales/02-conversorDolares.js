/**
 *  Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.
 * 
 *  tipo de cambio al 19/09/20
 *  1 sol = 0.28 dolares
 */

let tipoCambio = +prompt("Ingrese tipo de cambio");
let monedaNacional = +prompt("Ingrese cantidad de dinero a cambiar: ");
let dolares = tipoCambio * monedaNacional;
alert(`Por ${monedaNacional} PEN adquiere ${dolares} USD`);