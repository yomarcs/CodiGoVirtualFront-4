// <!---- Desarrollo Web FullStack ---->
// <!-------- CodiGo - Tecsup --------->
// <!----- FrontEnd - JavaScript ------>
// <!---------------------------------->
// <!------------- Video 20 ----------->
// <!------------ Objetos ------------>
//====================================//
// >> Objetos -> Los objetos se crean a través de la abstracción de los elementos
//               que querramos crear o representar
//            -> Abstraer, significa llevar características de un entorno real a un
//               entorno virtual.

let mascota = {
    nombre: "Kyra",
    raza: "Bull Terrier",
    tipo: "perro",
    edad: 1,
    vacuna: false,
    habilidades: [{
            nombre: "Se hace el muertito",
            nivel: "experto",
        },
        {
            nombre: "Se para en dos patitas",
            nivel: "intermedio",
        },
    ],
    colores: ["negro", "cafe", "blanco"],
    propietario: { 
        nombre: "Jorge Garnica",
        direccion: "Av. Siempreviva ",
    },
};

console.log(mascota);
// mostrando atributos
console.log(`Nombre: ${mascota.nombre}`);
// modificando atributos
mascota.vacuna = true;
console.log(mascota);
// crear nuevos atributos
mascota.comida = "Ricocan";
console.log(mascota);
// imprimir un sub-objeto
console.log("Dirección: " + mascota.propietario.direccion);

// imprimiendo todos los colores de la mascotilla
mascota.colores.forEach((elemento, i) => {
    console.log(`${i + 1} - ${elemento}`);
});

// imprimiendo los nombres de las habilidades
mascota.habilidades.forEach((habilidad, i) => {
    console.log(habilidad.nombre);
});

// const persona= {
//     nombre: "Yomar",
//     apellidos: "Cerdan Sulca",
//     dni: "42731171",
//     edad: 37,
//     movil: 979325543,
//     direccion: "Jr. Rio Pasco 3289 Canto Rey SJL - Mz M Lt 21 1era etapa",
//     nivel: "Univesrsitario",
//     habilidades: [{nombre: "programador",nivel: "junior"},{nombre: "futbol",nivel: "intermedio"}],
//     vacuna: true,
//     color: "blanco",
// }
 
// console.table(persona.habilidades[1].nombre);