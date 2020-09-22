/**
 * Cuánto dinero ahorra una persona en un año si considera que cada semana ahorra 15% de su sueldo (considere cuatro semanas por mes y que no cambia el sueldo.
 */

let ahorro = 0.15;
let semanas = 48;
let sueldo = +prompt("Cuenta Ahorro Sueldo.\nIngrese sueldo semanal: ");
let ahorroAnual = sueldo * ahorro * semanas;
alert(`Cuenta Ahorro Sueldo.\nUd. ahorraria anualmente: S/. ${ahorroAnual} soles`);