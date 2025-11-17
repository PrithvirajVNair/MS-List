import React from 'react'
import SideBar from '../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faUsers } from '@fortawesome/free-solid-svg-icons';


const Dashbord = () => {
    return (
        <div className='bg-black text-white'>
            <marquee className='bg-gray-950 fixed' behavior="" direction="left">THIS IS THE ADMIN HOME PAGE OF MS LIST</marquee>
            <div className='grid grid-cols-[1fr_4fr]'>
                <div className='h-full'>
                    <SideBar overview />
                </div>
                <div className='grid grid-cols-2'>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faUsers} className='text-2xl text-blue-600' />
                        <p className='text-3xl py-2'>12000</p>
                        <p>Total Users</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faFilm} className='text-2xl text-green-600' />
                        <p className='text-3xl py-2'>12000</p>
                        <p>Total Movies</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faTv} className='text-2xl text-red-600' />
                        <p className='text-3xl py-2'>12000</p>
                        <p>Total Shows</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <p>User Growth</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbord