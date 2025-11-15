import React from 'react'
import Header from '../components/Header'

const Category = () => {
  return (
    <>
        <Header category/>
        <div className='bg-black min-h-screen text-white'>
            <div className='sm:px-20 px-5 pt-20'>
                <h2 className='text-xl sm:text-3xl mb-5'>Language:</h2>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>English</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>English</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>English</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>English</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>English</p>
                    </div>
                </div>
            </div>
            <div className='sm:px-20 sm:pt-0 px-5 pt-5'>
                <h2 className='text-xl sm:text-3xl mb-5'>Genre:</h2>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>Action</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>Adventure</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>Drama</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>Thriller</p>
                    </div>
                    <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='sm:text-2xl text-sm'>Crime</p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Category