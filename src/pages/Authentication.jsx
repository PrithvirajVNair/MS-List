import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI,loginAPI } from '../services/allAPIs'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const Authentication = ({ register }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    console.log(user);

    const handleRegister = async () => {
        const { email, password, username } = user
        if (!username || !email || !password) {
            toast.info("Fill All The Details...")
        }
        else {
            const result = await registerAPI(user)
            console.log(result);
            if(result.status == 200){
                toast.success("Registration Successful!")
                setUser({
                    email:"",
                    password:"",
                    username:""
                })
                navigate('/login')
            }
            else if(result.status == 400){
                toast.warning(result.response.data)
                setUser({
                    email:"",
                    password:"",
                    username:""
                })
            }
            else{
                toast.warning("Server Side Error, try again later")
                setUser({
                    email:"",
                    password:"",
                    username:""
                })
            }
        }
    }

    const handleLogin = async() => {
        const {username,password} = user
        if(!username || !password){
            toast.info("Fill All The Details...")
        }
        else{
            const result = await loginAPI({username,password})
            localStorage.setItem("username", result.data.username)
            console.log(result);
            if(result.data){
                // toast.success(`Welcome ${result.data.username}`)
                navigate('/home')
            }
            else if(result.status == 401){
                toast.error(result.response.data)
                setUser({
                    email:"",
                    password:"",
                    username:""
                })
            }
            else{
                toast.warning("Server Side Error, try again later")
                setUser({
                    email:"",
                    password:"",
                    username:""
                })
            }
        }
    }

    return (
        <div className='bg-black text-white h-screen'>
            <div className='grid grid-cols-12 h-screen'>
                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                <div className='rounded sm:my-5 sm:py-0 py-5 flex justify-center items-center flex-col bg-white/10 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4'>
                    <h2 className='text-2xl font-bold mb-5'><span className='text-blue-600'>MS</span> List</h2>
                    <h2 className='sm:text-2xl text-xl'>{register ? "Create a New Account" : "Welcome Back"}</h2>
                    <p className='text-white/60 sm:px-0 px-5 text-center sm:text-base text-sm'>{register ? 'Register to MS List and Create your Watchlist' : 'Sign In to MS List and Create your Watchlist'}</p>
                    <div className='w-full px-10 mt-10'>
                        {register &&
                            <div className='sm:text-base text-sm'>
                                <label className='' htmlFor="email">Email
                                    <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} id='email' type="email" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your email' />
                                </label>
                            </div>
                        }
                        <div className='mt-5 sm:text-base text-sm'>
                            <label className='' htmlFor="username">Username
                                <input value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} id='username' type="text" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your username' />
                            </label>
                        </div>
                        <div className='mt-5 sm:text-base text-sm'>
                            <label className='' htmlFor="password">Password
                                <input value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} id='password' type="password" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your password' />
                            </label>
                            {!register && <a href="" className='flex justify-end text-blue-500 hover:text-blue-600'>Forgot Password?</a>}
                        </div>
                        <div className='sm:text-base text-sm'>
                            {register ? <button onClick={handleRegister} className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer w-full'>Sign Up</button> :
                                <button onClick={handleLogin} className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer w-full'>Sign In</button>}
                        </div>
                        <div className='flex justify-center items-center sm:text-base text-sm'>
                            <div className='border inline-block w-24 me-4'></div> OR <div className='border inline-block w-24 ms-4'></div>
                        </div>
                        <div className='sm:text-base text-sm'>
                            {register ?
                                <button className='py-2 px-5 rounded-xl my-5 bg-white/90 hover:bg-white text-black cursor-pointer w-full'><FontAwesomeIcon icon={faGoogle} className='me-1' />Sign Up With Google</button> :
                                <button className='py-2 px-5 rounded-xl my-5 bg-white/90 hover:bg-white text-black cursor-pointer w-full'><FontAwesomeIcon icon={faGoogle} className='me-1' />Sign In With Google</button>}
                        </div>
                        <div className=' flex justify-center'>
                            {register ?
                                <p className='text-white/60 text-xs sm:text-sm'>Existing User? <a href="/login" className='text-blue-300'>Sign In</a></p> :
                                <p className='text-white/60 text-xs sm:text-sm'>New User? <a href="/register" className='text-blue-300'>Register</a></p>
                            }
                        </div>
                    </div>
                </div>
                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}

export default Authentication