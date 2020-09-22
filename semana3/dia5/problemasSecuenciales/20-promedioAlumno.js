/**
 * Determinar el promedio que obtendrá un alumno considerando que realiza tres exámenes, de los cuales el primero y el segundo tienen una ponderación de 25%, mientras que el tercero de 50%.
 */

let nota1 = +prompt("Promedio alumno.\nIngrese nota 1er. examen: ");
let nota2 = +prompt("Promedio alumno.\nIngrese nota 2do. examen: ");
let nota3 = +prompt("Promedio alumno.\nIngrese nota 3er. examen: ");
let notaFinal = nota1 * 0.25 + nota2 * 0.25 + nota3 * 0.50;
alert(`Promedio alumno.\nNota final : ${notaFinal}`);