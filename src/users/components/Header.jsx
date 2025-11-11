import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({home,watchlist}) => {

    const [toggleUser,setToggleUser]=useState(false)

  return (
    <div className='flex flex-col fixed w-full' style={{zIndex:'999'}}>
        <div className='flex justify-between px-10 bg-black/20 backdrop-blur-xs text-white py-2'>
            <div>
                {home?<a href='#' className='text-2xl font-bold'><span className='text-blue-600'>MS</span> List</a>:
                <a href='/home' className='text-2xl font-bold'><span className='text-blue-600'>MS</span> List</a>}
            </div>
            <ul className='flex items-center text-2xl'>
                {home?<li className='pe-10'><a href='#'>Home</a></li>:
                <li className='pe-10'><a href='/home'>Home</a></li>}

                {watchlist?<li className='pe-10'><a href='#'>Watchlist</a></li>:
                <li className='pe-10'><a href='/watchlist'>Watchlist</a></li>}

                {watchlist && <button className='me-10 text-base py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>}

                <li><button onClick={()=>setToggleUser(!toggleUser)}><FontAwesomeIcon icon={faCircleUser} className='text-3xl cursor-pointer' /></button></li>
            </ul>
        </div>
        {toggleUser &&
            <div className='flex justify-end me-15 text-white/60'>
            <div className='flex flex-col border border-blue-300/40 py-3 w-50 rounded justify-center items-center backdrop-blur-xl'>
                <button className='cursor-pointer hover:text-blue-400'>Profile</button>
                <Link to={'/login'}><button className='cursor-pointer hover:text-blue-400'>Log out</button></Link>
            </div>
        </div>}
    </div>
  )
}

export default Header