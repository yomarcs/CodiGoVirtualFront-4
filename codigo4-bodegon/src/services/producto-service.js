import { URL_BACKEND } from "../environments.js";

export const postProducto = (objProducto) => {
    return fetch(`${URL_BACKEND}/producto`, {
        method: "POST",
        body: JSON.stringify(objProducto),
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const putProducto = (objProducto) => {
    let objProductoNuevo = {
        producto_nombre: objProducto.producto_nombre,
    };

    return fetch(`${URL_BACKEND}/producto/${objProducto.producto_id}`, {
        method: "PUT",
        body: JSON.stringify(objProductoNuevo),
        headers: {
            "Content-type": "Application/json",
        },
    });
};

export const deleteProductoById = (producto_id) => {
    return fetch(`${URL_BACKEND}/producto/${producto_id}`, {
        method: "DELETE",
    });
};

// export const getProductos = () => {
//     return fetch(`${URL_BACKEND}/producto`);
// };
