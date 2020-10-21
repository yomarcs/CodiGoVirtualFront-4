//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video. 33 ------------>
//<-- asincronia - promesas - fetch --->
//<--================================-->

const buscarPorDniProblema = (dni) => {
    let respuesta = {};

    setTimeout(() => {
        respuesta = {
            nombre: "Yomar Cerdán Sulca",
            fechaNac: "12-09-1984",
        };
    }, 2000);
    return respuesta;
};
// la variable resultado siempre será un objeto vacío {}, dado que la
// función buscarPorDniProblema, espera 2 segundos en settear dicha variable.
// Pero por asincronía, el retorno de la variable respuesta, es inmediato.
let resultado = buscarPorDniProblema("47548520");
console.log(resultado);

//==========================================================================
// Posible solución a la asincronía.
// Enviar un callback para recibir en él, el resultado de la búsqueda.
const buscarPorDni = (dni, callback) => {
    let respuesta = {};

    setTimeout(() => {
        respuesta = {
            nombre: "Yomar Cerdán Sulca",
            fechaNac: "12-09-1984",
        };
        callback(respuesta);
    }, 2000);
};

buscarPorDni("47548520", (res) => {
    console.log(res);
});