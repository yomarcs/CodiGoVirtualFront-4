//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video 22 ------------->
//<-------------- date ---------------->
//<--==============================================================================-->
// >> date -> es la CLASE o tipo de dato que nos ayudará a trabajar con fechas.
// >> fecha.getFullYear() -> Retorna el año de un objeto Date.
// >> fecha.getMonth() -> Retorna el número de mes que corresponda en el calenadrio,
//                        donde 0 es ENERO.
// >> fecha.getDate() -> Retorna el número del día del mes.
// >> fecha.getDay() -> Retorna el numero de dia de la semana donde 0 es el domingo.
// >> numero.toFixed(cantidad_de_decimales) -> Retorna el número redondeado a una 
//                                             cantidad_de_decimales pasada como parametro.
// >> new Date(millisegundos) -> (millisegundos desde UNIX (1 enero 1970))
//                            -> Inicializar una fecha en formato UNIX
//===================================================================================

let hoy = new Date();
console.log(hoy);

// >> fecha.getFullYear() -> Retorna el año de un objeto Date 
let anio = hoy.getFullYear();
console.log(anio);

// fecha.getMonth() -> Retorna el número de mes que corresponda en el calenadrio,
//                     donde 0 es ENERO.
let mes = hoy.getMonth();
console.log(mes);

// fecha.getDate() -> Retorna el número del día del mes.
let diaMes = hoy.getDate();
console.log(diaMes);

// fecha.getDay() -> Retorna el numero de dia de la semana donde 0 es el domingo.
let diaSemana = hoy.getDay();
console.log(diaSemana);

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();
let milisegundos = hoy.getMilliseconds();
console.log(`horas actual = ${horas}`);
console.log(`minutos actual = ${minutos}`);
console.log(`segundos actual = ${segundos}`);
console.log(`milisegundos actual = ${milisegundos}`);

// ¿Cómo inicializo un objeto date con una fecha distinta?
let halloween2022 = new Date(2022, 9, 31);
console.log(halloween2022);

let halloweenMenosHoy = halloween2022 - hoy;
console.log(halloweenMenosHoy);

let diasParaHalloween = halloweenMenosHoy / 1000 / 60 / 60 / 24;

// numero.toFixed(cantidad_de_decimales) -> Retorna el número redondeado a una 
//                                          cantidad_de_decimales pasada como parametro.
console.log(`Dias para Halloween: ${diasParaHalloween.toFixed(2)}`);

// Fecha en UNIX >> Es una fecha que nos muestra cuantos segundos han transcurrido desde 
// el 1 de enero de 1970, siendo un standard universal
// Inicializar una fecha en formato UNIX
// new Date(millisegundos) (millisegundos desde UNIX (1 enero 1970))
let fechaPronostico = new Date(1601154000 * 1000);
console.log(fechaPronostico);