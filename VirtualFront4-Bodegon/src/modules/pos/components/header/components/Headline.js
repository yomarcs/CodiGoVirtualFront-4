import React from 'react';
import logo from './../../../../../assets/img/static/logo.jpeg';
// import { Link } from 'react-router-dom'

const Headline = () => {
    return (
      
    <section className="header__encabezado">
        <div className="div__logo">
            <a href="!#"><img className="div__logo__logo" 
                              src={logo} 
                              alt="Logo el Bodegón"
                              height="60px"/>
            </a>
        </div>
        <nav className="nav__encabezado">
            <input className="encabezado__input" 
                   type="text" 
                   placeholder="¿Qué estas buscando?"/>
            <button className="encabezado__button">
                <i className="encabezado__i fa fa-search"
                   aria-hidden="true">
                </i>
            </button>
            <a className="encabezado__a" href="!#"><i className="encabezado__i fas fa-shopping-cart mr-2"></i>Mi Carrito</a>
            <a className="encabezado__a" href="!#"><i className="encabezado__i fa fa-user mr-2"></i>Iniciar Sesión</a>
            <a className="encabezado__a" href="!#"><i className="encabezado__i fa fa-user-plus mr-2"></i>Registrate</a>
        </nav>
    </section>    
       
    )
}

export default Headline;
