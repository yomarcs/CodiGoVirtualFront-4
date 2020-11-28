import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Alert from '../../../components/Alert';



const AdminCategoriasForm = () => {

const [categoria, setCategoria] = useState("");
const [error, setError] = useState(false);

const handleChange = (e) =>{
    setCategoria(e.target.value);
}

const submit = (e) => {
    e.preventDefault();
    
    if(categoria.trim() === ""){
      setError(true);
      return;
    }

    Swal.fire({ 
      title: "Creado!",
      text: "Categoria creada exitosamente",
      icon: "success",
      timer: 2000
  });

    setCategoria("");

    setError(false);

}

    return (
        <section className="row">
          <div className="col">
            {error ? <Alert tipo={"danger"} texto={"** El campo categoria debe ser llenado correctamente"}/> : null }
              <div className={error ? "card shadow border-danger border-4" : "card shadow"}>
                <div className="card-body">
                  <form className="row" onSubmit={submit}>
                    <div className="form-group col-12">
                      <label htmlFor="inputCategoria">Nombre de categoria:</label>
                      <input type="text" 
                              className={error ? "form-control border-danger" : "form-control"}
                              placeholder="Ingrese Categoria Nueva" 
                              id="inputCategoria"
                              value={categoria}
                              onChange={handleChange} />
                      </div>
                        <div className="form-group col-12">
                          <button className="btn btn-dark mr-4" type="submit">Crear Categoria</button>
                          <button id="btnAccion" className="btn btn-dark">Cancelar</button>
                        </div>
                  </form>
                </div>
              </div>
          </div>
        </section>
    )
}

export default AdminCategoriasForm
