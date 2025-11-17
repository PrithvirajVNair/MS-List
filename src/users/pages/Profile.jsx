import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Profile = () => {
  return (
    <>
        <Header/>
        <div className='bg-black min-h-screen text-white'>
            <div className='lg:grid grid-cols-7 min-h-screen place-content-center'>
                <div></div>
                <div className='col-span-5 p-10 rounded bg-white/10'>
                    <div className='lg:grid grid-cols-5'>
                        <div className='relative flex flex-col justify-center items-center'>
                            <div className='flex'>
                                <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='p-3' style={{ widows: '150px', height: '150px', borderRadius: '50%' }}/>
                                <label  htmlFor="edit-profile" className='absolute right-0 cursor-pointer'><FontAwesomeIcon icon={faPenToSquare} />
                                <input type="file" id='edit-profile' className='hidden' />
                                </label>
                            </div>
                            <h2 className='text-start'>Username</h2>
                        </div>
                        <div className='col-span-2 text-center text-blue-200'>
                            <h1 className='text-white underline mb-5 text-xl sm:text-2xl py-2'>Status</h1>
                            <Link to={'/watchlist'}><p className='text-sm sm:text-base'>Total :</p></Link>
                            <Link to={'/watchlist/watching'}><p className='text-sm sm:text-base'>Watching :</p></Link>
                            <Link to={'/watchlist/completed'}><p className='text-sm sm:text-base'>Completed :</p></Link>
                            <Link to={'/watchlist/onhold'}><p className='text-sm sm:text-base'>On Hold :</p></Link>
                            <Link to={'/watchlist/dropped'}><p className='text-sm sm:text-base'>Dropped :</p></Link>
                            <Link to={'/watchlist/planning'}><p className='text-sm sm:text-base'>Planning :</p></Link>
                        </div>
                        <div className='col-span-2 text-center'>
                            <h1 className='text-white underline mb-5 text-xl sm:text-2xl py-2'>Recently Added</h1>
                            <div className='h-[200px] overflow-hidden'>
                                <div className='flex rounded-xl bg-white/20 h-[100px]'>
                                    <div className='h-[100px] w-20'>
                                    <img className='w-full h-full object-fill rounded-l-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                                </div>
                                <div className='ms-5 text-start'>
                                    <h2>TITLE</h2>
                                    <p className='text-sm text-white/60'>Status :</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </>
  )
}

export default Profile