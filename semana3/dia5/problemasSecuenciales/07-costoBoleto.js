/**
 * La compañía de autobuses “La curva loca” requiere determinar el costo que tendrá el boleto de un viaje sencillo, esto basado en los kilómetros por recorrer y en el costo por kilómetro.
 */

//  let tarifaKm = +prompt("La Curva Loca.\nIngrese tarifa x Km:");
let tarifaKm = 0.11;
let kilometraje = +prompt("La Curva Loca.\nIngrese kilometraje de destino:");
let precioBoleto = tarifaKm * kilometraje;
alert(`La Curva Loca.\nPrecio Boleto: ${precioBoleto} soles.`)