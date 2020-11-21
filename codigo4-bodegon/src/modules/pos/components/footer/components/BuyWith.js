import React from 'react'
import american from './../../../../../assets/img/static/american-express.png'
import dinners from './../../../../../assets/img/static/club-de-cenas.png'
import mastercard from './../../../../../assets/img/static/tarjeta-mastercard.png'
import visa from './../../../../../assets/img/static/visa.png'

const BuyWith = () => {
    return (
        <div className="row justify-content-center">
            <div className="row">
                <span className="col-xs-5 mr-4"><img src={mastercard} height="50px" alt="mastercard" /></span>
                <span className="col-xs-5 mr-4"><img src={american} height="50px" alt="american-express" /></span>
                <span className="col-xs-5 mr-4"><img src={dinners} height="50px" alt="dinners-club" /></span>
                <span className="col-xs-5 mr-4"><img src={visa} height="50px" alt="visa" /></span>
            </div>
        </div>
    )
}

export default BuyWith
