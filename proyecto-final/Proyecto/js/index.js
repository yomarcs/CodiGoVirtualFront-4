// import { URL_BACKEND } from "./environment.js";
const URL_BACKEND = "https://5fab505303a60500167e68be.mockapi.io";

const getCategorias = async () =>{
    const peticion = await fetch(`${URL_BACKEND}/categoria`);
    const data = await peticion.json();
    console.log(data);
    // return data;
}
getCategorias();