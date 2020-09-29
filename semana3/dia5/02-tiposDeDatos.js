// <!-- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!-- FrontEnd - JavaScript -->
// <!-- ------------------------------------ -->
// <!-- Video 16 - Tipos de datos -->
//===================================================
// >> typeof -> devuelve el tipo de dato de las variables.
// >> String -> convierte cualquier variable a un string
// >> Number -> convierte cualquier variable en numero, ya sea entero(int) o float.
// >> toString -> una variable se comporta como un objeto a nivel interno por lo que tienen metodos
//                y con este metodo podemos convertir variables a string.
// >> parseFloat -> convierte un string, devolviendo un valor de tipo flotante.
//===================================================

let titulo = "Ensayo sobre la ceguera";
let nroPaginas = 185;
let nuevo = true;

let precio = "55";
let descuento = 0.1;

let precioFinal = precio - precio * descuento;

console.log(`Total a pagar ${precioFinal}`);

// ====== Tipos de datos ======

// var numero_entero = 85;
// var cadena_de_texto = "hola que tal";
// var verdadero_o_falso = true;
// var numero_falso = "33.9";

// console.log(verdadero_o_falso);
// console.log(numero_entero+parseFloat(numero_falso));
// console.log(typeof String(numero_entero) + 5);
// console.log(typeof numero_entero.toString() + 5);
// console.log(typeof numero_entero);
// console.log(typeof cadena_de_texto);
// console.log(typeof Number(verdadero_o_falso));
// console.log(typeof numero_falso);