// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 19 ----------->
// <!---- Funciones con parametros ---->
//=============================================================================
// >> Funciones con parametros -> Una vez que creas tu funcion y le asignas parametros
//                                es obligatorio al hacer la llamada a la funcion
//                                enviarle las variables o datos (parametros) que le
//                                asignaste a tu función si no te retornara error.
//=============================================================================

// Definimos la funcion
function tablaDeMultiplicar(numero) {
    // Conjunto de instrucciones a ejecutar
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
}

// Invocar o llamar a la funcion
tablaDeMultiplicar(9);
console.log("========");
tablaDeMultiplicar(80);
console.log("========");
tablaDeMultiplicar(100);

let arreglo = [5, 8, 4, 7, 2, 3];

/* Ejercicio: imprimir la tabla de multiplicar de todos los elementos del
              arreglo llamado "arreglo".*/

for (let c = 0; c < arreglo.length; c++) {
    console.log(`Tabla del ${arreglo[c]}`);
    tablaDeMultiplicar(arreglo[c]);
}