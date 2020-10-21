//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video. 33 ------------>
//<-- asincronia - promesas - fetch --->
//<--================================-->

const url = "https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1";

fetch(url, {
    method: "GET",
    // headers: {},
    // body: "algo???"
}).then((response) => { response.json().then((data) => { console.log(data); }) });

// Ejemplo con el verbo POST

const urlPost = "https://reqres.in/api/users";
fetch(urlPost, {
    method: "POST",
    body: JSON.stringify({ name: "Yomar", job: "CEO" }),
    headers: {
        "Content-Type": "application/json",
    }
}).then((response) => { response.json().then((data) => { console.log(data); }) });