import React from 'react';
import licuadoragrande from './../../../../assets/img/electro/licuadora-grande.png';
import licuadorapeque from './../../../../assets/img/electro/licuadora-peque.jpg';



const Producto = () => {

//     $(document).ready(function()
// {
//     $("#electrodomestico").mlens(
//     {
//         imgSrc: $("#electrodomestico").attr("data-big"),   // path of the hi-res version of the image
//         lensShape: "circle",                // shape of the lens (circle/square)
//         lensSize: 180,                  // size of the lens (in px)
//         borderSize: 4,                  // size of the lens border (in px)
//         borderColor: "#fff",                // color of the lens border (#hex)
//         borderRadius: 0,                // border radius (optional, only if the shape is square)
//         imgOverlay: $("#electrodomestico").attr("data-overlay"), // path of the overlay image (optional)
//         overlayAdapt: true // true if the overlay image has to adapt to the lens size (true/false)
//     });
// });

    return (
        <main>
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <div className="col-md-5 mt-4 ml-5">
                        <div className="card__body-producto"></div>
                            <h3 className="card__title-producto">BLACKLINE</h3>
                            <p className="card__description-producto">Extractor BLACKLINE HBI-1692D Inox-Negro</p>
                        <div className="card__producto-zoom">
                            <figure className="figure-producto">
                                <img id="electrodomestico" width="500px" src={licuadorapeque}  alt="Electrodomestico" data-big={licuadoragrande}/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card__footer-producto">
                            <div className="montos-producto">
                                <p className="precio__normal-producto">Precio normal: <span className="span__precionormal">S/ 399.00</span></p>
                                <p className="importe-producto">Importe:</p>
                                <p className="precio__promocion-producto">Precio:</p>
                                <span className="span__importe-producto">S/ 5454.00 </span>
                                <span className="span__promocion-producto">S/ 1250.00 </span>
                            </div>
                            <p className="unidad-producto">Und.</p>
                            <div className="cantidad_producto-producto">
                                <button className="button__decremento-producto" >-</button>
                                <div className="input__cantidad-producto"> 0 </div>
                                <button className="button__incremento-producto">+</button>
                            </div>
                            <div className="agregar__producto-producto"><button className="button__agregar-producto">AGREGAR<i className="fa fa-shopping-cart" aria-hidden="true"></i></button></div>
                        </div>
                        <div className="delivery__express-producto"><button className="delivery__button-producto"><i className="fas fa-check mr-2" aria-hidden="true"></i>Delivery Express</button></div>
                    </div>
                </div>
            </div>           
        </main>
    )
}

export default Producto
            
