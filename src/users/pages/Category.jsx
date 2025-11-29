import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
        <Header category/>
        <div className='bg-black min-h-screen text-white'>
            <div className='sm:px-20 px-5 pt-20'>
                <h2 className='text-xl sm:text-3xl mb-5'>Language:</h2>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    <Link to={'/category/english'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                            <p className='sm:text-2xl text-sm'>English</p>
                        </div>
                    </Link>
                    <Link to={'/category/hindi'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                            <p className='sm:text-2xl text-sm'>Hindi</p>
                        </div>
                    </Link>
                    <Link to={'/category/malayalam'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                            <p className='sm:text-2xl text-sm'>Malayalam</p>
                        </div>
                    </Link>
                    <Link to={'/category/korean'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                            <p className='sm:text-2xl text-sm'>Korean</p>
                        </div>
                    </Link>
                    <Link to={'/category/japanese'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-blue-300/10 hover:text-blue-300'>
                            <p className='sm:text-2xl text-sm'>Japanese</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='sm:px-20 sm:pt-0 px-5 pt-5'>
                <h2 className='text-xl sm:text-3xl mb-5'>Genre:</h2>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                    <Link to={'/category/action'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#FF3B30]/10 hover:text-[#FF3B30]'>
                            <p className='sm:text-2xl text-sm'>Action</p>
                        </div>
                    </Link>
                    <Link to={'/category/adventure'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#FF9500]/10 hover:text-[#FF9500]'>
                            <p className='sm:text-2xl text-sm'>Adventure</p>
                        </div>
                    </Link>
                    <Link to={'/category/comedy'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#FFD60A]/10 hover:text-[#FFD60A]'>
                            <p className='sm:text-2xl text-sm'>Comedy</p>
                        </div>
                    </Link>
                    <Link to={'/category/drama'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#8E8E93]/10 hover:text-[#8E8E93]'>
                            <p className='sm:text-2xl text-sm'>Drama</p>
                        </div>
                    </Link>
                    <Link to={'/category/horror'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#1C1C1E]/10 hover:text-[#51515e]'>
                            <p className='sm:text-2xl text-sm'>Horror</p>
                        </div>
                    </Link>
                    <Link to={'/category/thriller'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#5E5CE6]/10 hover:text-[#5E5CE6]'>
                            <p className='sm:text-2xl text-sm'>Thriller</p>
                        </div>
                    </Link>
                    <Link to={'/category/sci-fi'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#32ADE6]/10 hover:text-[#32ADE6]'>
                            <p className='sm:text-2xl text-sm'>Sci-Fi</p>
                        </div>
                    </Link>
                    <Link to={'/category/fantasy'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#A55EEA]/10 hover:text-[#A55EEA]'>
                            <p className='sm:text-2xl text-sm'>Fantasy</p>
                        </div>
                    </Link>
                    <Link to={'/category/romance'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#FF2D55]/10 hover:text-[#FF2D55]'>
                            <p className='sm:text-2xl text-sm'>Romance</p>
                        </div>
                    </Link>
                    <Link to={'/category/crime'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#5856D6]/10 hover:text-[#5856D6]'>
                            <p className='sm:text-2xl text-sm'>Crime</p>
                        </div>
                    </Link>
                    <Link to={'/category/mystery'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#3A3A3C]/10 hover:text-[#3A3A3C]'>
                            <p className='sm:text-2xl text-sm'>Mystery</p>
                        </div>
                    </Link>
                    <Link to={'/category/history'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#AC8E68]/10 hover:text-[#AC8E68]'>
                            <p className='sm:text-2xl text-sm'>History</p>
                        </div>
                    </Link>
                    <Link to={'/category/suspense'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#6E6E73]/10 hover:text-[#6E6E73]'>
                            <p className='sm:text-2xl text-sm'>Suspense</p>
                        </div>
                    </Link>
                    <Link to={'/category/biography'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#2ECC71]/10 hover:text-[#2ECC71]'>
                            <p className='sm:text-2xl text-sm'>Biography</p>
                        </div>
                    </Link>
                    <Link to={'/category/supernatural'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#B53471]/10 hover:text-[#B53471]'>
                            <p className='sm:text-2xl text-sm'>Supernatural</p>
                        </div>
                    </Link>
                    <Link to={'/category/musical'}>
                        <div className='sm:m-5 m-1 sm:h-[100px] h-10 rounded-xl flex justify-center items-center bg-white/10 hover:bg-[#F8A5C2]/10 hover:text-[#F8A5C2]'>
                            <p className='sm:text-2xl text-sm'>Musical</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    </>
  )
}

export default Category