import React from 'react'
import { Link } from 'react-router-dom'
import { list } from './list'
import LogoImage from '../../../../assets/images/s1.png'

const Navigation = () => {
  return (
    <ul className="list-none flex items-center mx-auto">
      {list.map((title, idx) => (
        <li key={title} className="inline-block px-4">
          {idx !== 2 ? (
            <Link
              to={`/${title.toLocaleLowerCase()}`}
              className="block text-white opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out text-xl"
            >
              {title}
            </Link>
          ) : (
            <img
              src={LogoImage}
              alt=""
              width={200}
              draggable="false"
              className="block mx-5"
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
