import React from 'react'
import { blogs } from '../database/db'
import Cards from '../components/Cards'
import Blog from './Blog'
import { useNavigate } from 'react-router-dom'

const AllBlog = () => {
  

    const navigate = useNavigate();

    return (
    <div>
        <div className="Blog_container flex flex-wrap items-center justify-center bg-slate-400">
                {
                    blogs.map((blog) => {
                        return (
                            <Cards onClick={() => {
                                navigate()
                            }}
                                key={blog.id}
                                title={blog.title}
                                description={blog.description}
                                date={blog.date}
                                image={blog.image}
                                content={blog.content}
                            />
                        )
                    })
                }
            </div>
    </div>
  )
}

export default AllBlog