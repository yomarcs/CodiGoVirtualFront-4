import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Alert from '../../../components/Alert';

const AdminMarcasForm = () => {

    const [formulario, setFormulario] = useState ({marcas: ""});
    const [error, setError] = useState(false);

    const submit = (e) =>{
        e.preventDefault();
        
        if(formulario.marcas.trim() === ""){
            setError(true);
            return;
          }
      
          Swal.fire({
            title: "Creado!",
            text: "Marca creada exitosamente",
            icon: "success",
            timer: 2000
        });
      
          setFormulario({
              marcas:""
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
            {/* Formulario */}
            <div className="col-12">
              {error ? <Alert tipo={"danger"} texto={"** El campo marca debe ser llenado correctamente"}/> : null }
                <div className={error ? "card shadow border-danger border-4" : "card shadow"}>
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
