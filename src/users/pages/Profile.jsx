import { faCircleCheck, faComment, faPenToSquare, faRectangleList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { jwtDecode } from 'jwt-decode'
import { userProfileUpdateContext } from '../../context/ContextShare'
import { editProfileAPI, getActivityAPI, getAUserAPI, getAUserWithEmailAPI, getListCountAPI } from '../../services/allAPIs'
import { format } from 'timeago.js'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Bounce, toast, ToastContainer } from 'react-toastify'

const Profile = () => {
    const [userData, setUserData] = useState({})
    const [token, setToken] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    const { setUserContextProfile } = useContext(userProfileUpdateContext)
    const [loading, setLoading] = useState(true)
    const [listCount, setListCount] = useState({})
    const [activity, setActivity] = useState([])
    const [toogleEdit, setToogleEdit] = useState(false)
    const [tempProfilePicture, setTempProfilePicture] = useState("")
    const [profileEditStatus,setProfileEditStatus] = useState({})
    const [tempUserData,setTempUserData] = useState({})
    const [editProfile, setEditProfile] = useState({
        id:"",
        email:"",
        username: "",
        bio: "",
        profile: ""
    })

    const getProfile = async (email) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const buttonResult = await getAUserWithEmailAPI(email,reqHeader)
        setTempUserData(buttonResult.data)
        const result = await getAUserAPI(id, reqHeader)
        setUserData(result.data)
        setLoading(false)
        setEditProfile({ ...editProfile,id:result.data._id, email:result.data.email,username: result.data.username, bio: result.data.bio, profile: result.data.profile })
    }

    const getListCount = async () => {
        const result = await getListCountAPI(id)
        setListCount(result.data)
    }

    const getActivities = async () => {
        const result = await getActivityAPI(id)
        setActivity(result.data)
    }

    const handleEdit = async() => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await editProfileAPI(editProfile,reqHeader)
        if(result.status == 200){
        setToogleEdit(false)
        setProfileEditStatus(result);
        toast.success("Profile Updated")
        }
        else{
            toast.warning("Something Went Wrong!")
        }
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
    }, [profileEditStatus,id])

    return (
        <>
            <Header />
            <div className='bg-black min-h-screen text-white'>
                {
                    !loading ?
                        <div className='md:grid grid-cols-[1fr_3fr] min-h-screen pt-20'>
                            <div className='flex flex-col justify-center items-center px-5'>
                                <div className='flex justify-center items-center flex-col'>
                                    <img src={userData.profile} alt="no image" className='p-3' style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                                    {/* <label htmlFor="edit-profile" className='cursor-pointer'><FontAwesomeIcon icon={faPenToSquare} />
                                        <input type="file" id='edit-profile' className='hidden' />
                                    </label> */}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <h2 className='2xl:text-xl'>{userData.username}</h2>
                                    <div className='relative group ms-2 flex justify-center items-center'>
                                        <span className={`text-blue-500 text-xs ${userData.verified ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon className='' icon={faCircleCheck} /></span>
                                        <span className={`absolute translate-x-10 mb-1 bg-black/30 text-white text-xs p-1 rounded whitespace-nowrap opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 z-50 ${userData.verified ? 'inline-block' : 'hidden'} `}>
                                            Verified
                                        </span>
                                    </div>
                                </div>
                                <div className='rounded-xl flex flex-col items-center bg-white/10 p-2 m-3 h-20 w-full'>
                                    <h2 className='text-white/60'>BIO:</h2>
                                    <p className='text-center text-xs'>{userData.bio}</p>
                                </div>
                                <div className='col-span-2 flex flex-col justify-center items-center text-blue-200 md:text-base text-lg'>
                                    <h1 className='text-white mb-5 text-sm sm:text-lg py-2'>Watchlist Status</h1>
                                    <Link to={'/watchlist'}><p className='text-xs md:text-base'>Total : {listCount.allShows}</p></Link>
                                    <Link to={'/watchlist/planning'}><p className='text-xs md:text-base'>Planning : {listCount.planning}</p></Link>
                                    <Link to={'/watchlist/watching'}><p className='text-xs md:text-base'>Watching : {listCount.watching}</p></Link>
                                    <Link to={'/watchlist/completed'}><p className='text-xs md:text-base'>Completed : {listCount.completed}</p></Link>
                                    <Link to={'/watchlist/onhold'}><p className='text-xs md:text-base'>On Hold : {listCount.onhold}</p></Link>
                                    <Link to={'/watchlist/dropped'}><p className='text-xs md:text-base'>Dropped : {listCount.dropped}</p></Link>
                                </div>
                                {
                                    tempUserData._id === id &&
                                    <div className='py-5'>
                                    <button onClick={() => setToogleEdit(true)} className='bg-blue-500 text-xs sm:text-sm px-2 py-1 rounded cursor-pointer hover:bg-blue-600'>Edit Profile</button>
                                </div>}
                            </div>
                            <div className='md:px-5 px-3'>
                                <h1 className='text-white mb-5 sm:text-lg py-5 md:py-2 w-full text-center md:text-left md:text-xl  text-sm'>Activities:</h1>
                                <div className='h-120 overflow-hidden'>
                                    {
                                        activity?.length > 0 ?
                                            activity?.map((data, index) => (
                                                <div className='flex justify-between items-center rounded-xl bg-white/20 mb-3 p-1'>
                                                    <div className='md:ms-5 ms-2 flex justify-center items-center md:text-base text-[10px]'>
                                                        {data.category == "list" ?
                                                            <>
                                                                <div className='text-green-500'>
                                                                    <FontAwesomeIcon icon={faRectangleList} />
                                                                </div>

                                                                <div className='md:ms-5 ms-2 text-start'>
                                                                    <h2>{userData.username} Added {data.showId?.title} to Watchlist</h2>
                                                                    {/* <p className='text-sm text-white/60'>Status : {data.showId.status}</p> */}
                                                                </div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className='text-orange-500'>
                                                                    <FontAwesomeIcon icon={faComment} />
                                                                </div>
                                                                <div className='md:ms-5 ms-2 text-start'>
                                                                    <h2>{userData.username} Commented on {data.commentId?.showId.title}</h2>
                                                                </div>
                                                            </>
                                                        }
                                                    </div>
                                                    <p className='md:me-5 me-2 text-white/60 md:text-base text-[10px]'>{format(data.createdAt)}</p>
                                                </div>
                                            ))
                                            :
                                            <div className='flex justify-center md:justify-between items-center rounded-xl bg-white/20 mb-3 p-1'>
                                                <div className='ms-5 flex justify-center items-center'>
                                                    <p className='text-center md:text-base text-xs'>No Activities</p>
                                                </div>
                                            </div>
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
            {
                toogleEdit &&
                <div className='fixed inset-0 bg-black/60 text-white h-screen flex justify-center items-center'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-0'></div>
                        <div className='p-5 sm:p-10 backdrop-blur-xl col-span-12'>
                            <div className='flex flex-col justify-center items-center gap-5'>
                                <div className='flex flex-col justify-center items-center gap-2 text-sm sm:text-base'>
                                    <h3>Current Profile</h3>
                                    <Stack>
                                        <img className='w-[100px]' style={{ borderRadius: '50%' }} alt="profile" src={userData.profile} />
                                    </Stack>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-sm sm:text-base'>
                                    <h3>Edit Profile</h3>
                                    <div className='flex flex-wrap sm:flex-nowrap gap-5 overflow-x-scroll hover-scroll-lg'>
                                        <img onClick={
                                            () => setEditProfile({ ...editProfile, profile: "https://avatarfiles.alphacoders.com/333/thumb-1920-333977.jpg" }, setTempProfilePicture("ironman"))
                                        } className={`w-[50px] md:w-[100px] cursor-pointer ${tempProfilePicture == "ironman" && "border border-blue-400"}`} style={{ borderRadius: '50%' }} alt="ironman" src="https://avatarfiles.alphacoders.com/333/thumb-1920-333977.jpg" />
                                        <img onClick={
                                            () => setEditProfile({ ...editProfile, profile: "https://i.pinimg.com/736x/8c/9b/07/8c9b07e5f25b7776190bf9de4da60c47.jpg" }, setTempProfilePicture("gojo"))
                                        } className={`w-[50px] md:w-[100px] cursor-pointer ${tempProfilePicture == "gojo" && "border border-blue-400"}`} style={{ borderRadius: '50%' }} alt="gojo" src="https://i.pinimg.com/736x/8c/9b/07/8c9b07e5f25b7776190bf9de4da60c47.jpg" />
                                        <img onClick={
                                            () => setEditProfile({ ...editProfile, profile: "https://wallpapers-clan.com/wp-content/uploads/2022/09/dragon-ball-goku-pfp-1.jpg" }, setTempProfilePicture("goku"))
                                        } className={`w-[50px] md:w-[100px] cursor-pointer ${tempProfilePicture == "goku" && "border border-blue-400"}`} style={{ borderRadius: '50%' }} alt="goku" src="https://wallpapers-clan.com/wp-content/uploads/2022/09/dragon-ball-goku-pfp-1.jpg" />
                                        <img onClick={
                                            () => setEditProfile({ ...editProfile, profile: "https://media.craiyon.com/2025-08-23/zcDDv_pFTPWswRitXg3pYA.webp" }, setTempProfilePicture("mouse"))
                                        } className={`w-[50px] md:w-[100px] cursor-pointer ${tempProfilePicture == "mouse" && "border border-blue-400"}`} style={{ borderRadius: '50%' }} alt="mouse" src="https://media.craiyon.com/2025-08-23/zcDDv_pFTPWswRitXg3pYA.webp" />
                                        <img onClick={
                                            () => setEditProfile({ ...editProfile, profile: "https://i.pinimg.com/originals/47/12/8f/47128f45131fd514adc6d0a1c0e121e9.jpg" }, setTempProfilePicture("knight"))
                                        } className={`w-[50px] md:w-[100px] cursor-pointer ${tempProfilePicture == "knight" && "border border-blue-400"}`} style={{ borderRadius: '50%' }} alt="knight" src="https://i.pinimg.com/originals/47/12/8f/47128f45131fd514adc6d0a1c0e121e9.jpg" />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-sm sm:text-base'>
                                    <h3>Username</h3>
                                    <input className='text-center border border-[#ffffff2e]' value={editProfile.username} onChange={(e) => setEditProfile({ ...editProfile, username: e.target.value })} type="text" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2 text-sm sm:text-base'>
                                    <h3>Bio</h3>
                                    <textarea className='text-center border border-[#ffffff2e]' value={editProfile.bio} onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })} type="text" />
                                </div>
                                <div className='flex justify-end items-end w-full'>
                                    <button onClick={() => setToogleEdit(false)} className='bg-orange-500 text-xs sm:text-sm px-2 py-1 rounded cursor-pointer hover:bg-orange-600 me-3'>Cancel</button>
                                    <button onClick={handleEdit} className='bg-blue-500 text-xs sm:text-sm px-2 py-1 rounded cursor-pointer hover:bg-blue-600'>Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-0'></div>
                    </div>
                </div>
            }
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
        </>
    )
}

export default Profile