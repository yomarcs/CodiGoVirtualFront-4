 // <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
 // <!---------- FrontEnd - JavaScript ------------>
 // <!-- ------------------------------------ -->
 // <!-- Video 19 - Funciones con Parametros -->
 //===================================================================================
 // >> Funciones con parametros -> Una vez que creas tu funcion y le asignas parametros
 //                                es obligatorio al hacer la llamada a la funcion
 //                                enviarle las variables o datos (parametros) que le
 //                                asignaste a tu función si no te retornara error.
 // >> Parametros Opcionales -> Son como su nombre lo dice parametros OPCIONALES,una
 //                             vez creada tu funcion con sus parametros fijos, podemos
 //                             agregarle otros parametros inicializados por defecto.
 //===================================================================================
 /**
  * función que retorna el factorial de un número
  * @param {*} numero parametro de entrada al que se le va a calcular
  * el factorial
  */
 function factorial(numero) {
     let rpta = 1;
     for (let c = numero; c > 0; c--) {
         rpta = rpta * c;
     }
     return rpta;
 }

 let resultado = factorial(6);
 console.log(resultado);

 //=======================================================================================
 // >> Parametros Opcionales

 // Creamos un parametro "mostrar" que por defecto esta inicializado con "false"
 function calculadora(numero1, numero2, mostrar = false) {
     // Conjunto de instrucciones a ejecutar

     if (mostrar == false) {
         console.log("Suma: " + (numero1 + numero2));
         console.log("Resta: " + (numero1 - numero2));
         console.log("Multiplicación: " + (numero1 * numero2));
         console.log("División: " + (numero1 / numero2));
         console.log("===========================");
     } else {
         document.write("Suma: " + (numero1 + numero2) + "<br/>");
         document.write("Resta: " + (numero1 - numero2) + "<br/>");
         document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
         document.write("División: " + (numero1 / numero2) + "<br/>");
         document.write("===========================");
     }

 }

 //Invocar a la funcion por consola.