/**
 * Se requiere determinar la hipotenusa de un triángulo rectángulo. Recuerde que por Pitágoras se tiene que: C2 = A2 + B2.
 */

let A = +prompt("Hipotenusa.\nIngresa valor de cateto A: ");
let B = +prompt("Hipotenusa.\nIngresa valor de cateto B: ");
let C = Math.sqrt(A ** 2 + B ** 2);
alert(`Hipotenusa.\nValor hipotenusa: ${C}`);