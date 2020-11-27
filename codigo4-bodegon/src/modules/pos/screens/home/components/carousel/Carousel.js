import React from 'react';
import Flickity from 'react-flickity-component';
import aparato from './../../../../../../assets/img/electro/aparato.PNG';
import blackline from './../../../../../../assets/img/electro/blackline.PNG';
import cafetera from './../../../../../../assets/img/electro/cafetera.PNG';
import combo2 from './../../../../../../assets/img/electro/combo2.PNG';
import hervidor from './../../../../../../assets/img/electro/hervidor.PNG';
import microondas from './../../../../../../assets/img/electro/microondas.PNG';
import sanguchera from './../../../../../../assets/img/electro/sanguchera.PNG';
import tostador from './../../../../../../assets/img/electro/tostador.PNG';
import Contador from './components/Contador';

const flickityOptions = {
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    autoPlay: true,
    arrowShape: { 
        x0: 10,
        x1: 100, y1: 50,
        x2: 45, y2: 0,
        x3: 10
      }
}

const Carousel = () => {

    // const Flickity = require('flickity');

    return (
        <Flickity options={flickityOptions}>

                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={combo2} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={aparato} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={blackline} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={cafetera} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={hervidor} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={sanguchera} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={tostador} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card__header">
                        <figure className="figure">
                            <img className="card__img" src={microondas} alt=""/>
                        </figure>
                    </div>
                    <div className="card__body ">
                        <hr className="hr"/>
                        <h3 className="card__title">BLACKLINE</h3>
                        <p className="card__description">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                    </div>
                    <div className="card__footer">
                        <div className="delivery__express"><button className="delivery__button"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                        <div className="montos">
                            <p className="precio__normal">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                            <p className="importe">Importe:</p>
                            <p className="precio__promocion">Precio:</p>
                            <span className="span__importe">S/ 00  .00 </span>
                            <span className="span__promocion">S/ 00.00 </span>
                        </div>
                        <p className="unidad">Und.</p>
                        <Contador />
                        <div className="agregar__producto"><button className="button__agregar">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                    </div>
                </div>

        </Flickity>
    )
}

export default Carousel
                                                  


