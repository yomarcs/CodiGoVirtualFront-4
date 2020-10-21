//<!---- Desarrollo Web FullStack ----->
//<!--------- CodiGo - Tecsup --------->
//<!------ FrontEnd - JavaScrit ------->
//<!----------------------------------->
//<!------------- Video 24 ------------>
//<!----------- createElement --------->
//<!--==============================--->
// >> Creacion e inserción de elementos en el DOM 
//    ''''''''''''''''''''''''''''''''''''''''''
// >> document.createElement("nombre_de_la_etiqueta"); 
//    -> retorna la referencia a un elemento que aún no está presente
//       en el DOM, pero que será agregado en lo posterior.
//
// >> element.appendChild(elemento)
//    -> Agrega a un elemento creado a un elemento padre si el elemento
//       no existía en el DOM, ahora va a estar como un hijo del element
//=================================================================================================

// >> Creación de elemento.
// >> document.createElement("nombre_de_la_etiqueta"); 
//    -> retorna la referencia a un elemento que aún no está presente
//       en el DOM, pero que será agregado en lo posterior.
const titulo = document.createElement("h1");
titulo.innerText = "Titulo de mi app";

// >> Inserción de elemento creado.
// >> element.appendChild(elemento)
//    -> Agrega a un elemento creado a un elemento padre si el elemento
//       no existía en el DOM, ahora va a estar como un hijo del element
const header = document.getElementById("header");
header.appendChild(titulo);

titulo.innerText = "CodiGo - Bootcamp";