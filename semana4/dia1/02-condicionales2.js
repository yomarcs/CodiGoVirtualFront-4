/**
 * Calcular el indice de masa corporal e indicar si una persona se encuentra con sobrepeso de acuerdo a la siguiente tabla.
 * 
 * 15 o menos - Delgadez
 * 15 y 25 - Peso ideal
 * 25 a mas - Sobrepeso
 * 
 * Formula
 * IMC = peso(kg) / altura^2 (m)
 */

let peso = +prompt("Indice de masa corporal (IMC).\nIngrese su pero en Kg: ");
let altura = +prompt("Indice de masa corporal (IMC).\nIngrese su talla en Mts");
const imc = peso / (altura ** 2);
console.log(imc);

if (imc <= 15) {
    console.log("El paciente presenta delgadez");
} else {
    if (imc > 25) {
        console.log("El paciente presenta sobrepeso");
    } else
        console.log("Esta en su peso ideal");
}