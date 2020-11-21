import React from 'react'

const AdminMarcasForm = () => {
    return (
        <section className="row">
            {/* Formulario */}
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" id="form-marcas">
                            <div className="form-group col-12">
                                <label for="">Nombre de Marca:</label>
                                <input type="text" className="form-control" placeholder="Ingrese Marca Nueva" id="inputNombre" />
                            </div>
                            <div className="form-group col-12">
                                <button id="btnAccion" className="btn btn-dark">Crear Marca</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminMarcasForm
