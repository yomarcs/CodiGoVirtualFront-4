/**
 * Determinar cuánto pagará finalmente una persona por un artículo equis, considerando que tiene un descuento de 20%, y debe pagar 15% de IVA (debe mostrar el precio con descuento y el precio final).
 */

let descuento = 0.2;
let IGV = 0.15;
let precioArticulo = +prompt("Tienda por departamento - Happy Moda.\nIngresa precio de artículo:");
let precioDescuento = precioArticulo - (precioArticulo * descuento);
let precioIGV = precioDescuento + (precioDescuento * IGV);
alert(`Tienda por departamento - Happy Moda.\nPrecio artículo: S/. ${precioArticulo} soles.\nPrecio con descuento 20%: S/. ${precioDescuento} soles.\nPrecio final (+IGV): S/. ${precioIGV} soles.`);