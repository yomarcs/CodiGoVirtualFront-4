import React from 'react'

const AdminProductosForm = () => {
    return (
        <section className="row">
            {/* Formulario */}
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" id="formProducto">
                            <div className="form-group col-md-3">
                                <label for="inputNombre">Nombre:</label>
                                <input type="text" className="form-control" placeholder="" id="inputNombre" />
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputPrecio">Precio:</label>
                                <input type="number" className="form-control" placeholder="" id="inputPrecio" />
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputPrecioPromocion">Precio Promoción:</label>
                                <input type="number" className="form-control" placeholder="" id="inputPrecioPromocion" />
                            </div>
                            <div className="form-group col-md-3">
                                <label for="inputStock">Stock:</label>
                                <input type="number" className="form-control" placeholder="" id="inputStock" />
                            </div>
                            <div className="form-group col-md-3">
                                <label for="textDescripcion">Descripción:</label>
                                <textarea name="" id="textDescripcion" cols="40" rows="2"></textarea>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="selectCategoria">Categoria:</label>
                                <select id="selectCategoria" className="form-control">
                                <option value="0" selected>-- Seleccione --</option>
                              </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="selectTipo">Tipo:</label>
                                <select id="selectTipo" className="form-control">
                                <option value="0" selected>-- Seleccione --</option>
                              </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="selectMarca">Marca:</label>
                                <select id="selectMarca" className="form-control">
                                <option value="0" selected>-- Seleccione --</option>
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
