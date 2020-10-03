// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!-- FrontEnd - JavaScript -->
// <!-- ------------------------------------ -->
// <!-- Video 17 - Estructuras Condicionales -->
//=============================================================================
// >> const -> Contenedor de informacion que no podra modificarse una vez definido.
//             Es un identificador que define una constante. se inicializacon un valor
//             y nunca mas cambia de valor durante la ejecución del programa.
//=============================================================================/**
/**
 * Cacular el mayor de 3 numeros (asumiendo que todos son diferentes y mostrarlos por consola)
 * Los numeros pueden ser ingresados por el usuario o declarados al inicio del programa.
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