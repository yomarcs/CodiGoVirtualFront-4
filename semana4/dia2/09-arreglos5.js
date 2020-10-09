// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------- Video 18 - Arreglos ------>
//=============================================================================
// >> arreglo.push(elemento) -> agrega un elemento al final de los elementos 
//                              (ultima posición) de un arreglo
//=============================================================================
// Ejercicio: Llenar un arreglo con N numeros ingresados por el usuario

const n = 5;
let numeros = [];

for (let c = 0; c < n; c++) {
    // Código para ingresar números en cada iteracion sin utilizar push.
    // numeros[c] = +prompt("Ingrese número"); 
    let ingreso = +prompt("Ingrese un número");
    numeros.push(ingreso);
}
console.log(numeros);