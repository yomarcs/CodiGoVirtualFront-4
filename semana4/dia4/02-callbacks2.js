// <!--- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!----------- FrontEnd - JavaScript ------------>
// <!-- ---------------------------------------- -->
// <!------------ Video 20 - Callbacks2 ----------->
//===================================================================================
// >> callbacks -> Es una función anónima que se le pasa como parametro a otra función.
// >> Funciones de flecha -> Es otra forma de definir funciones de callback,
//                           de una manera mas limpia, clara y corta
// >> Funciones anónimas -> Son funciones que no tienen nombre y que simplemente son
//                          guardadas en una variable. Principalmente se utilizan en callbacks.
//===================================================================================

const nombres = ["jorge", "luis", "ximena"];
const dnis = ["20202020", "12345678", "01020304"];

const buscarPorDNI = (dni, funcion) => {
    for (let c = 0; c < dnis.length; c++) {
        if (dnis[c] === dni) {
            funcion(nombres[c]);
            return;
        }
    }
    funcion(null);
};

buscarPorDNI("12345678", (rpta) => {
    if (rpta !== null) {
        console.log(`Encontrado: ${rpta}`);
    } else {
        console.log(`No existen coincidencias 😥`);
    }
});