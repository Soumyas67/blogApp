import React from 'react'
import blog1 from '../assets/images/blog1.webp'

const SideCards = ({title, description, date, image}) => {
  return (
    <div className='w-[100%] bg-white rounded-sm px-4 py-4 mx-4 my-4 flex flex-row-reverse gap-3 cursor-pointer hover:scale-105 hover:shadow-[0_14px_12px_5px_rgba(0,0,0,0.3)] transition-all ease-in-out duration-150'>
      <div className="details">
        <h1 className='text-[20px] font-semibold'>{title}</h1>
        <h2>{description}, <span className='text-[rgba(255,255,255,0.6)]'>{date}</span></h2>
      </div>
      <div className="image w-[10vw] rounded-sm overflow-hidden">
        <img src={image} alt="blog1" />
      </div>
    </div>
  )
}

export default SideCards