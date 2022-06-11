import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const Hamburger = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setShow(!show)}>
        <HiOutlineMenuAlt3 size={40} color="white" className="opacity-90" />
      </button>

      {show && (
        <ul className=" absolute rounded-xl bg-white shadow-lg p-4 w-40 right-0 keyframe">
          {Array(5)
            .fill('')
            .map((_, idx) => (
              <li key={`hamb ${idx}`}>
                <Link
                  to={'/'}
                  className="block py-1 hover: text-purple-600 transition-colors duration-300 ease-in-out"
                >{`Item ${idx + 1}`}</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default Hamburger
