import React from 'react'
import Hamburger from './Hamburger'
import Navigation from './navigation/Navigation'

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Navigation />
      <Hamburger />
    </div>
  )
}

export default Header
