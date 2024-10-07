//<----- Desarrollo Web FullStack ----->
//<--------- CodiGo - Tecsup ---------->
//<------ FrontEnd - JavaScript ------->
//<------------------------------------>
//<-------- Video 32 - 01:35 ---------->
//<---------- destructuración --------->
//<--==========================================-->
// >> Destructuración de Arreglos
//    Una manera directa de obtener una copia y acceso a las
//    posiciones y elementos de los arreglos
//<--==========================================-->

let nombres = ["Jorgito", "Carmencita", "Pepito", "Carlita", "Luisito"];
// Aqui solo tendriamos acceso a los elementos que tienen nombre
let [primero, segundo, , , ultimo] = nombres;
console.log(primero);
console.log(segundo);
console.log(ultimo);

let familia = ["Reynaldo", "Elsa", "Elizabeth", "Orlando" ,"Kevin", "Gabriel", "Fabian", "Yomar"];
let[papa, mama, hermana, hermano, wachiturro, hijo, hijito, yo] = familia;
console.log("Mi hijito " + hijito);
console.log("Mi gordita bella " + mama);

// Ejemplo
/**
 * Función que retorna un arreglo de dos elementos [lat,lng]
 * dado el nombre de una ciudad a buscar
 * @param {*} ciudad
 */
const getCoordsByCiudad = (ciudad) => {
  // OJO es una función FAKE!!!
  console.log(`buscando...... ${ciudad}`);
  return [-16.4141, -70.43516];
};

let [latitud, longitud] = getCoordsByCiudad("Puno");
console.log(latitud);
console.log(longitud);

// el operador rest(...), devuelve un arreglo de todos los
// elementos de un arreglo
// En el ejemplo, será un arreglo de todos los elementos
// menos el primer elemento

// OJO el operador rest(...) sólo puede ser el último elemento
// destructurador
let [nombre1, ...resto] = nombres;

console.log(nombre1);
console.log(resto);
