import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({showButton}) => {

  const [toggleMenu,setToggleMenu] = useState(false)

  return (
    <>
      <div className='fixed w-full' style={{zIndex:'999'}}>
        <div className='flex justify-between items-center px-5 sm:px-10 bg-black/20 backdrop-blur-xs text-white/50 py-2'>
            <div>
                <a href='#' className='text-2xl font-bold'><span className='text-blue-600'>MS</span> List</a>
            </div>
            <ul className='hidden sm:flex text-xl justify-center items-center'>
                {showButton && <li><Link to={'/register'}><button className='me-10 text-sm py-2 px-5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'>Get Started</button></Link></li>}
                <li className='pe-10 hover:text-blue-300'><a href='#features'>Features</a></li>
                <li><a href='#about' className='hover:text-blue-300'>About</a></li>
            </ul>
            <div className='flex sm:hidden'>
              <button onClick={()=>setToggleMenu(!toggleMenu)}>{!toggleMenu?<FontAwesomeIcon icon={faBars} className='text-xl' />:<FontAwesomeIcon icon={faXmark} className='text-xl' />}</button>
            </div>
        </div>
        {toggleMenu&&
        <div className='text-white/60 grid grid-cols-4'>
          <div></div>
          <div className='col-span-2 border rounded-xl backdrop-blur-xl'>
            <ul className='flex flex-col justify-center items-center text-2xl py-5'>
                {showButton && <li><Link to={'/register'}><button className='text-sm py-2 px-5 rounded-xl bg-blue-500 hover:bg-blue-600 text-white cursor-pointer'>Get Started</button></Link></li>}
                <li className='text-sm py-2'><a href='#features'>Features</a></li>
                <li className='text-sm'><a href='#about'>About</a></li>
            </ul>
          </div>
          <div></div>
        </div>}
      </div>
    </>
  )
}

export default Header