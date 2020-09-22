/**
 * Operadores lógicos
 * 
 * && and y
 * || or o
 * ! not negación
 * 
 * El ejercio del mayor de 3 numeros con operadores logicos.
 */

let nro1 = +prompt("Mayor y Menor.\nIngrese primer nro: ");
let nro2 = +prompt("Mayor y Menor.\nIngrese segundo nro: ");
let nro3 = +prompt("Mayor y Menor.\nIngrese tercer nro: ");

if (nro1 > nro2 && nro1 > nro3) {
    console.log(`Mayor y Menor.\nEl número 1 es mayor: ${nro1}`);
} else {
    if (nro2 > nro1 && nro2 > nro3) {
        console.log(`Mayor y Menor.\nEl número 2 es mayor: ${nro2}`);
    } else {
        console.log(`Mayor y Menor.\nEl número 3 es mayor: ${nro3}`);
    }
}