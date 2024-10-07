//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<----- Video 21 - Objeto Covid ------>
//===================================================================================
// >> Ejercicio.
//    Función para recibir el nombre de un país introducido por el usario y mostrar:
//    -> total de casos
//    -> total de recuperados
//    -> total de fallecidos 😥

const mostrarDataPorPais = (pais) => {
    for (let c = 0; c < covid.length; c++) {
        if (covid[c].country === pais) {
            // console.log(covid[c]);
            let encontrado = {
                nombrePais: covid[c].country,
                totalCasos: covid[c].cases,
                totalRecuperados: covid[c].recovered,
                totalFallecidos: covid[c].deaths,
            };
            console.log(encontrado);
            return;
        }
    }
};
mostrarDataPorPais("Brazil");

// la misma función de arriba, con find()
// find devuelve el "valor" del primer elemento encontrado
const mostrarDataPorPaisV2 = (pais) => {
    const paisEncontrado = covid.find((estadistica) => {
        if (estadistica.country === pais) {
            return estadistica;
        }
    });
    let encontrado = {
        nombrePais: paisEncontrado.country,
        totalCasos: paisEncontrado.cases,
        totalRecuperados: paisEncontrado.recovered,
        totalFallecidos: paisEncontrado.deaths,
    };

    console.log(encontrado);
};
mostrarDataPorPaisV2("Peru");

// Mi solucion con find
// find devuelve el "valor" del primer elemento encontrado
const dataByCountry = (id) =>{
    let DataPais = covid.find(data => data.country == id);
    
    const objDataPais = {
        pais: DataPais.country,
        totalCasos: DataPais.cases,
        totalRecuperados: DataPais.recovered,
        totalFallecidos: DataPais.deaths
    }
    console.log(objDataPais);
    return objDataPais;
}
dataByCountry("Peru");

// Mi solucion con filter
// filter devuelve un array, asi sea de con un solo elemento
const dataByCountry2 = (id) =>{
    let DataPais = covid.filter(data => data.country == id);
    
    const objDataPais = {
        pais: DataPais[0].country,
        totalCasos: DataPais[0].cases,
        totalRecuperados: DataPais[0].recovered,
        totalFallecidos: DataPais[0].deaths
    }
    console.log(objDataPais);
    return objDataPais;
}
dataByCountry2("Peru");