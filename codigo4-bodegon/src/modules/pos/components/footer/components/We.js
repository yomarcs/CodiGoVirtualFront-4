import React from 'react'

const We = () => {
    return (
        <div className="row justify-content-around mt">
            <div className="col-md-2 col-sm-6 mt">
                <h5 className="primary">ACERCA DE</h5>
                <ul>
                    <li><a href="!#"><i className="fa fa-users mt-2 mr-2 primary" aria-hidden="true"></i>Nosotros</a></li>
                    <li><a href="!#"><i className="fa fa-balance-scale mt-2 mr-2 primary" aria-hidden="true"></i>Responsabilidad Social</a></li>
                    <li><a href="!#"><i className="fas fa-handshake mt-2 mr-2 primary"></i>Trabaja con Nosotros</a></li>
                    <li><a href="!#"><i className="fas fa-head-side-mask mt-2 mr-2 primary"></i>Prevención COVID-19</a></li>
                    <li><a href="!#"><i className="fas fa-globe-americas mt-2 mr-2 primary"></i>Pasión por el planeta</a></li>
                </ul>
            </div>
            <div className="col-md-2 col-sm-6 mt">
                <h5 className="primary">COMPRA EN</h5>
                <ul>
                    <li><a href="!#"><i className="fas fa-store mt-2 mr-2 primary"></i>¿Cómo Comprar?</a></li>
                    <li><a href="!#"><i className="fas fa-money-bill-wave mt-2 mr-2 primary"></i>Formas de Pago</a></li>
                    <li><a href="!#"><i className="fa fa-question mt-2 mr-2 primary" aria-hidden="true"></i>Preguntas Frecuentes</a></li>
                    <li><a href="!#"><i className="fa fa-comments mt-2 mr-2 primary" aria-hidden="true"></i>Servicio al Cliente</a></li>
                </ul>
            </div>
            <div className="col-md-2 col-sm-6 mt">
                <h5 className="primary">POLÍTICAS</h5>
                <ul>
                    <li><a href="!#"><i className="fa fa-check mt-2 mr-2 primary" aria-hidden="true"></i>Terminos y Condiciones</a></li>
                    <li><a href="!#"><i className="fa fa-lock mt-2 mr-2 primary" aria-hidden="true"></i>Uso de Datos Personales</a></li>
                    <li><a href="!#"><i className="fas fa-check-double mt-2 mr-2 primary"></i>Condiciones de Ofertas</a></li>
                    <li><a href="!#"><i className="fa fa-book-open mt-2 mr-2 primary" aria-hidden="true"></i>Libro de Reclamaciones</a></li>
                </ul> 
            </div>
            <div className="col-md-2 col-sm-6 mt">
                <h5 className="primary">Call Center</h5>
                <ul>
                    <li className="display-5"><i className="fas fa-headset display primary"></i> 555 - 5555</li>
                </ul>
                <h5 className="primary">Whatsapp</h5>
                <ul>
                    <li className="display-5"><a href="http://wa.me/987654321"><i className="fab fa-whatsapp primary" aria-hidden="true"></i> 987 - 654321</a></li>
                </ul>
            </div>
        </div>
    )
}

export default We
