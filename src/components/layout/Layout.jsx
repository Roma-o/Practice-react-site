import React from 'react'
import BgImage from '../../assets/images/home-banner.png'
import Header from './header/Header'
import SocialMedia from './SocialMedia'

const Layout = ({ children }) => {
  return (
    <div
      className="p-12 relative bg-cover bg-no-repeat min-h-screen min-w-fit"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="gradient" />
      <div className="relative z-1">
        <Header />
        <SocialMedia />
        {children}
      </div>
    </div>
  )
}

export default Layout
