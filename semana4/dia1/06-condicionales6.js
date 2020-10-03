// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!-- FrontEnd - JavaScript -->
// <!-- ------------------------------------ -->
// <!-- Video 17 - Estructuras Condicionales -->
//=============================================================================
// >> Ambito de una variable
//    var -> crea una varibale global.
//    let -> crea una variable local a nivel de un bloque de codigo.
// 
//=============================================================================
/**
 * >> Ejercicio: Crear un algoritmo para verificar
 *               si un año ingresado por el usuario el bisiesto
 */

const num = -48;
let rpta = "";
if (num >= 0) {
    rpta = "Sí es positivo";
} else {
    rpta = "No es positivo";
}

console.log(rpta);

/*
// Probando con var -> crea una varibale global.
var numero = 50;
console.log(numero); // 50

if (true) {
    var numero = 70;
    console.log(numero); //70
}
console.log(numero); //70

// ======================

// Probando con LET -> crea una variable local a nivel de un bloque de codigo.
var texto ="Curso JS - Yomar Cerdan";
console.log(texto);

if(true){
	let texto = "Curso Laravel - Yomar Cerdan";
    console.log(texto);
}

console.log(texto);

// ======================

let numero2 = 50;
console.log(numero2); // 50

if (true) {
    let numero2 = 70;
    console.log(numero2); //70
}
console.log(numero2); //50
*/