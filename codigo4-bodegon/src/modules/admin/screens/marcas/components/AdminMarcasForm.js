import React, { useState } from 'react';

const AdminMarcasForm = () => {

    const [formulario, setFormulario] = useState ({marcas: ""});

    const submit = (e) =>{
        e.preventDefault();
        console.log("Enviando Formulario...");
    }

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        });
    }

    return (
        <section className="row">
            {/* Formulario */}
            <div className="col-12">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" onSubmit={submit}>
                            <div className="form-group col-12">
                                <label htmlFor="">Nombre de Marca:</label>
                                <input type="text" 
                                       className="form-control" 
                                       placeholder="Ingrese Marca Nueva" 
                                       id="inputNombre"
                                       name="marcas"
                                       value={formulario.marcas}
                                       onChange={handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <button id="btnAccion" className="btn btn-dark" type="submit">Crear Marca</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminMarcasForm
