//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<-------------- Repaso -------------->
//<--================================-->

message('Ejercicio 6 :')

// Ejercicio -> Sorteo usuario, segun el id del usuario,retornar un usuario sorteado

//random
//id usuario unico y es entero
//LINK : https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random

const userRandom = () => {
    const getRandomArbitrary = (min, max) => {
       return  Math.round(Math.random() * (max - min) + min);
    }
    return users[getRandomArbitrary(0,3)];
 }
 console.log(userRandom());
 
