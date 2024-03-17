import React from 'react'
import blog1 from '../assets/images/blog1.webp'

const Cards = ({title, description, date, image, content, onClick}) => {
  return (
    <div onClick={onClick} className='w-[40vw] bg-slate-600 rounded-md px-4 py-4 text-white mx-4 my-4 flex flex-col gap-3 cursor-pointer hover:scale-105 hover:shadow-[0_14px_12px_5px_rgba(0,0,0,0.3)] transition-all ease-in-out duration-150'>
        <div className="details">
            <h1 className='text-[30px] font-semibold'>{title}</h1>
            <h2>{description}, <span className='text-[rgba(255,255,255,0.6)]'>{date}</span></h2>
        </div>
        <div className="image rounded-md overflow-hidden">
            <img src={blog1} alt="blog1" />
        </div>
        <div className="content">
            <p className='truncate text-ellipsis'>
                {content}
            </p>
        </div>
    </div>
  )
}

export default Cards