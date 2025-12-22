import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='sm:hidden'>
        <ul className='flex justify-between items-center px-5 text-xs p-1 bg-black/90 text-white/60'>
          <li className='pe-5'><a href="/privacypolicy">Privacy Policy</a></li>
          <li><a href="/termsofservice">Terms of Service</a></li>
        </ul>
      </div>
      <div className='flex sm:justify-between justify-center items-center bg-black text-white/60 px-2 sm:px-5 py-2 sm:text-base text-xs'>
        <p>&copy; {new Date().getFullYear()} <span className='text-blue-600'>MS</span> List. All rights reserved.</p>
        <ul className='hidden sm:flex'>
          <li className='pe-5'><a href="/privacypolicy">Privacy Policy</a></li>
          <li><a href="/termsofservice">Terms of Service</a></li>
        </ul>
      </div>
    </>
  )
}

export default Footer