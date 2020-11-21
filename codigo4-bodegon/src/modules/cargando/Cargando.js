import React from 'react'

const Cargando = () => {
    return (
        <div className="alert alert-success text-center" role="alert">
            <h4 className="alert-heading">Cargando...</h4>
            <div class="spinner-border text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Cargando
