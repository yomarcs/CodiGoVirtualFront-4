import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Alert from '../../../components/Alert';

const AdminProductosForm = () => {

    const [formulario, SetFormulario] = useState({
        urlImagen:"",
        precio : "",
        precioPromocion: "",
        stock: "",
        descripcion: "",
        categoria: "0",
        tipo: "0",
        marca: "0"
    })

    const [error, setError] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        if(formulario.urlImagen.trim() === "" ||
           formulario.precio.trim() === "" ||
           formulario.precioPromocion.trim() === "" ||
           formulario.stock.trim() === "" ||
           formulario.descripcion.trim() === "" ||
           formulario.categoria.value === "0" ||
           formulario.tipo.value === "0" ||
           formulario.marca.value === "0"){
          setError(true);
          return;
        }
       
          Swal.fire({
            title: "Creado!",
            text: "Producto creado exitosamente",
            icon: "success",
            timer: 2000
        });

        SetFormulario({
            urlImagen:"",
            precio : "",
            precioPromocion: "",
            stock: "",
            descripcion: "",
            categoria: "0",
            tipo: "0",
            marca: "0"
        })
    
        setError(false);

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
            {error ? <Alert tipo={"danger"} texto={"** Todos los campos deben ser llenados correctamente"}/> : null }
              <div className={error ? "card shadow border-danger border-4" : "card shadow"}>
                <div className="card-body">
                  <form className="row" onSubmit={submit}>
                    <div className="form-group col-md-3">
                      <label htmlFor="inputURL">URL-Imagen:</label>
                      <input type="text" 
                              className="form-control" 
                              placeholder="https://mi-Imagen" 
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
                                className="form-control"
                                name="descripcion"
                                value={formulario.descripcion}
                                onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="selectCategoria">Categoria:</label>
                      <select id="selectCategoria" 
                              className="form-control"
                              name="categoria"
                              onChange={handleChange}
                              value={formulario.categoria}>
                        <option value="0" >-- Seleccione --</option>
                        <option value="1" >ElectroHogar</option>
                      </select>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="selectTipo">Tipo:</label>
                      <select id="selectTipo"
                              className="form-control"
                              name="tipo"
                              onChange={handleChange}
                              value={formulario.tipo}>
                        <option value="0" >-- Seleccione --</option>
                        <option value="1" >Lavadoras</option>
                      </select>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="selectMarca">Marca:</label>
                      <select id="selectMarca" 
                              className="form-control"
                              name="marca"
                              onChange={handleChange}
                              value={formulario.marca}>
                        <option value="0" >-- Seleccione --</option>
                        <option value="1" >Samsung</option>
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
            
