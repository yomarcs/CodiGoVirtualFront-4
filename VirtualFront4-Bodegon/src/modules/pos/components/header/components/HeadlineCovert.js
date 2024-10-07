import React from 'react'
import logo from './../../../../../assets/img/static/logo.jpeg'
import Navigator from './Navigator'

const HeadlineCovert = () => {
    return (
        <section className="header__covert">
            <label htmlFor="toggle-1" className="toggle-menu label-toggle"><ul><li></li> <li></li> <li></li></ul></label>
            <input type="checkbox" id="toggle-1"/>
            <div className="logo__oculto">
                <a className="covert__logo" href="!#" id="covert__logo"><img className="covert__img" src={logo} alt="Logo El Bodegón"/></a>
                <a className="covert__a" href="!#"><i className="icono fas fa-shopping-cart mr-2"></i></a>
                <a className="covert__a" href="!#"><i className="icono fa fa-user mr-2" aria-hidden="true"></i></a>
                <a className="covert__a" href="!#"><i className=" icono_registrate fa fa-user-plus mr-2"></i></a>
            </div>
            <div className="covert__buscador">
                <input className=" covert__input" type="text" placeholder="¿Qué estas buscando?"/>
                <button className="covert__button"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
            <Navigator />
        </section>
    )
}

export default HeadlineCovert
