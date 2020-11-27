import React, { useState } from 'react';

const AdminCategoriasForm = () => {

const [formulario, setFormulario] = useState({categoria: ""});

const handleChange = (e) =>{
    setFormulario({
        ...formulario,
        [e.target.name]:e.target.value
    });
}

const submit = (e) => {
    e.preventDefault();
    console.log("Enviando Formulario...");
}

    return (
        <section className="row">
            <div className="col">
                <div className="card shadow">
                    <div className="card-body">
                        <form className="row" onSubmit={submit}>
                            <div className="form-group col-12">
                                <label htmlFor="inputCategoria">Nombre de categoria:</label>
                                <input type="text" 
                                       className="form-control"
                                       placeholder="Ingrese Categoria Nueva" 
                                       id="inputCategoria"
                                       name="categoria"
                                       value={formulario.categoria}
                                       onChange={handleChange} />
                            </div>
                            <div className="form-group col-12">
                                <button id="btnAccion" className="btn btn-dark" type="submit">Crear Categoria</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminCategoriasForm
