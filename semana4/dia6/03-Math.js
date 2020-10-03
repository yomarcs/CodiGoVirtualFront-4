// <!--- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!----------- FrontEnd - JavaScript ------------>
// <!-- ---------------------------------------- -->
// <!----------- Video 22 - Math ------------------>
//===================================================================================
// >> Math -> Nos ayuda a trabajar con funciones matemáticas
//         -> Para usar la clase math y sus métodos no se necesita crear un objeto.
// >> Math.random() -> Retorna un número aleatorio entre 0 y 1.
// >> Math.random() * (max - min) + min -> Retornar un número aleatorio entre min y max.
// >> Math.floor(numero) -> obtener la parte entera proxima inferior de un número decimal.
// >> Math.ceil(numero_decimal) -> obtener la parte entera proxima superior de un número decimal.
// >> Math.round(numero_decimal) -> Redondear un número de forma clásica.
//===================================================================================

// >> Math.random() -> Retorna un número aleatorio entre 0 y 1
let aleatorio = Math.random();
console.log(aleatorio);

// >> Math.random() * (max - min) + min -> Retornar un número aleatorio entre min y max.
let aleatorioEntre50y100 = Math.random() * (100 - 50) + 50;
console.log(aleatorioEntre50y100);

// >> Math.floor(numero) -> obtener la parte entera proxima inferior de un número decimal
console.log(Math.floor(5.98));

// >> Math.ceil(numero_decimal) -> obtener la parte entera proxima superior de un número decimal.
console.log(Math.ceil(52.01));

// >> Math.round(numero_decimal) -> Redondear un número de forma clásica.
console.log(Math.round(52.3));