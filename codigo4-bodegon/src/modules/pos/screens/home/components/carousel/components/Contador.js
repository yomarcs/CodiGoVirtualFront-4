import React, { useState } from 'react';

const Contador = () => {

    const [c, actualizarC] = useState(0);
    // console.log("actualizando C");
    const restar = () => {
        actualizarC(c - 1)
    }

    const sumar = () =>{
        actualizarC(c + 1)
    }

    return (
        <div className="cantidad_producto">
            <button className="button__decremento" onClick={() => {restar()}}>-</button>
            <div className="input__cantidad">{c}</div>
            <button className="button__incremento" onClick={() => {sumar()}}>+</button>
        </div>
    )
}

export default Contador
