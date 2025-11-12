import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ViewDetails = () => {
    return (
        <>
            <Header />
            <div className='min-h-screen bg-black sm:px-10 text-white sm:pt-20'>
                <div className='flex h-[400px] p-5 bg-white/10'>
                    <div className='min-w-[250px] h-full'>
                        <img className='w-full h-full object-fill' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                    </div>
                    <div className='px-5'>
                        <h1 className='text-3xl'>TITLE</h1>
                        <div className='h-[200px] overflow-y-auto'><p><span className='text-blue-300'>Description: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.</p>
                        </div>
                        <div className='p-3'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='flex justify-between'>
                            <button className='me-10 text-base py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>
                            <p className='text-white/60 me-2 mt-1 text-xl ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                        </div>
                    </div>
                </div>
                {/* comments */}
                <h1 className='mt-10 text-2xl'>Comments:</h1>
                <div className='flex flex-col min-h-[400px] p-10 border border-white/20'>
                    <div className='flex justify-start items-start w-full'>
                        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-5' style={{ widows: '40px', height: '40px', borderRadius: '50%' }} />
                        <input type="text" className='bg-white/10 py-1 px-2 text-white w-full rounded-xl placeholder:text-white/60' placeholder='Write a comment' />
                    </div>
                    <div className='mt-10 flex'>
                        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-3' style={{ widows: '40px', height: '40px', borderRadius: '50%' }} />
                        <div className='flex flex-col'>
                            <h5>Name</h5>
                            <p className='mt-3'>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewDetails