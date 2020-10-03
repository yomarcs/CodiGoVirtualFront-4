// <!--- CodiGo Tecsup - Desarrolo Web FullStack -->
// <!----------- FrontEnd - JavaScript ------------>
// <!-- ---------------------------------------- -->
// <!--------------- Video 23 --------------------->
//========================================================================================================================
// >> DOM -> Document Object Model -> Documento de modelo de objeto
// >> window.document -> document 
//                    -> Atrapar elementos del DOM con document, capturarlos en una variable.                               
//                    -> Podemos seleccionar los diferentes elementos de una pagina y manipularlos a nuestro antojo.
// >> getElementById("id") -> retorna una referencia al elemento del dom con el id proporcionado
//                         -> Nos permite buscar los elementos de un html mediante un identificador y poder modificar su contenido.
//                         -> Consigue los elementos por su identificador "Id".
//                         -> imprime por consola todo el elemento(etiquetas y su contenido).
// >> getElementsByClassName("clase") -> Funciona igual que el getElementByTagName pero para clases.
//                                    -> retorna un arreglo de elementos que en el DOM, tengan el mismo nombre de clase.
// >> querySelector("selector_tipo_css") -> Devuelve el primer o único elemento que coincida con el selector
// >>                            ("#id") -> cumple lo misma funcion ue getElementById.
//                            (".clase") -> sirve para seleccionar un elemento de clase.
// >> querySelectorAll("selector_tipo_css") -> Devuelve todos los elementos que coincidan con el selector
//                                          -> https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
// >> TODOS LOS ELEMENTOS RETORNADOS POR LOS DISTINTOS SELECTORES son del tipo "ELEMENT"
// >> innerHTML -> imprime por consola solo el contenido del elemento.
//              -> Podemos mofificar el contenido del texto.
// >> getElementsbyTagName -> Se Puede conseguir todos los elemento con etiqueta especificada como parámetro.
//                         -> nos imprime un array HTML Collection con los con todos los "div" que hay.
// >> append -> añade despues
// >> prepend -> añade antes
// >> createElement -> creamos elementos(etiquetas) desde Js.
// >> createTextNode -> Crea un nuevo nodo de texto.
//=======================================================================================================================

// >> getElementById("id") -> retorna una referencia al elemento del dom con el id proporcionado
//                         -> imprime por consola todo el elemento(etiquetas y su contenido).             
const header = document.getElementById("header");
console.log(header);

// >> getElementsByClassName("clase") -> retorna un arreglo de elementos que en el DOM, tengan el mismo nombre de clase.                                  
const cajas = document.getElementsByClassName("caja");
console.log(cajas);

console.log(cajas[0]);
// cajas.forEach((elemento) => { console.log(elemento);});
// El código anterior, generará un error porque no es un arreglo nativo por ende, no tiene todas sus funciones.
// TIP ->  ¿Cómo convertir un HTMLCollection o cualquier otra estructura que tenga la forma de un arreglo a un arreglo nativo?
const cajasArray = Array.from(cajas);
console.log(cajasArray);

// >> querySelector("selector_tipo_css") -> Devuelve el primer o único elemento que coincida con el selector
// >>                            ("#id") -> cumple lo misma funcion ue getElementById.
//                            (".clase") -> sirve para seleccionar un elemento de clase.
// >> querySelectorAll("selector_tipo_css") -> Devuelve todos los elementos que coincidan con el selector
//                                          -> https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
const main = document.querySelector("#main");
console.log(main);

// TODOS LOS ELEMENTOS RETORNADOS POR LOS DISTINTOS SELECTORES son del tipo "ELEMENT"