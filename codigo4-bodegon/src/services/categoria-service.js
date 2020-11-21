import { URL_BACKEND } from "../environments.js";

export const postCategoria = (objCategoria) => {
    return fetch(`${URL_BACKEND}/categoria`, {
        method: "POST",
        body: JSON.stringify(objCategoria),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const putCategoria = (objCategoria) => {
    let objCategoriaNuevo = {
        categoria_nombre: objCategoria.categoria_nombre,
    };

    return fetch(`${URL_BACKEND}/categoria/${objCategoria.categoria_id}`, {
        method: "PUT",
        body: JSON.stringify(objCategoriaNuevo),
        headers: {
            "Content-type": "Application/json",
        },
    });
};

export const deleteCategoriaById = (categoria_id) => {
    return fetch(`${URL_BACKEND}/categoria/${categoria_id}`, {
        method: "DELETE",
    });
};

export const getCategorias = () => {
    return fetch(`${URL_BACKEND}/categoria`);
};