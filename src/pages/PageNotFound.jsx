import React from 'react'
import PNF from '../assets/404/404.gif'

const PageNotFound = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <div className='sm:grid grid-cols-3 h-screen place-content-center'>
        <div></div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-extrabold flex flex-col text-center'><span><span className='text-blue-600'>404</span> :</span> PAGE NOT FOUND!</h1>
          <img src={PNF} alt="" className='py-10' style={{width:'200px'}}/>
          <div className='sm:px-0 px-5'>
            <p className='text-white/60'>Sorry. Unless you've got a time machine, that page is unavailable.</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default PageNotFound