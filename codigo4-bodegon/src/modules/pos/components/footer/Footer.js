import React from 'react'
import BuyWith from './components/BuyWith'
import Copyright from './components/Copyright'
import FollowUs from './components/FollowUs'
import We from './components/We'

const Footer = () => {
    return (

      <footer>  
        <section className="container-fluid">
            <We />
            <BuyWith />
            <FollowUs />
            <hr className="bg-light"/>
            <Copyright />
        </section>
      </footer>
            
    )
}

export default Footer
