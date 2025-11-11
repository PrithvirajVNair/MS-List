import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center bg-black text-white/60 px-5 py-2'>
        <p>&copy; 2025 <span className='text-blue-600'>MS</span> List. All rights reserved.</p>
        <ul className='flex'>
            <li className='pe-5'><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li>
        </ul>
    </div>
  )
}

export default Footer