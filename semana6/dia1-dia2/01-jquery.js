// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!-------- Video 28 - jquery ------->
//=======================================================================
// >> jquery -> Libreia de Js para manipular el DOM de una
//              manera mas facil y corta.
//           -> Seleciona 1 o mas elementos del DOM.
// >> elemento.text() -> GETTER y SETTER del innerTEXT de un elemento
// >> elemento.html() -> GETTER y SETTER del innerHTML de un elemento.
// >> Selector multiple -> JQuery puede seleccionar varios elementos
//                         de acuerdo a la regla del selector.
// >> elementoJQuery.click() -> Los eventos son similares a Js puro, sin
//                              embargo JQuery intenta reducir el código
//                              a la hora de settear los eventos.
// >> elemento.addClass -> Agrega una clase al/a elementos seleccionados.
//=======================================================================

const title = $("#title");
console.log(title);

// >> elemento.text() -> GETTER y SETTER del innerTEXT de un elemento
console.log(title.text());
title.text("Nuevo texto");

// >> elemento.html() -> GETTER y SETTER del innerHTML de un elemento.
console.log($("#nav-lista").html());
$("nav-lista").html("<li><a href='#'>Único Link</a></li>");

// >> Selector multiple -> JQuery puede seleccionar varios elementos
//                         de acuerdo a la regla del selector.
$(".parrafo").html("Nuevo texto del párrafo");
// >> Con Js puro seria
// const parrafos = document.getElementById(".parrafo");
// parrafos.forEach((p) => {
//     p.innerHTML = "Nuevo texto del párrafo";
// });

// >> elementoJQuery.click() -> Los eventos son similares a Js puro, sin
//                              embargo JQuery intenta reducir el código
//                              a la hora de settear los eventos.
$("#btnClick").click((e) => {
    console.log(e);
    console.log("click en el btn click! =)");
});

// >> elemento.addClass -> Agrega una clase al/a elementos seleccionados.
$("#btnTextoRojo").click((e) => {
    $(".parrafo").addClass("texto-rojo");
});

$("#btnCssTitle").click((e) => {
    // elemento.css("propiedad","valor);
    $("#title").css("font-family", "Helvetica").css("color", "red");
});

$("#formulario").submit((e) => {
    e.preventDefault();
    // Obtener el value de un input
    console.log($("#inputEmail").val());
});