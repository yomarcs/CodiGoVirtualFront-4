//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video. 33 ------------>
//<-- asincronia - promesas - fetch --->
//<--================================-->

// url de peliculas -> https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1

axios.get("https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1").then((resultado) => { console.log(resultado.data); });