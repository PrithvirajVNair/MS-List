import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI, loginAPI, googleLoginAPI, verifyOptAPI } from '../services/allAPIs'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'

const Authentication = ({ register, otp }) => {
    const navigate = useNavigate()
    const [otpverify, setOtpVerify] = useState("")
    const [otpEmail, setOtpEmail] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })
    // console.log(user);

    const handleRegister = async () => {
        const { email, password, username } = user
        if (!username || !email || !password) {
            toast.info("Fill All The Details...")
        }
        else if (!email.endsWith("@gmail.com")) {
            toast.warning("Please Enter Valid Email")
        }
        else {
            const result = await registerAPI(user)
            console.log(result);
            if (result.status == 200) {
                toast.success("Registration Successful!")
                // setOtpEmail(user.email)
                setUser({
                    email: "",
                    password: "",
                    username: ""
                })
                navigate('/login')
                // navigate('/verify-otp')
            }
            else if (result.status == 400) {
                toast.warning(result.response.data)
                setUser({
                    email: "",
                    password: "",
                    username: ""
                })
            }
            else {
                toast.warning("Server Side Error, try again later")
                setUser({
                    email: "",
                    password: "",
                    username: ""
                })
            }
        }
    }

    const handleLogin = async () => {
        const { email, password } = user
        setOtpEmail(email)
        if (!email || !password) {
            toast.info("Fill All The Details...")
        }
        else if (!email.endsWith("@gmail.com")) {
            toast.warning("Please Enter Valid Email")
        }
        else {
            const result = await loginAPI({ email, password })
            console.log(result);
            if (result.data) {
                sessionStorage.setItem("token", result.data.token)
                console.log(result.data.existingUser);

                toast.success(`Successfully Logged In`)
                setTimeout(() => {
                    if (result.data.existingUser.administrator) {
                        navigate('/admin-dashboard')
                    }
                    else {
                        navigate('/home')
                    }
                }, 3000)
            }
            // else if(result.status == 403){
            //     navigate(result.response.data)
            // }
            else if (result.status == 401) {
                toast.error(result.response.data)
                setUser({
                    email: "",
                    password: "",
                    username: ""
                })
            }
            else {
                toast.warning("Server Side Error, try again later")
                setUser({
                    email: "",
                    password: "",
                    username: ""
                })
            }
        }
    }

    const handleGoogleLogin = async (credentialResponse) => {
        const details = jwtDecode(credentialResponse.credential)
        // console.log(details);
        const result = await googleLoginAPI({ username: details.name, password: "googlePswd", email: details.email, photo: details.picture })
        console.log(result);
        if (result.data) {
            sessionStorage.setItem("token", result.data.token)
            toast.success(`Successfully Logged In`)
            setTimeout(() => {
                if (result.data.existingUser.administrator) {
                    navigate('/admin-dashboard')
                }
                else {
                    navigate('/home')
                }
            }, 3000)
        }
        else if (result.status == 401) {
            toast.error(result.response.data)
            setUser({
                email: "",
                password: "",
                username: ""
            })
        }
        else {
            toast.warning("Server Side Error, try again later")
            setUser({
                email: "",
                password: "",
                username: ""
            })
        }
    }

    const handleVerify = async () => {
        const reqBody = {
            email: otpEmail,
            otp: otpverify
        }
        const result = await verifyOptAPI(reqBody)
        console.log(result);
        if (result.status == 200) {
            navigate('/login')
            toast.success("Email Verification Successfull...")
        }
        else if (result.status == 404) {
            toast.warning(result.response.data)
        }
        else if (result.status == 400) {
            toast.warning(result.response.data)
        }
        else if (result.status == 403) {
            toast.warning(result.response.data)
        }
        else {
            toast.warning("Something Went Wrong!")
        }
        console.log(result);
    }

    return (
        <div className='bg-black text-white h-screen flex justify-center items-center'>
            <div className='grid grid-cols-12 w-full'>
                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                {otp ? <div className='rounded sm:my-5 py-5 flex justify-center items-center flex-col bg-white/10 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4'>
                    <h2 className='text-2xl font-bold mb-5'><span className='text-blue-600'>MS</span> List</h2>
                    <h2 className='sm:text-2xl text-xl'>Email Verification</h2>
                    <p>an otp has send to {user?.email || "email"}</p>
                    <p>This may take few minutes</p>
                    <div className='w-full px-10 mt-10'>
                        <div className='sm:text-base text-sm'>
                            <input value={otpverify} onChange={e => setOtpVerify(e.target.value)} id='password' type="number" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='OTP' />
                        </div>
                        <div className='sm:text-base text-sm'>
                            <button onClick={handleVerify} className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer w-full'>Verify</button>
                        </div>
                    </div>
                </div>
                    :
                    <div className='flex justify-center items-center col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4'>
                        <div className='rounded sm:my-5 py-5 flex justify-center items-center flex-col bg-white/10 md:w-110'>
                            <h2 className='text-2xl font-bold mb-5'><span className='text-blue-600'>MS</span> List</h2>
                            <h2 className='sm:text-2xl text-xl'>{register ? "Create a New Account" : "Welcome Back"}</h2>
                            <p className='text-white/60 sm:px-0 px-5 text-center sm:text-base text-sm'>{register ? 'Register to MS List and Create your Watchlist' : 'Sign In to MS List and Create your Watchlist'}</p>
                            <div className='w-full px-10 mt-10'>
                                <div className='sm:text-base text-sm'>
                                    <label className='' htmlFor="email">Email
                                        <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} id='email' type="email" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your email' />
                                    </label>
                                </div>
                                {
                                    register && <div className='mt-5 sm:text-base text-sm'>
                                        <label className='' htmlFor="username">Username
                                            <input value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} id='username' type="text" className='bg-white block w-full rounded text-black px-2 py-1 placeholder:text-gray-400' placeholder='Enter your username' />
                                        </label>
                                    </div>
                                }
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
                                <div className='sm:text-base text-sm flex justify-center items-center py-5'>
                                    <GoogleLogin
                                        onSuccess={credentialResponse => {
                                            // console.log(credentialResponse);
                                            handleGoogleLogin(credentialResponse)
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />
                                </div>
                                <div className=' flex justify-center'>
                                    {register ?
                                        <p className='text-white/60 text-xs sm:text-sm'>Existing User? <a href="/login" className='text-blue-300'>Sign In</a></p> :
                                        <p className='text-white/60 text-xs sm:text-sm'>New User? <a href="/register" className='text-blue-300'>Register</a></p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
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