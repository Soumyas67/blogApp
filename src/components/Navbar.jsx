import React from 'react'
import { Outlet, useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div className='w-[100vw] h-20 flex bg-slate-500 items-center text-slate-300 justify-between'>
                <div className="logo mx-4 w-[38px] overflow-hidden hover:w-[30%] transition-all duration-300 ease-in-out ml-[20vw]">
                    <h1 className='text-[60px] tracking-wider font-bold cursor-pointer' onClick={()=> {
                        navigate('/')
                    }}>SOUMYA</h1>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar