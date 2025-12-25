import { faBars, faBug, faCircleUser, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { userProfileUpdateContext } from '../../context/ContextShare'
import { jwtDecode } from 'jwt-decode'
import { getAUserAPI, getAUserWithEmailAPI } from '../../services/allAPIs'

const Header = ({ home, watchlist, category, search, feedback, mylist }) => {

    const [toggleUser, setToggleUser] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const { userContextProfile } = useContext(userProfileUpdateContext)
    const [token, setToken] = useState("")
    const [userData, setUserData] = useState({})
    

    const [userProfile, setUserProfile] = useState(sessionStorage.getItem("profile")) 

    const getProfile = async (email) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAUserWithEmailAPI(email, reqHeader)
        setUserData(result.data)
    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const userData = jwtDecode(sessionStorage.getItem("token"))
            const token = sessionStorage.getItem("token")
            setToken(token)
            getProfile(userData.userMail)
        }
    }, [userContextProfile])

    const handleLogout = () => {
        sessionStorage.clear()
    }

    return (
        <div className='flex flex-col fixed w-full' style={{ zIndex: '999' }}>
            <div className='flex justify-between 2xl:px-15 sm:px-10 px-5 bg-black/20 backdrop-blur-xs text-white py-2 2xl:py-4'>
                <div>
                    {home ? <a href='#' className='text-xl sm:text-2xl 2xl:text-xl font-bold'><span className='text-blue-600'>MS</span> List</a> :
                        <a href='/home' className='text-xl sm:text-2xl 2xl:text-xl font-bold'><span className='text-blue-600'>MS</span> List</a>}
                </div>

                {/* below is search button, toggle menu button and profile button/img for mobile */}
                <div className='flex lg:hidden'>
                    <ul className='me-3 lg:hidden flex'>
                        {!search && <li className={`hover:text-blue-300 ${search && 'text-blue-300'}`}><a href='/search' className='text-sm'><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</a></li>}
                    </ul>
                    <div className='flex lg:hidden'>
                        <button className='me-3' onClick={() => {
                            setToggleMenu(!toggleMenu)
                            setToggleUser(false)
                        }}>{!toggleMenu ? <FontAwesomeIcon icon={faBars} className='text-xl' /> : <FontAwesomeIcon icon={faXmark} className='text-xl' />}</button>
                    </div>
                    <img src={userData.profile} alt="U" className='cursor-pointer lg:hidden block' style={{ widows: '30px', height: '30px', borderRadius: '50%' }} onClick={() => {
                        setToggleUser(!toggleUser)
                        setToggleMenu(false)
                    }} />
                </div>


                {/* following is the content of header for big screen */}
                <ul className='hidden lg:flex items-center text-xl 2xl:text-xl'>
                    {search ? <li className={`pe-10 hover:text-blue-300 ${search && 'text-blue-300'}`}><a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${search && 'text-blue-300'}`}><a href='/search'><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</a></li>}

                    {home ? <li className={`pe-10 hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='#'>Home</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='/home'>Home</a></li>}

                    {category ? <li className={`pe-10 hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='#'>Category</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='/category'>Category</a></li>}

                    {watchlist ? <li className={`pe-10 hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='#'>Watchlist</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='/watchlist'>Watchlist</a></li>}

                    {mylist ? <li className={`pe-10 hover:text-blue-300 ${mylist && 'text-blue-300'}`}><a href='#'>My List</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${mylist && 'text-blue-300'}`}><a href='/mylist'>My List</a></li>}

                    {feedback ? <li className={`pe-10 hover:text-blue-300 ${feedback && 'text-blue-300'}`}><a href='#'><FontAwesomeIcon icon={faBug} className='me-1' />Report</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${feedback && 'text-blue-300'}`}><a href='/feedback'><FontAwesomeIcon icon={faBug} className='me-1' />Report</a></li>}

                    {/* {watchlist && <button className='me-10 text-base py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>} */}

                    <li><img src={userData.profile} alt="U" className='me-5 cursor-pointer w-[30px] 2xl:w-' style={{  borderRadius: '50%' }} onClick={() => setToggleUser(!toggleUser)} /></li>
                </ul>
            </div>


            {/* following is the toggle for menu (Mobile Responsive) */}
            {toggleMenu &&
                <div className='text-white/60 grid grid-cols-4'>
                    <div></div>
                    <div className='col-span-2 bg-white/10 rounded-xl backdrop-blur-xl'>
                        <ul className='flex flex-col justify-center items-center py-5'>
                            {home ? <li className={`hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='#'>Home</a></li> :
                                <li className={`hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='/home'>Home</a></li>}
                            {category ? <li className={`hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='#'>Category</a></li> :
                                <li className={`hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='/category'>Category</a></li>}
                            {watchlist ? <li className={`hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='#'>Watchlist</a></li> :
                                <li className={`hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='/watchlist'>Watchlist</a></li>}
                            {mylist ? <li className={`hover:text-blue-300 ${mylist && 'text-blue-300'}`}><a href='#'>My List</a></li> :
                                <li className={`hover:text-blue-300 ${mylist && 'text-blue-300'}`}><a href='/mylist'>My List</a></li>}
                            {feedback ? <li className={`hover:text-blue-300 ${feedback && 'text-blue-300'}`}><a href='#'><FontAwesomeIcon icon={faBug} className='me-1' />Report</a></li> :
                                <li className={`hover:text-blue-300 ${feedback && 'text-blue-300'}`}><a href='/feedback'><FontAwesomeIcon icon={faBug} className='me-1' />Report</a></li>}
                            {/* {watchlist && <button className='sm:text-base text-xs mt-2 py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>} */}
                        </ul>
                    </div>
                    <div></div>
                </div>
            }


            {/* following is the toggle for profile (Mobile Responsive) */}
            {toggleUser &&
                <div className='flex justify-end me-5 text-white/60'>
                    <div className='flex flex-col py-3 w-50 bg-white/10 rounded justify-center items-center backdrop-blur-xl text-base 2xl:text-xl'>
                        <Link to={`/profile/${userData._id}`}><button className='cursor-pointer hover:text-blue-400'>Profile</button></Link>
                        <Link to={'/login'}><button onClick={handleLogout} className='cursor-pointer hover:text-blue-400'>Log out</button></Link>
                    </div>
                </div>}
        </div>
    )
}

export default Header