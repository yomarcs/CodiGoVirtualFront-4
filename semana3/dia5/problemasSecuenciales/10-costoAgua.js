/**
 * La CONAGUA requiere determinar el pago que debe  realizar una persona por el total de metros cúbicos que consume de agua.
 */

//  let tarfifaM3 = +prompt("SINAGUA.\nIngresa tarifa x m3:");
let tarifaM3 = 1.478;
let m3 = +prompt("SINAGUA.\nIngresa m3 consumidos:");
let recibo = tarifaM3 * m3;
alert(`SINAGUA.\nTotal a pagar: S/. ${recibo} soles`);