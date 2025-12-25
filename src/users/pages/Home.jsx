import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import cbg from '../../assets/IM2024001_Yu-crop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { getFeaturedShowAPI, getMostRatedShowAPI, getPopularShowAPI, getRecentShowAPI } from '../../services/allAPIs'

const Home = () => {

    const [recentShows, setRecentShows] = useState([])
    const [popularShows, setPopularShows] = useState([])
    const [mostRatedShows, setMostRatedShows] = useState([])
    const [featuredShows, setFeaturedShows] = useState([])
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState("")
    console.log(featuredShows);


    // for carosuel
    // pagination
    const [currenntPage, setCurrentPage] = useState(1)
    const showsPerPage = 1
    const totalPages = Math.ceil(featuredShows?.length / showsPerPage)
    const currenntPageLastIndex = currenntPage * showsPerPage
    const currenntPageFirstIndex = currenntPageLastIndex - showsPerPage
    const visibleShows = featuredShows?.slice(currenntPageFirstIndex, currenntPageLastIndex)

    const navigateNext = () => {
        if (currenntPage != totalPages) {
            setCurrentPage(currenntPage + 1)
        }
        else{
            setCurrentPage(1)
        }
    }
    const navigateBack = () => {
        if (currenntPage != 1) {
            setCurrentPage(currenntPage - 1)
        }
        else{
            setCurrentPage(totalPages)
        }
    }


    const getShows = async () => {
        const recentResult = await getRecentShowAPI()
        const mostRatedResult = await getMostRatedShowAPI()
        const popularResult = await getPopularShowAPI()
        const featuredResult = await getFeaturedShowAPI()


        setRecentShows(recentResult.data)
        setMostRatedShows(mostRatedResult.data)
        setPopularShows(popularResult.data)
        setFeaturedShows(featuredResult.data)
        setLoading(false)
    }
    // console.log(recentShows);


    useEffect(() => {
        getShows()
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
        }
    }, [])

    useEffect(() => {
        if (featuredShows.length === 0) return

        const interval = setInterval(() => {
            setCurrentPage(prev =>
                prev === totalPages ? 1 : prev + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [featuredShows, totalPages])


    return (
        <>
            <Header home />
            {
                !loading ?
                    <div className='bg-black min-h-screen text-white pt-15'>

                        {/* carousel */}
                        {visibleShows?.map((shows, index) => (
                            <div className='sm:pt-0 mx-3 sm:mx-13 aspect-6/3 rounded-xl relative'>
                                <div className='w-full h-full'>
                                    <img src={shows.coverUrl} alt="" className='bg-cover bg-center w-full h-full object-fill rounded-xl' />
                                </div>
                                <div className='bg-black/60 absolute inset-0'>
                                    <div className='w-full h-full flex justify-between items-end'>
                                        <div className='sm:mx-10 sm:my-20 mx-2 my-2 flex flex-col gap-2'>
                                            <h2 className='sm:text-4xl 2xl:text-5xl'>{shows.title}</h2>
                                            <p className='hidden md:flex text-white/60'>{shows.summary}</p>
                                            <p className='text-white/60 sm:text-base text-xs'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{shows.score}/10</p>
                                            <div>
                                                {
                                                    shows.genre.map(genre => (
                                                        <span className={`bg-black/60 rounded-2xl px-1 text-sm me-2 ${genre == "Action" ? 'text-[#FF3B30]' : genre == "Adventure" ? 'text-[#FF9500]' : genre == "Comedy" ? 'text-[#FFD60A]' : genre == "Drama" ? 'text-[#8E8E93]' : genre == "Horror" ? 'text-[#51515e]' : genre == "Thriller" ? 'text-[#5E5CE6]' : genre == "Sci-Fi" ? 'text-[#32ADE6]' : genre == "Fantasy" ? 'text-[#A55EEA]' : genre == "Romance" ? 'text-[#FF2D55]' : genre == "Mystery" ? 'text-[#3A3A3C]' : genre == "History" ? 'text-[#AC8E68]' : genre == "Suspense" ? 'text-[#6E6E73]' : genre == "Biography" ? 'text-[#2ECC71]' : genre == "Supernatural" ? 'text-[#B53471]' : genre == "Musical" ? 'text-[#F8A5C2]' : genre == "Crime" ? 'text-[#5856D6]' : 'text-white'}`}>{genre}</span>
                                                    ))
                                                }
                                            </div>
                                            <div className=''>
                                                <Link to={`/details/${shows._id}`}><button className='sm:py-2 sm:px-5 px-2 py-1 sm:text-base text-xs rounded-xl bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer me-3'>View Details</button></Link>
                                                {/* <Link to={'/:id/addtolistz'}><button className='sm:py-2 sm:px-5 px-2 py-1 sm:text-base text-xs rounded-xl sm:my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer'>Add to List</button></Link> */}
                                            </div>
                                        </div>
                                        <div className='text-sm sm:text-2xl 2xl:text-3xl 2xl:m-15 sm:m-10 m-2'>
                                            <FontAwesomeIcon className='cursor-pointer' onClick={navigateBack} icon={faChevronLeft} /> {currenntPage} / {totalPages} <FontAwesomeIcon className='cursor-pointer' onClick={navigateNext} icon={faChevronRight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }

                        {/* Popular */}
                        <div className='sm:px-10 px-3 sm:mt-2 2xl:mt-5'>
                            <h2 className='sm:text-2xl 2xl:text-3xl sm:pt-0 pt-5 px-1 sm:px-3 2xl:px-5'>Popular:</h2>
                            <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                                {
                                    popularShows?.map((show, index) => (
                                        <div key={index} className='bg-white/10 aspect-4/6 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                                            <div className='m-1 sm:m-2 aspect-3/4 overflow-hidden rounded-t-xl sm:rounded-xl'>
                                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{show.score}/10</p>
                                                <img className='w-full object-fill rounded-t-xl sm:rounded-xl' src={show.imageUrl} alt="" />
                                            </div>
                                            <h5 className='px-2 sm:px-3 2xl:text-[18px] sm:text-base text-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>{show.title}</h5>
                                            <div className='hidden absolute inset-0 bg-black/90 sm:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                                <p className='text-xs px-5 text-center overflow-auto 2xl:text-base'>{show.summary}</p>
                                                <Link to={`/details/${show?._id}`}><button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs 2xl:text-base'>View Details</button></Link>
                                            </div>
                                            <Link to={`/details/${show?._id}`}>
                                                <div className='block sm:hidden absolute inset-0'>

                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Most Rated */}
                        <div className='sm:px-10 px-3 sm:mt-2 2xl:mt-5'>
                            <h2 className='sm:text-2xl 2xl:text-3xl sm:pt-0 pt-5 px-1 sm:px-3 2xl:px-5'>Most Rated:</h2>
                            <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                                {
                                    mostRatedShows?.map((show, index) => (
                                        <div key={index} className='bg-white/10 aspect-4/6  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                                            <div className='m-1 sm:m-2 aspect-3/4 overflow-hidden rounded-t-xl sm:rounded-xl'>
                                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{show.score}/10</p>
                                                <img className='w-full object-fill rounded-t-xl sm:rounded-xl' src={show.imageUrl} alt="" />
                                            </div>
                                            <h5 className='px-3 2xl:text-[18px] sm:text-base text-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>{show.title}</h5>
                                            <div className='hidden absolute inset-0 bg-black/90 sm:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                                <p className='text-xs 2xl:text-base px-5 text-center overflow-auto'>{show.summary}</p>
                                                <Link to={`/details/${show?._id}`}><button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs 2xl:text-base'>View Details</button></Link>
                                            </div>
                                            <Link to={`/details/${show?._id}`}>
                                                <div className='block sm:hidden absolute inset-0'>

                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Recent */}
                        <div className='sm:px-10 px-3 sm:mt-2 2xl:mt-5'>
                            <h2 className='sm:text-2xl 2xl:text-3xl sm:pt-0 pt-5 px-1 sm:px-3 2xl:px-5'>Recently Added:</h2>
                            <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                                {
                                    recentShows?.map((show, index) => (
                                        <div key={index} className='bg-white/10 aspect-4/6  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                                            <div className='m-1 sm:m-2 aspect-3/4 overflow-hidden rounded-t-xl sm:rounded-xl'>
                                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{show.score}/10</p>
                                                <img className='w-full h-full object-fill rounded-t-xl sm:rounded-xl' src={show.imageUrl} alt="" />
                                            </div>
                                            <h5 className='px-3 2xl:text-[18px] sm:text-base text-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>{show.title}</h5>
                                            <div className='hidden absolute inset-0 bg-black/90 sm:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                                <p className='text-xs 2xl:text-base px-5 text-center overflow-auto'>{show.summary}</p>
                                                <Link to={`/details/${show._id}`}><button className='py-1 px-2 sm:py-2 sm:px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs 2xl:text-base'>View Details</button></Link>
                                            </div>
                                            <Link to={`/details/${show?._id}`}>
                                                <div className='block sm:hidden absolute inset-0'>

                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center bg-black text-white h-screen'>
                        <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybHRsNGFzZnh0cWU4M2VkYWYzaXhpcHloaXl4YThtMWZyaXN2cG02byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/200w.gif" alt="" style={{ width: '100px' }} />
                    </div>
            }
        </>
    )
}

export default Home