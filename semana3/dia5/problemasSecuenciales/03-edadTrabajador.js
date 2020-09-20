/**
 * Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron.
 */

let anioActual = +prompt("Ingrese año actual");
let anioNacimiento = +prompt("Ingrese año de nacimiento");
edad = anioActual - anioNacimiento;
alert(`EL postulante cumple ${edad} este año`);