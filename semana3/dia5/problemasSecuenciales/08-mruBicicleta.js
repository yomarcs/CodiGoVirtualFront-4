/**
 *  Se requiere determinar el tiempo que tarda una persona en llegar de una ciudad a otra en bicicleta, considerando que lleva una velocidad constante.
 */

let distanciaKm = +prompt("MRU - Bicicleteada.\nIngrese distancia destino (km): ");
let distanciaMt = distanciaKm * 1000;
let velocidadMts = +prompt("MRU - Bicicleada.\nIngrese velocidad del ciclista (m/s): ");
let tiempoSg = distanciaMt / velocidadMts;
let tiempoHrs = (tiempoSg - tiempoSg % 3600) / 3600;
tiempoSg = tiempoSg % 3600;
let tiempoMin = (tiempoSg - tiempoSg % 60) / 60;
tiempoSg = tiempoSg % 60;
alert(`MRU - Bicicleteada.\nTiempo de llegada: ${tiempoHrs} Hrs ${tiempoMin} Min ${tiempoSg} Segundos`);