import { URL_BACKEND } from './environments.js';
import { deleteCategoriaById, postCategoria, putCategoria } from './services/categoria-service.js';

const tbodyCAtegorias = document.getElementById("tbody-categorias");
const formCategoria = document.getElementById("formcategorias");
const inputNombre = document.getElementById("inputNombre");
const btnAccion = document.getElementById("btnAccion");

let modo = "crear";
let categorias = [];
let categoriaGlobal = {};

const dibujarTabla = () => {
    tbodyCAtegorias.innerHTML = "";

    categorias.forEach((categoria) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${categoria.categoria_id}</td>
                    <td>${categoria.categoria_nombre}</td>`;
        let tdBotones = document.createElement("td");

        let btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-warning", "mr-2");
        btnEditar.innerText = "Editar";
        btnEditar.onclick = () => {
            modoEditar(categoria);
        };

        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            eliminar(categoria.categoria_id);
        };

        tdBotones.appendChild(btnEditar);
        tdBotones.appendChild(btnEliminar);

        tr.appendChild(tdBotones);
        tbodyCAtegorias.appendChild(tr);
    });
};


const getCategorias = () => {
    fetch(`${URL_BACKEND}/categoria`).then((peticion) => {
        peticion.json().then((data) => {
            console.log(data);
            categorias = [...data];
            dibujarTabla();
        });
    });
};
getCategorias();

formCategorias.onsubmit = (e) => {
    e.preventDefault();
    if (inputNombre.value.trim() === "") {
        Swal.fire({
            title: "Error!",
            text: "Todos los campos deben estar llenos",
            icon: "error",
        });
        return;
    }

    if (modo === "crear") {
        Swal.fire({
                title: "¿Crear?",
                text: "Seguro que deseas crear el registro?",
                icon: "info",
                showCancelButton: true,
            }).then((rpta) => {
                if (rpta.isConfirmed) {
                    //Crear de todos modos 
                    let objCategoria = {
                        categoria_nombre: inputNombre.value.trim(),
                    };
                    postCategoria(objCategoria).then((peticion) => {
                        peticion.json().then((data) => {
                            if (data.categoria_id) {
                                // Lanzar un sweealert de exito.
                                Swal.fire({
                                    title: "Hecho",
                                    text: "Registro creado exitosamente",
                                    timer: 1500,
                                    icon: "success"
                                })
                                getCategorias();
                                inputNombre.value = "";
                            }
                        });
                    });
                }
            })
            // TO DO: Validar el formulario

    } else {
        // entramos al modo editar
        let objCategoria = {
            categoria_id: categoriaGlobal.categoria_id,
            categoria_nombre: inputNombre.value,
        };
        putCategoria(objCategoria).then((peticion) => {
            peticion.json().then((data) => {
                getCategorias();
                modoCrear();
            });
        });
    }
};

const modoCrear = () => {
    categoriaGlobal = {};
    modo = "crear";
    btnAccion.innerText = "Crear Categoria";
    inputNombre.value = "";
};

const modoEditar = (categoria) => {
    categoriaGlobal = {...categoria };
    modo = "editar";
    btnAccion.innerText = "Guardar Cambios";
    inputNombre.value = categoriaGlobal.categoria_nombre;
};

const eliminar = (categoria_id) => {

    Swal.fire({
        title: "¿Eliminar?",
        text: "¿Seguro que desea eliminar el registro?",
        icon: "error",
        showCancelButton: true,
    }).then((rpta) => {
        if (rpta.isConfirmed) {
            deleteCategoriaById(categoria_id).then((peticion) => {
                peticion.json().then((data) => {
                    if (data.categoria_id) {
                        Swal.fire({
                            title: "Exito!",
                            text: "Registro eliminado correctamente",
                            icon: "success",
                            timer: 1500,
                        });
                        getCategorias();
                    }
                });
            });
        }
    });


};

