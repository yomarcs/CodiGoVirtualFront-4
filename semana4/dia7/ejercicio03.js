//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<-------------- Repaso -------------->
//<--================================-->
// >> Ejercicio 3
//    -> Validar si el usuario es mayor
//       de edad si es mayor de edad ponerle 
//       dentro del campo "age" como mayor
//       de edad y sino menor de edad

message("Ejercicio 3 :", "blue");

function getAdultsUser() {
    let usuarios = users.map((user) => {
        if (user.age >= 18) {
            user.age = "mayor de edad";
        } else {
            user.age = " menor de edad"
        }
        return user;
    });
    console.log(usuarios);
}

function getAdultsUser2() {
    let user = users.filter(user => {
        return user.age >= 18
    }).map((user) => {
        user.age = "adulto"
        return user;
    })
    console.log(user)
}
getAdultsUser();