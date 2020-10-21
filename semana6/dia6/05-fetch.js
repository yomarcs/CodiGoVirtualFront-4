//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video. 33 ------------>
//<-- asincronia - promesas - fetch --->
//<--================================-->
// >> fetch
//    -> Es una funcion que consume datos de un endpoint 
//       que es pasado como parametro.
//    -> La funcion fetch, retorna una promesa cuando el
//       resultado este lista para mostrar.

const promesaFetch = fetch("https://reqres.in/api/users");
promesaFetch.then((respuesta) => {
    respuesta.json().then((data) => {
        console.log(data);
    });
});