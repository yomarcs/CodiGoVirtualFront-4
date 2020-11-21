import React from 'react'
import svgnotfound from './../../assets/img/static/404.svg'
import logo from './../../assets/img/static/apple.png'

const NotFound = () => {
    return (
        <div class="contenedor">
        <figure class="img-notfound"><img src={svgnotfound} width="120px" alt=""/></figure>
        <span class="titulo-notfound"><strong>Esta Pagina no esta disponible</strong></span>
        <span class="texto-notfound"> Es posible que el enlace este roto o que se haya eliminado la pagina. Verifica que el enlace que quieres abrir sea correcto </span>
        <button class="boton-inicio">ir a la pagina de inicio<img className="ml-2" src={logo} height="30px" alt=""/></button>
        <button class="boton-volver">Volver</button>
        </div>
    )
}

export default NotFound
