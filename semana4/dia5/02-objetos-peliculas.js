//<--================================-->
//<--------- CodiGo - Tecsup ---------->
//<----- Desarrollo Web FullStack ----->
//<------ FrontEnd - JavaScript ------->
//<----Video 21 - Objeto Película ----->
//<--=============================================================-->
// >> Ejercicio.
//    Función para crear un segundo arreglo de peliculas que contenga
//    sólamente el título, la fecha de lanzamiento y la sinopsis. Al
//    final, imprimir el arreglo.

const peliculasResumen = () => {
    const resumenes = peliculas.map((pelicula) => {
        const objetoTemporal = {
            titulo: pelicula.title,
            estreno: pelicula.release_date,
            sinopsis: pelicula.overview
        };
        return objetoTemporal;
    });
    return resumenes;
    console.log(resumenes);
};
peliculasResumen();

//====================================================================
// >> Ejercicio.
//    Función para filtrar y mostrar en un nuevo arreglo todas las
//    peliculas en idioma español (castellano).
// >> idionas : "es" - "en" - "ko" - "zh" -"hi" - "fr" - "ja"

peliculasLatinas = (lang) => {
    const peliFiltrada = peliculas.filter((peli) => {
        if (peli.original_language === lang)
            return peli;
    });
    console.log(peliFiltrada);
};
peliculasLatinas("es");

// Mi solución
// const searchMoviesByLang = (lang) => {
//     const MoviesByLang = peliculas.filter(peli => peli.original_language == lang);
//     console.log(MoviesByLang);
//     return MoviesByLang;
// }
// searchMoviesByLang("fr");

// ===================================================================
// ===================================================================
// >> Ejercicio. 
//    Función que retorne el nombre del género dado el id del genero
// >> generos: acción(28), aventura(12), terror(27), animación(16)
const searchGenreById = (id) => {
    // arreglo.find(()=>{})
    // la función find, retorna el primer elemento que coincida con la condicion o el patrón de
    // búsqueda (hablamos del if), * Si hubiera más de una coincidencia, de todas formas
    // la función find, sólo retorna la primera coincidencia
    // Si no existen coincidencias, se retorna "undefined"
    const generoEncontrado = generos.find((genero) => {
        if (genero.id === id) {
            return genero;
        }
    });
    // si el genero encontrado existe, será diferente de undefined
    if (generoEncontrado) {
        return generoEncontrado.name;
    } else {
        return null;
    }
};
console.log(searchGenreById(12));

// Mi Solucion
// const searchNameByIdGenre = (id) => {
//     let genreFound = generos.find((genre) => {
//         if(genre.id == id)
//             return genre;
//     }); 
//     // console.log(genreFound.name);
//     if(genreFound) 
//     return genreFound.name;
//     return null
// }
// console.log(searchNameByIdGenre(16));

// ==================================================================
// ==================================================================
// >> Ejercicicio: Metodo para buscar todas las peliculas segun un genero
// >> generos: acción(28), aventura(12), terror(27), animación(16)

const searchMoviesByIdGenre = (id) => {
    const MoviesFilterByGenre = [];
    peliculas.forEach((pelicula) => {
        let result = pelicula.genre_ids.some((peli) => peli == id); 
        if(result)
            MoviesFilterByGenre.push(pelicula);
    })
    console.log(MoviesFilterByGenre);
    return MoviesFilterByGenre
}
searchMoviesByIdGenre(10402);

// ====================================================================
// ===================================================================
// >> Ejercicio.
//    Función que imprime un nuevo arreglo de peliculas, donde cada pelicula tendrá
//    {
//    titulo:""
//    sinopsis:""
//    estreno:""
//    generos:["","",""]
//    }
//    HINT: usar la función searchGenreById();

const resumenPeliculasConGeneros = () => {
    const peliculasResumen = peliculas.map((peli) => {
        // crear un arreglo de generos de acuerdo
        // a la pelicula en la que me encuentre iterando
        const generosStrings = peli.genre_ids.map((idDelGenero) => {
            let nombre = searchGenreById(idDelGenero);
            return nombre;
        });
        let objPeliResumen = {
            titulo: peli.title,
            sinopsis: peli.overview,
            estreno: peli.release_date,
            generos: generosStrings,
        };
        return objPeliResumen;
    });
    console.log(peliculasResumen);
};
resumenPeliculasConGeneros();

// Mi Solución
// const resumenMoviesWithNameOfGenre = () => {
//     const Resumenes = peliculas.map((pelicula) => {
//         const generosString = pelicula.genre_ids.map( genre => searchNameByIdGenre(genre));
//         objTemporal = {
//             titulo: pelicula.title,
//             sinopsis: pelicula.overview,
//             estreno: pelicula.release_date,
//             generos : generosString
//         }
//         return objTemporal;
//     })
//     console.log(Resumenes);
//     return Resumenes;
// }
// resumenMoviesWithNameOfGenre();
