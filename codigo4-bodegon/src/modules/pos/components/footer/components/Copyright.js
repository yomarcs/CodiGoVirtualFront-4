import React from 'react'
import copyright from './../../../../../assets/img/static/copyright.png'

const Copyright = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="row justify-content-center">
                    <p><img src={copyright} className="mr-2" height="30px" alt="copyright" />2020 - YomarCs. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Copyright
