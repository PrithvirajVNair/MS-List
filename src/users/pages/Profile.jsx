import { faCircleCheck, faComment, faPenToSquare, faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { jwtDecode } from 'jwt-decode'
import { userProfileUpdateContext } from '../../context/ContextShare'
import { getActivityAPI, getAUserAPI, getListCountAPI } from '../../services/allAPIs'
import { format } from 'timeago.js'

const Profile = () => {
    const [userData, setUserData] = useState({})
    const [token, setToken] = useState("")
    const navigate = useNavigate()
    // console.log(userData);
    const { setUserContextProfile } = useContext(userProfileUpdateContext)
    const [loading, setLoading] = useState(true)
    const [listCount, setListCount] = useState({})
    const [activity, setActivity] = useState([])

    const getProfile = async (email) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        // console.log(email);

        const result = await getAUserAPI(email, reqHeader)
        // console.log(result);
        setUserData(result.data)
        setLoading(false)
    }

    const getListCount = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getListCountAPI(reqHeader)
        // console.log(result);
        setListCount(result.data)
    }

    const getActivities = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getActivityAPI(reqHeader)
        console.log(result);
        setActivity(result.data)
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const userData = jwtDecode(sessionStorage.getItem("token"))
            const token = sessionStorage.getItem("token")
            setUserContextProfile(userData)
            setToken(token)
            getProfile(userData.userMail)
            getListCount()
            getActivities()
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <Header />
            <div className='bg-black min-h-screen text-white'>
                {
                    !loading ?
                        <div className='grid grid-cols-[1fr_3fr] h-screen pt-20'>
                            <div className=''>
                                <div className='flex justify-center items-center flex-col'>
                                    <img src={userData.profile} alt="no image" className='p-3' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                                    {/* <label htmlFor="edit-profile" className='cursor-pointer'><FontAwesomeIcon icon={faPenToSquare} />
                                        <input type="file" id='edit-profile' className='hidden' />
                                    </label> */}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h2 className=''>{userData.username}</h2>
                                    <div className='relative group ms-2 flex justify-center items-center'>
                                        <span className={`text-blue-500 text-xs ${userData.verified ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon className='' icon={faCircleCheck} /></span>
                                        <span className={`absolute translate-x-10 mb-1 bg-black/30 text-white text-xs p-1 rounded whitespace-nowrap opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 z-50 ${userData.verified ? 'inline-block' : 'hidden'} `}>
                                            Verified
                                        </span>
                                    </div>
                                </div>
                                <div className='rounded-xl flex flex-col items-center bg-white/10 p-2 m-3 h-20'>
                                    <h2 className='text-white/60'>BIO:</h2>
                                    <p className='text-center text-xs'>{userData.bio}</p>
                                </div>
                                <div className='col-span-2 flex flex-col justify-center items-center text-blue-200'>
                                    <h1 className='text-white mb-5  sm:text-lg py-2'>Watchlist Status</h1>
                                    <Link to={'/watchlist'}><p className='text-base'>Total : {listCount.allShows}</p></Link>
                                    <Link to={'/watchlist/planning'}><p className='text-sm sm:text-base'>Planning : {listCount.planning}</p></Link>
                                    <Link to={'/watchlist/watching'}><p className='text-sm sm:text-base'>Watching : {listCount.watching}</p></Link>
                                    <Link to={'/watchlist/completed'}><p className='text-sm sm:text-base'>Completed : {listCount.completed}</p></Link>
                                    <Link to={'/watchlist/onhold'}><p className='text-sm sm:text-base'>On Hold : {listCount.onhold}</p></Link>
                                    <Link to={'/watchlist/dropped'}><p className='text-sm sm:text-base'>Dropped : {listCount.dropped}</p></Link>
                                </div>
                            </div>
                            <div className='px-5'>
                                <h1 className='text-white mb-5 text-xl sm:text-2xl py-2'>Activities</h1>
                                <div className='h-120 overflow-hidden'>
                                    {
                                        activity?.length > 0 ?
                                            activity?.map((data, index) => (
                                                <div className='flex justify-between items-center rounded-xl bg-white/20 mb-3 p-1'>
                                                    <div className='ms-5 flex justify-center items-center'>
                                                        {data.category == "list" ?
                                                            <>
                                                                <div className='text-green-500'>
                                                                    <FontAwesomeIcon icon={faRectangleList} />
                                                                </div>

                                                                <div className='ms-5 text-start'>
                                                                    <h2>{userData.username} Added {data.showId.title} to Watchlist</h2>
                                                                    {/* <p className='text-sm text-white/60'>Status : {data.showId.status}</p> */}
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className='text-orange-500'>
                                                                    <FontAwesomeIcon icon={faComment} />
                                                                </div>
                                                                <div className='ms-5 text-start'>
                                                                    <h2>{userData.username} Commented on {data.commentId.showId.title}</h2>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                    <p className='me-5 text-white/60'>{format(data.createdAt)}</p>
                                                </div>
                                            ))
                                            :
                                            <p>No Activities</p>
                                    }
                                </div>
                            </div>

                        </div>
                        :
                        <div className='flex justify-center items-center h-screen'>
                            <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybHRsNGFzZnh0cWU4M2VkYWYzaXhpcHloaXl4YThtMWZyaXN2cG02byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/200w.gif" alt="" style={{ width: '100px' }} />
                        </div>
                }
            </div>
        </>
    )
}

export default Profile