/**
 * Cacular el mayor de 3 numeros (asumineod que todos son * diferentes y mostrarlos por consola)
 * Los numeros pueden ser ingresados por el usuario o * *declararlos al inicio del programa.
 */

let nro1 = +prompt("Mayor y Menor.\nIngrese primer nro: ");
let nro2 = +prompt("Mayor y Menor.\nIngrese segundo nro: ");
let nro3 = +prompt("Mayor y Menor.\nIngrese tercer nro: ");

if (nro1 > nro2) {
    if (nro1 > nro3) {
        console.log(`Mayor y Menor.\nEl número 1 es mayor: ${nro1}`);
    } else {
        console.log(`Mayor y Menor.\nEl número 3 es mayor: ${nro3}`);
    }
} else {
    if (nro2 > nro3) {
        console.log(`Mayor y Menor.\nEl número 3 es mayor: ${nro2}`);
    } else {
        console.log(`Mayor y Menor.\nEl número 3 es mayor: ${nro3}`);
    }
}