import React from 'react'
import img from './../../assets/images/q1 копия12.png'

const Tree = () => {
  return (
    <div>
      <img
        src={img}
        alt=""
        draggable="false"
        className="fixed -bottom-2 right-80 w-1/3"
      />
    </div>
  )
}

export default Tree
