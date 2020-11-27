import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'


const AdminTiposForm = () => {

    const[formulario, setFormulario] = useState({ tipos :""})

    const submit = (e) => {
        e.preventDefault();
        console.log("Enviando Formulario...");
        console.log(formulario);
    }

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        });
    }


    return (
        <section className="row">
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" onSubmit={submit}>
                            <div className="form-group col-12">
                                <label htmlFor="">Nombre de Tipo:</label>
                                <input type="text" 
                                       className="form-control" 
                                       placeholder="Ingrese Tipo Nuevo" 
                                       id="inputNombre"
                                       name="tipos"
                                       value={formulario.tipos}
                                       onChange={handleChange} />
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
