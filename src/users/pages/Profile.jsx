import { faCircleCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { jwtDecode } from 'jwt-decode'
import { userProfileUpdateContext } from '../../context/ContextShare'
import { getAUserAPI } from '../../services/allAPIs'

const Profile = () => {
    const [userData, setUserData] = useState({})
    const [token, setToken] = useState("")
    const navigate = useNavigate()
    console.log(userData);
    const { setUserContextProfile } = useContext(userProfileUpdateContext)

    const getProfile = async (email) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        console.log(email);

        const result = await getAUserAPI(email, reqHeader)
        console.log(result);
        setUserData(result.data)
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const userData = jwtDecode(sessionStorage.getItem("token"))
            const token = sessionStorage.getItem("token")
            setUserContextProfile(userData)
            setToken(token)
            getProfile(userData.userMail)
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Header />
            <div className='bg-black min-h-screen text-white'>
                <div className='lg:grid grid-cols-7 min-h-screen place-content-center'>
                    <div></div>
                    <div className='col-span-5 p-10 rounded bg-white/10'>
                        <div className='lg:grid grid-cols-5'>
                            <div className='relative flex flex-col justify-center items-center'>
                                <div className='flex justify-center items-center flex-col'>
                                    <img src={userData.profile} alt="no image" className='p-3' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                                    <label htmlFor="edit-profile" className='absolute right-0 cursor-pointer'><FontAwesomeIcon icon={faPenToSquare} />
                                        <input type="file" id='edit-profile' className='hidden' />
                                    </label>
                                </div>
                                <div className='flex'>
                                    <h2 className='text-start'>{userData.username}</h2>
                                    <div className='relative group ms-2'>
                                        <span className={`text-blue-500 ${userData.verified ? 'inline-block' : 'hidden'} group`}><FontAwesomeIcon icon={faCircleCheck} /></span>
                                        <span className={`absolute mb-1 bg-black text-white text-xs p-1 rounded whitespace-nowrap opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-50 ${userData.verified ? 'inline-block' : 'hidden'} `}>
                                            Verified
                                        </span>
                                    </div>
                                </div>
                                <div className='rounded-xl w-full flex flex-col justify-center items-center bg-white/10 p-2'>
                                    <h2 className='text-white/60'>BIO:</h2>
                                    <p className='text-center text-xs'>{userData.bio}</p>

                                </div>
                            </div>
                            <div className='col-span-2 flex flex-col justify-center items-center text-blue-200'>
                                <h1 className='text-white mb-5 text-xl sm:text-2xl py-2'>Status</h1>
                                <Link to={'/watchlist'}><p className='text-sm sm:text-base'>Total :</p></Link>
                                <Link to={'/watchlist/planning'}><p className='text-sm sm:text-base'>Planning :</p></Link>
                                <Link to={'/watchlist/watching'}><p className='text-sm sm:text-base'>Watching :</p></Link>
                                <Link to={'/watchlist/completed'}><p className='text-sm sm:text-base'>Completed :</p></Link>
                                <Link to={'/watchlist/onhold'}><p className='text-sm sm:text-base'>On Hold :</p></Link>
                                <Link to={'/watchlist/dropped'}><p className='text-sm sm:text-base'>Dropped :</p></Link>
                            </div>
                            <div className='col-span-2 text-center'>
                                <h1 className='text-white mb-5 text-xl sm:text-2xl py-2'>Recently Added</h1>
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