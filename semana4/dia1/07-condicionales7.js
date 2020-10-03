// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!-- FrontEnd - JavaScript -->
// <!-- ------------------------------------ -->
// <!-- Video 17 - Estructuras Condicionales -->
//=============================================================================
// >> Ejercicio: Crear un algoritmo para determinar el sueldo semanal en base a 
//              las horas trabajadas y el pago por hora. considerando que despues
//              de las 40 horas se considera excedente y se paga el doble.


let sueldoSemanal = 0;
let horasTrabajadas = 42;
let pagoPorHora = 35;

if (horasTrabajadas > 40) {
    sueldoSemanal = 40 * pagoPorHora + (horasTrabajadas - 40) * 2 * pagoPorHora;
} else {
    sueldoSemanal = horasTrabajadas * pagoPorHora;
}

console.log(`Total a pagar ${sueldoSemanal} por la semana cumplida 💰💰`);