import React from 'react'

const Headband = () => {
    return (
        <div className="container-fluid headband">
            <div>
                <a className="link__headband" href="!#"><i className="fa fa-store verde mr-2"></i>Nuestras Tiendas</a>   
                <a className="link__headband" href="!#"><i className="fa fa-check-square orange mr-2" aria-hidden="true"></i>Recetas</a> 
                <a className="link__headband" href="!#"><i className="fa fa-credit-card amarillo mr-2" aria-hidden="true"></i> Tarjeta Bodegón</a>
                <a className="link__headband" href="!#"><i className="fas fa-book-open azul mr-2"></i>Catálogo</a> 
            </div>
            <div className="callcenter">
                <a className="link__headband" href="!#">¿Dudas? <i className="fa fa-phone-alt primary mr-2 ml-2" aria-hidden="true"></i>55-5555</a> 
            </div>
        </div>
    )
}

export default Headband
