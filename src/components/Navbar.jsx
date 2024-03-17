import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
    const navs = [
        {
            nav: "Home",
            link: "/"
        },
        {
            nav: "All Blogs",
            link: "/allBlogs"
        },
        {
            nav: "Add Blogs",
            link: "/addBlog"
        },
        {
            nav: "Resources",
            link: "/resources"
        },
        {
            nav: "Contact",
            link: "/contact"
        },

    ]

    const navigate = useNavigate();

    return (
    <div>
        <div className='w-[100%] h-20 flex items-center justify-between text-black'>
        <div className="logo mx-4">
            <img src="#" alt="logo" />
        </div>
        <div className="navigations flex gap-3 mx-4">
            {
                navs.map((nv)=>{
                    return(
                        <div className='text-black cursor-pointer'
                        onClick={()=> {
                            navigate(nv.link)
                        }}
                        >{nv.nav}</div>
                    )
                })
            }
        </div>
        
    </div>
    <Outlet />
    </div>
  )
}

export default Navbar