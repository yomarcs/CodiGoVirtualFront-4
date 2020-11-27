import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AdminProductosForm = () => {

    const [formulario, SetFormulario] = useState({
        urlImagen:"",
        precio : "",
        precioPromocion: "",
        stock: "",
        descripcion: "",
    })

    const submit = (e) => {
        e.preventDefault();
        console.log("Enviando Formulario...");
        console.log(formulario);
        Swal.fire({
            title: "Creada",
            text: "Categoria creada exitosamente",
            icon: "success",
            timer: 2000
        });

        SetFormulario({
            urlImagen:"",
            precio : "",
            precioPromocion: "",
            stock: "",
            descripcion: "",
        })
    }

    const handleChange = (e) => {
        SetFormulario({
            ...formulario,
            [e.target.name]:e.target.value,
        })
    }

    return (
        <section className="row">
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" onSubmit={submit}>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputURL">URL-Imagen:</label>
                                <input type="text" 
                                       className="form-control" 
                                       placeholder="https://miImagen" 
                                       id="inputURL"
                                       name="urlImagen"
                                       value={formulario.urlImagen}
                                       onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputPrecio">Precio:</label>
                                <input type="number" 
                                       className="form-control"
                                       placeholder="0" 
                                       id="inputPrecio"
                                       name="precio"
                                       value={formulario.precio}
                                       onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputPrecioPromocion">Precio Promoción:</label>
                                <input type="number" 
                                       className="form-control" 
                                       placeholder="0" 
                                       id="inputPrecioPromocion"
                                       name="precioPromocion"
                                       value={formulario.precioPromocion}
                                       onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputStock">Stock:</label>
                                <input type="number" 
                                       className="form-control" 
                                       placeholder="0" 
                                       id="inputStock"
                                       name="stock"
                                       value={formulario.stock}
                                       onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="textDescription">Descripción:</label>
                                <textarea id="textDescription" 
                                          cols="35" rows="2"
                                          name="descripcion"
                                          value={formulario.descripcion}
                                          onChange={handleChange}></textarea>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="selectCategoria">Categoria:</label>
                                <select id="selectCategoria" className="form-control">
                                <option value="0" >-- Seleccione --</option>
                              </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="selectTipo">Tipo:</label>
                                <select id="selectTipo" className="form-control">
                                <option value="0" >-- Seleccione --</option>
                              </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label htmlFor="selectMarca">Marca:</label>
                                <select id="selectMarca" className="form-control">
                                <option value="0" >-- Seleccione --</option>
                              </select>
                            </div>
                            
                            <div className="form-group col-12">
                                <button id="btnAccion" className="btn btn-dark">
                                Crear Producto
                              </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminProductosForm
            
