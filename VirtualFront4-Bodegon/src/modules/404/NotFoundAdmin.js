import React from 'react'
import svgnotfound from './../../assets/img/static/404.svg'
import logo from './../../assets/img/static/apple.png'

const NotFoundAdmin = () => {
    return (
        <div className="bg-dark">
            <div class="Admincontenedor">
                <figure class="img-AdminNotFound"><img src={svgnotfound} width="120px" alt=""/></figure>
                <span class="titulo-AdminNotFound"><strong>Esta Pagina no esta disponible</strong></span>
                <span class="texto-AdminNotFound"> Es posible que el enlace este roto o que se haya eliminado la pagina. Verifica que el enlace que quieres abrir sea correcto </span>
                <button class="boton-AdminInicio">ir a la pagina Admin de inicio<img className="ml-2" src={logo} height="30px" alt=""/></button>
                <button class="boton-AdminVolver">Volver</button>
            </div>
        </div>
    )
}

export default NotFoundAdmin