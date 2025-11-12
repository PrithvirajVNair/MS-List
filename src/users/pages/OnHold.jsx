import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import WatchlistCommon from '../components/WatchlistCommon'

const OnHold = () => {
    return (
        <>
            <WatchlistCommon onhold />
            <div className='min-h-screen bg-black text-white'>
                <div className='w-full grid sm:grid-cols-5 grid-cols-2 sm:px-20'>
                    <div className='bg-white/10 min-h-50 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>End Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Status : Planning</p>
                            </div>
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <p className='text-xs'>Summary</p>
                            <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>End Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Status : Planning</p>
                            </div>
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <p className='text-xs'>Summary</p>
                            <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>End Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Status : Planning</p>
                            </div>
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <p className='text-xs'>Summary</p>
                            <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>End Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Status : Planning</p>
                            </div>
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <p className='text-xs'>Summary</p>
                            <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>End Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Status : Planning</p>
                            </div>
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <p className='text-xs'>Summary</p>
                            <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>End Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Status : Planning</p>
                            </div>
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <p className='text-xs'>Summary</p>
                            <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>End Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs sm:ps-5'>Status : Planning</p>
                            </div>
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                            <p className='text-xs'>Summary</p>
                            <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnHold