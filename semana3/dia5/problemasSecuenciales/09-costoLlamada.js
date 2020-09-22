/**
 * Se requiere determinar el costo que tendrá realizar una llamada telefónica con base en el tiempo que dura la llamada y en el costo por minuto.
 */

//  let tarfifaMinuto = +prompt("Telefonia Móvil - Choristar.\nIngresa tarifa x minuto:");
let tarifaMinuto = 0.49;
let minutos = +prompt("Telefonia Móvil - Choristar.\nIngresa minutos consumidos:");
let recibo = tarifaMinuto * minutos;
alert(`Telefonia Móvil - Choristar.\nTotal a pagar: S/. ${recibo} soles`);