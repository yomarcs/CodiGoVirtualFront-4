//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video. 33 ------------>
//<-- asincronia - promesas - fetch --->
//<--================================-->
// >> promesas
//    Es un objeto que sirve para esperar que a termine un
//    proceso asincrono, y depende de la respuesta del 
//    proceso asincrono de como se resuelva la promesa.

// Creando una promesa
let miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = 27;
        // yo necesito retornar el valor de x
        // resolve(x);
        if (x % 2 === 0) {
            resolve(`${x} es par`);
        } else {
            reject("Error, no es par");
        }
        // resolve -> sireva para transmitir un valor a traves de la promesa,
        // luego de que un proceso asincrono se haya ejecutado
        // reject("Ocurrio un error");
    }, 3000);
});

// Ejecutando una promesa
// then se ejecuta cuando la promesa invoca a la funcion
// resolve y en un calback recibe la respuesta.
miPromesa.then((respuesta) => {
    console.log(respuesta);
}).catch((error) => { console.log(error); });