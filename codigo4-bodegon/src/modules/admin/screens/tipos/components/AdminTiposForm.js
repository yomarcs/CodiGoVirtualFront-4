import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'


const AdminTiposForm = () => {
    return (
        <section className="row">
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" id="form-tipos">
                            <div className="form-group col-12">
                                <label htmlFor="">Nombre de Tipo:</label>
                                <input type="text" className="form-control" placeholder="Ingrese Tipo Nuevo" id="inputNombre" />
                            </div>
                            <div className="form-group col-12">
                                <button id="btnAccion" className="btn btn-dark">Crear Tipo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminTiposForm
