// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------- Video 19 - funciones ----->
//=============================================================================
// >> Funciones -> una función es un conjunto de lineas de código que se
//                 ejecutarán cuando sean invocados, no antes, no después.
//              -> ventaja de una función es que puede ser invocada N veces.
//              -> Otra ventaja de una función es que el código puede ser reutilizable.
//=============================================================================


function tablaDel5() {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x 5  = ${c * 5}`);
    }
}

// tablaDel5();
// console.log("--------");
// tablaDel5();

function tablaDeMultiplicar(numero) {
    console.log(`============`);
    console.log(`Tabla del ${numero}`);    
    console.log(`============`);
    for (let c = 0; c <= 10; c++) {      
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
}
// tablaDeMultiplicar(8);

const arreglo = [1,2,3,4,5,6,7,8,9];

function tablaMultiplicarArray(array){
    console.log(`Tabla de multiplicar de los elementos de un array`);
    console.log(`==================================================`);
    // console.log(`array >> [${array}]`);
    console.table(array);
    for (let c = 0; c < array.length; c++) {
        tablaDeMultiplicar(array[c]);
    }
}

tablaMultiplicarArray(arreglo);
