// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 20 ----------->
// <!------------ callbacks ----------->
//====================================//
// >> callbacks
// Es una función anónima que se le pasa
// como parametro a otra función.
// >> Funciones de flecha
// Es otra forma de definir funciones de
// callback de una manera mas limpia,
// clara y corta.
// >> Funciones anónimas
// Son funciones que no tienen nombre y
// que simplemente son guardadas en una
// variable. Se utilizan en callbacks.
//======================================

const nombres = ["jorge", "luis", "ximena"];
const dnis = ["20202020", "12345678", "01020304"];

const buscarPorDNI = (dni, funcion) => {
    for (let c = 0; c < dnis.length; c++) {
        if (dnis[c] === dni) {
            funcion(nombres[c]);
        }
    }
};

buscarPorDNI("12345678", (encontrado) => {
    console.log("llegó el resultado!");
    console.log(encontrado);
});


//================================================================================================
/*                              //--Funciones de callback--//*/
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
};

/*         //-----------------------Funciones anónimas enviadas como parametros a una función---------------------//
           //----------Primera función anónima------------//---------Segunda función anominma---------------------//
sumame(5,7,function(dato){console.log("La suma es: ",dato)},function(dato){console.log("La suma x2 es: ", dato*2);});
*/

//=================================================================================================================//

// Funciones de flecha
// Es otra forma de definir funciones de callback de una manera 
// mas limpia, clara y corta. 
// solo es sustituir la palabra function por " => ".

//-----Primera función de flecha-----------------------------//----Segunda función de flecha-----------------//
// sumame(5, 7, dato => { console.log("La suma es: ", dato) }, dato => { console.log("La suma x2 es: ", dato * 2); });