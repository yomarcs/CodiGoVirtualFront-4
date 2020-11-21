import { URL_BACKEND } from "../environments.js";

export const postTipo = (objTipo) => {
    return fetch(`${URL_BACKEND}/tipo`, {
        method: "POST",
        body: JSON.stringify(objTipo),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const putTipo = (objTipo) => {
    let objTipoNuevo = {
        tipo_nombre: objTipo.tipo_nombre,
    };

    return fetch(`${URL_BACKEND}/tipo/${objTipo.tipo_id}`, {
        method: "PUT",
        body: JSON.stringify(objTipoNuevo),
        headers: {
            "Content-type": "Application/json",
        },
    });
};

export const deleteTipoById = (tipo_id) => {
    return fetch(`${URL_BACKEND}/tipo/${tipo_id}`, {
        method: "DELETE",
    });
};

export const getTipos = () => {
    return fetch(`${URL_BACKEND}/tipo`);
};