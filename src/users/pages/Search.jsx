import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons'
import { getShowAPI } from '../../services/allAPIs'
import { Link } from 'react-router-dom'

const Search = () => {

    const [shows, setShows] = useState([])
    const [searchData, setSearchData] = useState("")
    const [searchResullt, setSearchResullt] = useState()
    const [loading, setLoading] = useState(true)


    const getShow = async (searchData) => {
        const result = await getShowAPI(searchData)
        console.log(searchData);

        // console.log((result.data));
        setShows(result.data.allShows)
        setSearchResullt(result.data.allShows)
        setLoading(false)
    }


    useEffect(() => {
        getShow(searchData)
    }, [searchData])

    return (
        <>
            <Header search />
            {
                !loading ?
                    <div className='min-h-screen bg-black text-white pt-20 px-5 sm:px-10 md:px-20'>
                        <div className='flex justify-center items-center bg-white/10 p-2 rounded'>
                            <label htmlFor='search'><FontAwesomeIcon icon={faMagnifyingGlass} className='text-white/60' /></label>
                            <input value={searchData} onChange={e => setSearchData(e.target.value)} type="text" id='search' className='w-full py-2 px-2 rounded-lg text-sm outline-0' placeholder='Search Movies, Shows and More' />
                        </div>
                        <div className='mt-5'>
                            {
                                shows?.length > 0 ?
                                    <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                                        {
                                            searchResullt?.map((show, index) => (
                                                <div key={index} className='bg-white/10 aspect-4/6 rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                                                    <div className='m-1 sm:m-2 aspect-3/4 overflow-hidden rounded-t-xl sm:rounded-xl'>
                                                        <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{show.score}/10</p>
                                                        <img className='w-full h-full object-fill rounded-t-xl sm:rounded-xl' src={show.imageUrl} alt="" />
                                                    </div>
                                                    <h5 className='px-3 sm:text-base text-[10px] 2xl:text-[18px] whitespace-nowrap overflow-hidden text-ellipsis'>{show.title}</h5>
                                                    <div className='hidden absolute inset-0 bg-black/90 sm:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                                        <p className='text-xs px-5 text-center overflow-auto 2xl:text-base'>{show.summary}</p>
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
                                    :
                                    <p className='text-red-400 text-2xl text-center'>No Shows Available Right Now!</p>
                            }
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center bg-black h-screen'>
                        <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybHRsNGFzZnh0cWU4M2VkYWYzaXhpcHloaXl4YThtMWZyaXN2cG02byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/200w.gif" alt="" style={{ width: '100px' }} />
                    </div>
            }
        </>
    )
}

export default Search