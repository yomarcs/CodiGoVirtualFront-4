import { URL_BACKEND } from './environments.js';
import { getCategorias } from "./services/categoria-service.js";
import { getMarcas } from "./services/marca-service.js";
import { deleteProductoById, postProducto, putProducto } from './services/producto-service.js';
import { getTipos } from "./services/tipo-service.js";
const selectCategoria = document.getElementById("selectCategoria");
const selectTipo = document.getElementById("selectTipo");
const selectMarca = document.getElementById("selectMarca");
const tbodyProductos = document.getElementById("tbodyProductos");
const formProducto = document.getElementById("formProducto");
const inputNombre = document.getElementById("inputNombre");
const inputPrecio = document.getElementById("inputPrecio");
const inputPrecioPromocion = document.getElementById("inputPrecioPromocion");
const inputStock = document.getElementById("inputStock");
const textDescripcion = document.getElementById("textDescripcion");
const btnAccion = document.getElementById("btnAccion");
let modo = "crear";
let productos = [];
let productoGlobal = {};

const llenarCategorias = () => {
    getCategorias().then((peticion) => {
        peticion.json().then((categorias) => {
            if (categorias.length > 0) {
                categorias.forEach((categoria) => {
                    let option = document.createElement("option");
                    option.innerText = categoria.categoria_nombre;
                    option.value = categoria.categoria_id;
                    selectCategoria.appendChild(option);
                });
                $("#selectCategoria").select2();
            }
        });
    });
};
llenarCategorias();

const llenarTipos = () => {
    getTipos().then((peticion) => {
        peticion.json().then((tipos) => {
            if (tipos.length > 0) {
                tipos.forEach((tipo) => {
                    let option = document.createElement("option");
                    option.innerText = tipo.tipo_nombre;
                    option.value = tipo.tipo_id;
                    selectTipo.appendChild(option);
                });
                $("#selectTipo").select2();
            }
        });
    });
};
llenarTipos();

const llenarMarcas = () => {
    getMarcas().then((peticion) => {
        peticion.json().then((marcas) => {
            if (marcas.length > 0) {
                marcas.forEach((marca) => {
                    let option = document.createElement("option");
                    option.innerText = marca.marca_nombre;
                    option.value = marca.marca_id;
                    selectMarca.appendChild(option);
                });
                $("#selectMarca").select2();
            }
        });
    });
};
llenarMarcas();

// ===============================================

const dibujarTabla = () => {
    tbodyProductos.innerHTML = "";

    productos.forEach((producto) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${producto.producto_id}</td>
                    <td>${producto.producto_nombre}</td>
                    <td>${selectCategoria.options[producto.producto_categoria].text}</td>
                    <td>${selectTipo.options[producto.producto_tipo].text}</td>
                    <td>${selectMarca.options[producto.producto_marca].text}</td>
                    <td>${producto.producto_stock}</td>
                    <td>${producto.producto_precio}</td>
                    <td>${producto.producto_precioPromocion}</td>
                    <td>${producto.producto_descripcion}</td>`;
        let tdBotones = document.createElement("td");

        let btnEditar = document.createElement("button");
        btnEditar.classList.add("btn", "btn-warning", "mr-2");
        btnEditar.innerText = "Editar";
        btnEditar.onclick = () => {
            modoEditar(producto);
        };

        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.innerText = "Eliminar";
        btnEliminar.onclick = () => {
            eliminar(producto.producto_id);
        };

        tdBotones.appendChild(btnEditar);
        tdBotones.appendChild(btnEliminar);

        tr.appendChild(tdBotones);
        tbodyProductos.appendChild(tr);
    });
};

// ==============================================0

const getProductos = () => {
    fetch(`${URL_BACKEND}/producto`).then((peticion) => {
        peticion.json().then((data) => {
            console.log(data);
            productos = [...data];
            dibujarTabla();
        });
    });
};
getProductos();

// =====================================================

formProducto.onsubmit = (e) => {
    e.preventDefault();
    if (inputNombre.value.trim() === "" 
        || inputPrecio.value.trim() === ""
        || inputPrecioPromocion.value.trim() === ""
        || inputStock.value.trim() === ""
        || textDescripcion.value.trim === ""
        || selectCategoria.value === "0"
        || selectTipo.value === "0"
        || selectMarca.value === "0") {
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
                    let objProducto = {
                        producto_nombre: inputNombre.value.trim(),
                        producto_precio: inputPrecio.value.trim(),
                        producto_precioPromocion: inputPrecioPromocion.value.trim(),
                        producto_stock: inputStock.value.trim(),
                        producto_descripcion: textDescripcion.value.trim(),
                        producto_categoria: selectCategoria.value,
                        producto_tipo: selectTipo.value,
                        producto_marca: selectMarca.value
                    };
                    postProducto(objProducto).then((peticion) => {
                        peticion.json().then((data) => {
                            if (data.producto_id) {
                                // Lanzar un sweealert de exito.
                                Swal.fire({
                                    title: "Hecho",
                                    text: "Registro creado exitosamente",
                                    timer: 1500,
                                    icon: "success"
                                })
                                getProductos();
                                formProducto.reset();
                                // selectCategoria.options[0].text;
                                // selectTipo.options[0].text;
                                // selectMarca = selectMarca.options[0].text;
                                
                            }
                        });
                    });
                }
            })
            // TO DO: Validar el formulario

    } else {
        // entramos al modo editar
        let objProducto = {
            producto_id: productoGlobal.producto_id,
            producto_nombre: inputNombre.value,
            
        };
        putProducto(objProducto).then((peticion) => {
            peticion.json().then((data) => {
                getProductos();
                modoCrear();
            });
        });
    }
};


const modoCrear = () => {
    productoGlobal = {};
    modo = "crear";
    btnAccion.innerText = "Crear Producto";
    formProducto.reset();
};

const modoEditar = (producto) => {
    productoGlobal = {...producto };
    modo = "editar";
    btnAccion.innerText = "Guardar Cambios";
    inputNombre.value = productoGlobal.producto_nombre;
    inputPrecio.value = productoGlobal.producto_precio;
    inputPrecioPromocion.value = productoGlobal.producto_precioPromocion;
    inputStock.value = productoGlobal.producto_stock;
    textDescripcion.value = productoGlobal.producto_descripcion;
    // selectCategoria.value[productoGlobal.producto_categoria;
    // selectTipo.value[productoGlobal.producto_tipo];
    // selectMarca.value =productoGlobal.producto_marca;
    // selectMarca.value[productoGlobal.producto_marca]
};

const eliminar = (producto_id) => {

    Swal.fire({
        title: "¿Eliminar?",
        text: "¿Seguro que desea eliminar el registro?",
        icon: "error",
        showCancelButton: true,
    }).then((rpta) => {
        if (rpta.isConfirmed) {
            deleteProductoById(producto_id).then((peticion) => {
                peticion.json().then((data) => {
                    if (data.producto_id) {
                        Swal.fire({
                            title: "Exito!",
                            text: "Registro eliminado correctamente",
                            icon: "success",
                            timer: 1500,
                        });
                        getProductos();
                        btnAccion.innerText = "Crear Producto";
                        formProducto.reset();
                    }
                });
            });
        }
    });


};
