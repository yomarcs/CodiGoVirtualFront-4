import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Alert from '../../../components/Alert';


const AdminTiposForm = () => {

    const[formulario, setFormulario] = useState({ tipos :""})
    const[error, setError] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        
        if(formulario.tipos.trim() === ""){
            setError(true);
            return;
          }
      
          Swal.fire({
            title: "Creado!",
            text: "Categoria creada exitosamente",
            icon: "success",
            timer: 2000
        });
      
          setFormulario({
              tipos:""
          });
      
          setError(false);
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
              {error ? <Alert tipo={"danger"} texto={"** El campo tipo debe ser llenado correctamente"}/> : null }
                <div className={error ? "card shadow border-danger border-4" : "card shadow"}>
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
