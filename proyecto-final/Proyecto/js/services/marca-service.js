import { URL_BACKEND } from "../environments.js";

export const postMarca = (objMarca) => {
    return fetch(`${URL_BACKEND}/marca`, {
        method: "POST",
        body: JSON.stringify(objMarca),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const putMarca = (objMarca) => {
    let objMarcaNuevo = {
        marca_nombre: objMarca.marca_nombre,
    };

    return fetch(`${URL_BACKEND}/marca/${objMarca.marca_id}`, {
        method: "PUT",
        body: JSON.stringify(objMarcaNuevo),
        headers: {
            "Content-type": "Application/json",
        },
    });
};

export const deleteMarcaById = (marca_id) => {
    return fetch(`${URL_BACKEND}/marca/${marca_id}`, {
        method: "DELETE",
    });
};

export const getMarcas = () => {
    return fetch(`${URL_BACKEND}/marca`);
};