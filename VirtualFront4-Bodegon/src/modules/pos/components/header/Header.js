import React from 'react'
import Headline from './components/Headline'
import HeadlineCovert from './components/HeadlineCovert'
import Headband from './components/Headband'

const Header = () => {
    return (
      <header>
        <Headband />
        <Headline />
        <HeadlineCovert />       
      </header>
    )
}

export default Header