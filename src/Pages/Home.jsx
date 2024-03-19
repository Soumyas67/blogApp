import React from 'react'
import Cards from '../components/Cards'
import { blogs, sideblogs } from "../database/db"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import caro1 from '../assets/images/caro1.jpg'
import caro2 from '../assets/images/caro2.webp'
import caro3 from '../assets/images/caro3.webp'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import SideCards from '../components/SideCards';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center bg-slate-300 '>
            <div className="carousel w-[70vw]">
                <Carousel autoPlay={true} showThumbs={false} infiniteLoop={true} >
                    <div>
                        <img src={caro1} />
                    </div>
                    <div>
                        <img src={caro2} />
                    </div>
                    <div>
                        <img src={caro3} />
                    </div>
                </Carousel>
            </div>

            <div className="lower_body flex flex-row w-[70vw]">
                <div className="all_posts w-[100vw] flex flex-wrap">
                    {
                        blogs.map((blog) => {
                            return (
                                <Cards onClick={() => {
                                    navigate('/blog', { state: { blog } })
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
                <div className="sidebar w-[20vw]">
                    <div className="latestPosts border bg-slate-200 border-gray-400 my-10">
                        <h1 className='bg-slate-600 text-white text-[20px] py-2 px-2'>latest posts</h1>
                        <div className="all_posts w-[100%] flex flex-wrap">
                            {
                                sideblogs.map((blog) => {
                                    return (
                                        <SideCards
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
                    <div className="contacts border px-4 py-4 flex flex-col shadow-[0_4px_5px_5px_rgba(0,0,0,0.1)] gap-4 bg-white">
                        <h1 className='bg-gray-700 text-white  '>contacts</h1>
                        <div className="contact">
                            <h1>Email</h1>
                            <p>soumyaprakashpatra13@gmail.com</p>
                            <h1>Phone</h1>
                            <p >+916372874080</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fixed bottom-[5vh] right-[5vw] bg-slate-400 w-[50px] h-[50px] flex justify-center items-center rounded-3xl cursor-pointer' onClick={() => {
                navigate('/addblog')
            }}>
                <h1 className='text-[30px] text-white'>+</h1>
            </div>

            <Footer />
        </div>
    )
}

export default Home