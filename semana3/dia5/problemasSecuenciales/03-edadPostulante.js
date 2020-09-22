/**
 * Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron.
 */

// let anioActual = +prompt("Talento Perú.\nIngrese año actual");
let anioActual = 2020;
let anioNacimiento = +prompt("Talento Perú.\nIngrese año de nacimiento de postulante:");
edad = anioActual - anioNacimiento;
alert(`Talento Perú.\nEL postulante cumple ${edad} este año`);