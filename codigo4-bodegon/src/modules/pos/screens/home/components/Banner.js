import React from 'react'
import bicicleta from './../../../../../assets/img/banners/banner-D-bicicleta-10.webp'
import decoracion2 from './../../../../../assets/img/banners/banner-D-decoracion-10.webp'
import decoracion from './../../../../../assets/img/banners/banner-D-decoracion-24al30-A.webp'
import electro from './../../../../../assets/img/banners/banner-D-electro-24al30-A.webp'
import cerveza from './../../../../../assets/img/banners/banner-vivanda-D-CERVEZA-ARTESANAL-30.webp'
import pilsen from './../../../../../assets/img/banners/banner-vivanda-D-CERVEZA-PILSEN-30.webp'
import gin from './../../../../../assets/img/banners/banner-vivanda-D-GIN-30.webp'
import piqueo from './../../../../../assets/img/banners/banner-vivanda-D-piqueo-30.webp'
import pisco from './../../../../../assets/img/banners/banner-vivanda-D-PISCO-VODKA-30.webp'
import bife from './../../../../../assets/img/banners/ROTADOR-VIVANDA-D-09-15-BIFE.webp'
import paneton from './../../../../../assets/img/banners/ROTADOR-VIVANDA-D-09-15-PANETONES.webp'

const Banner = () => {
    return (
        
        <section className="main_section-carousel bg-dark">
            <div className="container-fluid">
                <div className="row-12">
                    <div id="carouselId" className="carousel slide" data-ride="carousel" data-interval="3000">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselId" data-slide-to="1"></li>
                            <li data-target="#carouselId" data-slide-to="2"></li>
                            <li data-target="#carouselId" data-slide-to="3"></li>
                            <li data-target="#carouselId" data-slide-to="4"></li>
                            <li data-target="#carouselId" data-slide-to="5"></li>
                            <li data-target="#carouselId" data-slide-to="6"></li>
                            <li data-target="#carouselId" data-slide-to="7"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item">
                                <a href="!#"><img src={paneton} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item active">
                                <a href="!#"><img src={bicicleta} className="img-fluid" width="1800px" alt="First slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={decoracion} className="img-fluid" width="1800px" alt="Second slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={decoracion2} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={electro} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={cerveza} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={pilsen} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={gin} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={pisco} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={piqueo} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                            <div className="carousel-item">
                                <a href="!#"><img src={bife} className="img-fluid" width="1800px" alt="Third slide"/></a>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="!#carouselId" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>   
        </section>

    )
}

export default Banner
                            
                            
