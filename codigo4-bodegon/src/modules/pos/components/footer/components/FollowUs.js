import React from 'react'
import facebook from './../../../../../assets/img/static/facebook.png'
import twitter from './../../../../../assets/img/static/gorjeo.png'
import instagram from './../../../../../assets/img/static/instagram.png'
import tecsup from './../../../../../assets/img/static/logo-tecsup.png'
import codigo from './../../../../../assets/img/static/logoCodigo.png'
import youtube from './../../../../../assets/img/static/youtube.png'

const FollowUs = () => {
    return (
        <div className="row justify-content-between">
            <div className="col-6">
                <p>Siguenos:</p>
                <a href="!#" className="col-xs-5 mr-4"><img src={twitter} height="40px" alt="mastercard"/></a>
                <a href="!#" className="col-xs-5 mr-4"><img src={facebook} height="40px" alt="american-express"/></a>
                <a href="!#" className="col-xs-5 mr-4"><img src={youtube} height="40px" alt="dinners-club"/></a>
                <a href="!#" className="col-xs-5 mr-4"><img src={instagram} height="40px" alt="visa"/></a>
            </div>
            <div className=" desarrollo col-6 text-right">
                <p className="mr-4 desarrollo">Impulsate:</p>
                <a href="https://codigo.edu.pe" target="blank" className="col-xs-5"><img className="codigo mr-4" src={codigo} alt="mastercard" /></a>
                <a href="https://www.tecsup.edu.pe/" target="blank" className="col-xs-5"><img className="tecsup mr-2" src={tecsup} alt="mastercard" /></a>
            </div>
        </div>
    )
}

export default FollowUs
