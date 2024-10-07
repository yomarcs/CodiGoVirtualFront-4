import React from 'react'
import Banner from './components/Banner'
import Carousel from './components/carousel/Carousel'

const Home = () => {
    return (
        <main>
            <Banner />
            <p className="texto-ofertas">DESCUBRE LA MEJOR CALIDAD - TE RECOMENDAS NUESTRAS <span className="ofertas">OFERTAS</span></p>
            <Carousel />
        </main>
    )
}

export default Home
