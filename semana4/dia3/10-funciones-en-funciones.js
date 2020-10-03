// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!---------- FrontEnd - JavaScript ------------>
// <!-- ------------------------------------ -->
// <!-- Video 19 - Funciones en funciones -->
//===================================================================================

const areaCirculo = (r) => {
    const PI = 3.1416;

    const cuadrado = (n) => {
        return n * n;
    };

    return PI * cuadrado(r);
};

console.log(areaCirculo(15));

/*
function porConsola(numero1,numero2){
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicación: " + (numero1 * numero2));
    console.log("División: " + (numero1 / numero2));
    console.log("===========================");
}

function porPantalla(numero1,numero2){
    document.write("Suma: " + (numero1 + numero2) + "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicación: " + (numero1 * numero2) + "<br/>");
    document.write("División: " + (numero1 / numero2) + "<br/>");
    document.write("===========================");
}

function calculadora(numero1, numero2, mostrar = false){
    
  if(mostrar == false)
      porConsola(numero1,numero2);
    
  else 
      porPantalla(numero1,numero2);
}

calculadora(2,3);
calculadora(2,3,true);
*/