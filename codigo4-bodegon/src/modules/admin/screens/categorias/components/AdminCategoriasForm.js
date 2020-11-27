import React from 'react'

const AdminCategoriasForm = () => {
    return (
        <section className="row">
            <div className="col">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" id="formCategorias">
                            <div className="form-group col-12">
                                <label htmlFor="inputNombre">Nombre de categoria:</label>
                                <input type="text" className="form-control" placeholder="Ingrese Categoria Nueva" id="inputNombre" />
                            </div>
                            <div className="form-group col-12">
                                <button id="btnAccion" className="btn btn-dark">Crear Categoria</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminCategoriasForm
