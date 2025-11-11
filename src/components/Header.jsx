import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({showButton}) => {
  return (
    <div className='flex justify-between px-10 bg-black/20 backdrop-blur-xs text-white/50 py-2 fixed w-full'>
        <div>
            <a href='#' className='text-2xl font-bold'><span className='text-blue-600'>MS</span> List</a>
        </div>
        <ul className='flex text-2xl'>
            {showButton && <li><Link to={'/register'}><button className='me-10 text-sm py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Get Started</button></Link></li>}
            <li className='pe-10'><a href='#features'>Features</a></li>
            <li><a href='#about'>About</a></li>
        </ul>
    </div>
  )
}

export default Header