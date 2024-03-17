import React from 'react'

const Blog = ({title, description, date, image, content}) => {
  return (
    <div className='w-[80vw] h-[90vh] fixed'>
        <h1>{title}</h1>
        <h3>{description}, <span>{date}</span></h3>
        <div className="image">
            <img src="#" alt="demo" />
        </div>
        <div className="content">
            <p>
                {content}
            </p>
        </div>
    </div>
  )
}

export default Blog