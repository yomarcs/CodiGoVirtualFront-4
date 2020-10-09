// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 19 ----------->
// <!-------- Funciones flecha -------->
//====================================//
// Funciones flecha
// Es una funcion anonima sólo que está
// escrito en sintaxis moderna de Java
// Script, a la cual se le reemplazo la
// palabra clave function por una flecha
// ( => ).
//====================================//

/* const tablaDeMultiplicar = function (numero) {
    for (let c = 0; c <= 10; c++) {
      console.log(`${c} x ${numero} = ${c * numero}`);
       }
    }; */

const tablaDeMultiplicar = (numero) => {
    for (let c = 0; c <= 10; c++) {
        console.log(`${c} x ${numero} = ${c * numero}`);
    }
};

tablaDeMultiplicar(17);