import React from 'react'
import Banner from './components/Banner'
import Carousel from './components/Carousel'

const Home = () => {
    return (
        <main>
            <Banner />
            <p class="texto-ofertas">DESCUBRE LA MEJOR CALIDAD - TE RECOMENDAS NUESTRAS <span class="ofertas">OFERTAS</span></p>
            <Carousel />
        </main>
    )
}

export default Home
