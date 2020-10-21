//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<------------- Video. 33 ------------>
//<-- asincronia - promesas - fetch --->
//<--================================-->

const buscarPorDni = (dni) => {

    let miPromesa = new Promise((resolve, reject) => {

        setTimeout(() => {
            let persona = {
                nombre: "Yomar",
                apellido: "Cerdán"
            }
            resolve(persona);
        }, 3000);
    });

    return miPromesa;

};

let resultado = buscarPorDni("42731171");
resultado.then((res) => { console.log(resultado); }).catch((error) => { console.log(error); });