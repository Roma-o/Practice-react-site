import React from 'react'
import { SiInstagram, SiFacebook, SiTwitter } from 'react-icons/si'

const stylesIcon =
  'text-white hover:opacity-100 opacity-80 duration-300 ease-in-out transition-opacity'

const SocialMedias = [
  {
    icon: <SiInstagram size={35} className={stylesIcon} />,
    link: 'https://www.instagram.com/'
  },

  {
    icon: <SiFacebook size={35} className={stylesIcon} />,
    link: 'https://ru-ru.facebook.com/'
  },

  {
    icon: <SiTwitter size={35} className={stylesIcon} />,
    link: 'https://twitter.com/'
  }
]

const SocialMedia = () => {
  return (
    <div className="absolute right-1 z-10" style={{ top: '40%' }}>
      {SocialMedias.map(({ icon, link }) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noreferrer"
          className="my-10 block"
        >
          {icon}
        </a>
      ))}
    </div>
  )
}

export default SocialMedia
