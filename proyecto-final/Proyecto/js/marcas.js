import { URL_BACKEND } from './environments.js';
import { deleteMarcaById, postMarca, putMarca } from './services/marca-service.js';

const tbodyMarcas = document.getElementById("tbody-marcas");
const formMarcas = document.getElementById("form-marcas");
const inputNombre = document.getElementById("inputNombre");
const btnAccion = document.getElementById("btnAccion");

let modo = "crear";
let marcas = [];
let marcaGlobal = {};

const dibujarTabla = () => {
    tbodyMarcas.innerHTML = "";

    marcas.forEach((marca) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${marca.marca_id}</td>
                    <td>${marca.marca_nombre}</td>`;
        let tdBotones = document.createElement("td");

        let btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-warning", "mr-2");
        btnEditar.innerText = "Editar";
        btnEditar.onclick = () => {
            modoEditar(marca);
        };

        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            eliminar(marca.marca_id);
        };

        tdBotones.appendChild(btnEditar);
        tdBotones.appendChild(btnEliminar);

        tr.appendChild(tdBotones);
        tbodyMarcas.appendChild(tr);
    });
};


const getMarcas = () => {
    fetch(`${URL_BACKEND}/marca`).then((peticion) => {
        peticion.json().then((data) => {
            console.log(data);
            marcas = [...data];
            dibujarTabla();
        });
    });
};
getMarcas();

formMarcas.onsubmit = (e) => {
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
                    let objMarca = {
                        marca_nombre: inputNombre.value.trim(),
                    };
                    postMarca(objMarca).then((peticion) => {
                        peticion.json().then((data) => {
                            if (data.marca_id) {
                                // Lanzar un sweealert de exito.
                                Swal.fire({
                                    title: "Hecho",
                                    text: "Registro creado exitosamente",
                                    timer: 1500,
                                    icon: "success"
                                })
                                
                                getMarcas();
                                inputNombre.value = "";
                            }
                        });
                    });
                }
            })
            // TO DO: Validar el formulario

    } else {
        // entramos al modo editar
        let objMarca = {
            marca_id: marcaGlobal.marca_id,
            marca_nombre: inputNombre.value,
        };
        putMarca(objMarca).then((peticion) => {
            peticion.json().then((data) => {
                getMarcas();
                modoCrear();
            });
        });
    }
};

const modoCrear = () => {
    marcaGlobal = {};
    modo = "crear";
    btnAccion.innerText = "Crear Marca";
    inputNombre.value = "";
};

const modoEditar = (marca) => {
    marcaGlobal = {...marca };
    modo = "editar";
    btnAccion.innerText = "Guardar Cambios";
    inputNombre.value = marcaGlobal.marca_nombre;
};

const eliminar = (marca_id) => {

    Swal.fire({
        title: "¿Eliminar?",
        text: "¿Seguro que desea eliminar el registro?",
        icon: "error",
        showCancelButton: true,
    }).then((rpta) => {
        if (rpta.isConfirmed) {
            deleteMarcaById(marca_id).then((peticion) => {
                peticion.json().then((data) => {
                    if (data.marca_id) {
                        Swal.fire({
                            title: "Exito!",
                            text: "Registro eliminado correctamente",
                            icon: "success",
                            timer: 1500,
                        });
                        getMarcas();
                    }
                });
            });
        }
    });


};

