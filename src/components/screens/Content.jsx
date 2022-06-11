import React from 'react'
import logoImg from '../../assets/images/cta-bg2.png'
import objectImg from '../../assets/images/cta-img.png'

const Content = () => {
  return (
    <div className="mt-28 w-1/2">
      <img
        src={logoImg}
        alt=""
        draggable="false"
        className="mb-8 -ml-32 w-4/5 h-32 rounded-full"
      />
      <div className="flex ml-2 h-80">
        <img src={objectImg} alt="" draggable="false" className="block mr-8" />
        <p
          className="text-white opacity-70 leading-8 text-lg w-auto"
          style={{ maxWidth: '55%' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          aspernatur voluptatum? Aliquam architecto enim tempore, corporis
          recusandae eius esse perferendis sapiente obcaecati eveniet ipsa
          provident laudantium quae consequatur veniam repellendus.
        </p>
        <button className=" bg-transparent px-14 h-16 mt-36 -ml-48 rounded-2xl text-3xl shadow-2xl border-2 text-white backdrop-blur-sm hover:scale-[1.06] transition-transform ease-out z-40">
          Join
        </button>
      </div>
    </div>
  )
}

export default Content
