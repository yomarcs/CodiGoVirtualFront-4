// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 19 ----------->
// <!------- Funciones anonimas ------->
//===================================================================================
// >> Funciones anónimas -> Son funciones que no tienen nombre y que simplemente 
//                          son guardadas en una variable.
//===================================================================================

/*  function tablaDeMultiplicar(numero) {
    for (let c = 0; c <= 10; c++) {
      console.log(`${c} x ${numero} = ${c * numero}`);
      }
    } */

const tablaDeMultiplicar = function(numero) {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
};

tablaDeMultiplicar(11);