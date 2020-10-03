// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!---------- FrontEnd - JavaScript ------------>
// <!-- ------------------------------------ -->
// <!-- Video 18 - Estructuras Condicionales - Arreglos-->
//=============================================================================
// >> for (contador; condicion; incremento)
// >> debugger -> Nos lleva a la pestaña Sources de la ventana de comandos del navegador 
//                y nos permite ver el flujo iteración por iteración.
//             -> Damos click en watch que esta a lado derecho y escribimos la variable 
//                prouctoTotal presionamos enter luego escribimos la varible contador c y le 
//                damos enter luego ponemos play y veremos como el contador aumenta de
//                1 en 1 con cada iteracion. que podremos ver si regresamos a consola.
//=============================================================================
// >> Ejercicio: Hacer un algoritmo para calcular el factorial de un número
//               ¿Cómo es?
//               Ejm: Factorial de 5 = 5 x 4 x 3 x 2 x 1 = 120
//               Ejm: Factorial de 4 = 4 x 3 x 2 x 1 = 24


let productoTotal = 1;
const nro = 8;

for (let c = nro; c > 0; c--) {
    productoTotal = productoTotal * c;
    //    debugger;
}

console.log(`Rpta ${productoTotal}`);