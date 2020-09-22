/**
 * La compañía de luz y sombras (CLS) requiere determinar el pago que debe realizar una persona por el consumo de energía eléctrica, la cual se mide en kilowatts (KW).
 */

//  let tarfifaKw = +prompt("Luz y Sombras S.A.\nIngresa tarifa x KW:");
let tarifaKW = 0.831;
let kW = +prompt("Luz y Sombras S.A.\nIngresa KW consumidos:");
let recibo = tarifaKW * kW;
alert(`Luz y Sombras S.A.\nTotal a pagar: S/. ${recibo} soles`);