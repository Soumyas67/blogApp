import React from 'react'
import { useLocation } from 'react-router-dom'
import blog1 from '../assets/images/blog1.webp'

const Blog = () => {

  const location = useLocation();
  const { title, description, date, image, content } = location.state.blog
  return (
    <div className='w-[100vw] px-10 bg-slate-400'>
      <div className='px-10 w-[80vw] flex flex-col gap-6 py-20'>
        <h1 className='text-[50px]'>{title}</h1>
        <h3 className='text-[30px]'>{description}, <span className='text-[rgba(0,0,0,0.4=6)]'>{date}</span></h3>
        <div className="image w-[100%]">
          <img width={"100%"} src={blog1} alt="demo" />
        </div>
        <div className="content">
          <p className='text-[20px]'>
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog