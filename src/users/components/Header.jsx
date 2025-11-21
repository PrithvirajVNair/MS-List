import { faBars, faBug, faCircleUser, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ({ home, watchlist, category, search, feedback }) => {

    const [toggleUser, setToggleUser] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='flex flex-col fixed w-full' style={{ zIndex: '999' }}>
            <div className='flex justify-between sm:px-10 px-5 bg-black/20 backdrop-blur-xs text-white py-2'>
                <div>
                    {home ? <a href='#' className='text-xl sm:text-2xl font-bold'><span className='text-blue-600'>MS</span> List</a> :
                        <a href='/home' className='text-xl sm:text-2xl font-bold'><span className='text-blue-600'>MS</span> List</a>}
                </div>

                {/* below is search button, toggle menu button and profile button/img for mobile */}
                <div className='flex md:hidden'>
                    <ul className='me-3 md:hidden flex'>
                        {!search && <li className={`hover:text-blue-300 ${search && 'text-blue-300'}`}><a href='/search' className='text-sm'><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</a></li>}
                    </ul>
                    <div className='flex md:hidden'>
                        <button className='me-3' onClick={() => {
                            setToggleMenu(!toggleMenu)
                            setToggleUser(false)
                        }}>{!toggleMenu ? <FontAwesomeIcon icon={faBars} className='text-xl' /> : <FontAwesomeIcon icon={faXmark} className='text-xl' />}</button>
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='cursor-pointer md:hidden block' style={{ widows: '30px', height: '30px', borderRadius: '50%' }} onClick={() => {
                        setToggleUser(!toggleUser)
                        setToggleMenu(false)
                    }} />
                </div>


                {/* following is the content of header for big screen */}
                <ul className='hidden md:flex items-center sm:text-2xl'>
                    {search ? <li className={`pe-10 hover:text-blue-300 ${search && 'text-blue-300'}`}><a href='#'><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${search && 'text-blue-300'}`}><a href='/search'><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</a></li>}

                    {home ? <li className={`pe-10 hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='#'>Home</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='/home'>Home</a></li>}

                    {category ? <li className={`pe-10 hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='#'>Category</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='/category'>Category</a></li>}

                    {watchlist ? <li className={`pe-10 hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='#'>Watchlist</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='/watchlist'>Watchlist</a></li>}

                    {feedback ? <li className={`pe-10 hover:text-blue-300 ${feedback && 'text-blue-300'}`}><a href='#'><FontAwesomeIcon icon={faBug} className='me-1' />Report</a></li> :
                        <li className={`pe-10 hover:text-blue-300 ${feedback && 'text-blue-300'}`}><a href='/feedback'><FontAwesomeIcon icon={faBug} className='me-1' />Report</a></li>}

                    {/* {watchlist && <button className='me-10 text-base py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>} */}

                    <li><img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-5 cursor-pointer' style={{ widows: '30px', height: '30px', borderRadius: '50%' }} onClick={() => setToggleUser(!toggleUser)} /></li>
                </ul>
            </div>


            {/* following is the toggle for menu (Mobile Responsive) */}
            {toggleMenu &&
                <div className='text-white/60 grid grid-cols-4'>
                    <div></div>
                    <div className='col-span-2 border rounded-xl backdrop-blur-xl'>
                        <ul className='flex flex-col justify-center items-center py-5'>
                            {home ? <li className={`hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='#'>Home</a></li> :
                                <li className={`hover:text-blue-300 ${home && 'text-blue-300'}`}><a href='/home'>Home</a></li>}
                            {category ? <li className={`hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='#'>Category</a></li> :
                                <li className={`hover:text-blue-300 ${category && 'text-blue-300'}`}><a href='/category'>Category</a></li>}
                            {watchlist ? <li className={`hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='#'>Watchlist</a></li> :
                                <li className={`hover:text-blue-300 ${watchlist && 'text-blue-300'}`}><a href='/watchlist'>Watchlist</a></li>}
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
                    <div className='flex flex-col border border-blue-300/40 py-3 w-50 rounded justify-center items-center backdrop-blur-xl'>
                        <Link to={'/profile/:username'}><button className='cursor-pointer hover:text-blue-400'>Profile</button></Link>
                        <Link to={'/login'}><button className='cursor-pointer hover:text-blue-400'>Log out</button></Link>
                    </div>
                </div>}
        </div>
    )
}

export default Header