/**
 * Se desea calcular la potencia eléctrica de circuito. Considere que: P = V*I y V = R*I.
 * R = 4Ω
 * I = ?
 */

let resistencia = 4;
let intensidad = +prompt("Potencia eléctrica\nIngrese intensidad de corriente (I): ");
// V = R*I => V = 4I
// P = V*I => P = 4I * I = 4I^2
let potencia = 4 * (intensidad ** 2);
alert(`Potencia eléctrica\nPotencia Eléctrica = ${potencia} watts`);