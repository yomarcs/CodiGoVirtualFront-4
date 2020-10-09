// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 19 ----------->
// <!----- Funciones - ejercicios ----->
//====================================//
// Funciones flecha
// Es una funcion anonima sólo que está
// escrito en sintaxis moderna de Java
// Script, a la cual se le reemplazo la
// palabra clave function por una flecha
// ( => ).
//====================================//

const sumar = (a, b) => {
    return a + b;
};

// Ejercicio:
// Dada la función "sumar", sumar 4
// números e imprimir su resultado sin
// usar el signo "+" -> 89,5,12,14

console.log(sumar(sumar(89, 5), sumar(12, 14)));