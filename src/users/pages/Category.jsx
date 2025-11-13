import React from 'react'
import Header from '../components/Header'

const Category = () => {
  return (
    <>
        <Header category/>
        <div className='bg-black min-h-screen text-white'>
            <div className='p-20'>
                <h2 className='text-3xl mb-5'>Language:</h2>
                <div className='grid grid-cols-5'>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>English</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>English</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>English</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>English</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>English</p>
                    </div>
                </div>
            </div>
            <div className='px-20'>
                <h2 className='text-3xl mb-5'>Genre:</h2>
                <div className='grid grid-cols-5'>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>Action</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>Adventure</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>Thriller</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>Comedy</p>
                    </div>
                    <div className='m-5 h-[100px] rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                        <p className='text-2xl'>Crime</p>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Category