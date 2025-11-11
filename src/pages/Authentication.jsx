import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Authentication = ({register}) => {
  return (
    <div className='bg-black text-white h-screen'>
        <div className='grid grid-cols-3 h-screen'>
            <div></div>
            <div className='rounded my-5 flex justify-center items-center flex-col bg-white/10'>
                <h2 className='text-2xl font-bold mb-5'><span className='text-blue-600'>MS</span> List</h2>
                <h2 className='text-2xl'>{register? "Create a New Account" :"Welcome Back"}</h2>
                <p className='text-white/60'>Register to MS List and Create your Watchlist</p>
                <div className='w-full px-10 mt-10'>
                    <div className=''>
                        <label className='' htmlFor="email">Email
                        <input id='email' type="email" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your email' />
                        </label>
                    </div>
                    {register &&
                        <div className='mt-5'>
                        <label className='' htmlFor="username">Username
                        <input id='username' type="text" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your username' />
                        </label>
                    </div>}
                    <div className='mt-5'>
                        <label className='' htmlFor="password">Password
                        <input id='password' type="password" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your password' />
                        </label>
                        {!register &&<a href="" className='flex justify-end text-blue-500 hover:text-blue-600'>Forgot Password?</a>}
                    </div>
                    <div className=''>
                        {register ?<button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer w-full'>Sign Up</button>:
                        <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer w-full'>Sign In</button>}
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border inline-block w-24 me-4'></div> OR <div className='border inline-block w-24 ms-4'></div>
                    </div>
                    <div className=''>
                        {register ?
                        <button className='py-2 px-5 rounded-xl my-5 bg-white/90 hover:bg-white text-black cursor-pointer w-full'><FontAwesomeIcon icon={faGoogle} className='me-1'/>Sign Up With Google</button>:
                        <button className='py-2 px-5 rounded-xl my-5 bg-white/90 hover:bg-white text-black cursor-pointer w-full'><FontAwesomeIcon icon={faGoogle} className='me-1'/>Sign In With Google</button>}
                    </div>
                    <div className=' flex justify-center'>
                        {register?
                            <p className='text-white/60 text-sm'>Existing User? <a href="/login" className='text-blue-300'>Sign In</a></p>:
                            <p className='text-white/60 text-sm'>New User? <a href="/register" className='text-blue-300'>Register</a></p>
                            }
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Authentication