import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';
import { getCategoryShowAPI } from '../../services/allAPIs';

const CategoryPage = () => {

    const [shows, setShows] = useState([])
    const [searchData, setSearchData] = useState("")
    const [searchResullt, setSearchResullt] = useState([])
    const { categoryName } = useParams();
    console.log(categoryName);

    const getCategoryShow = async (searchData) => {
        const result = await getCategoryShowAPI(searchData,categoryName)
        setShows(result.data)
        setSearchResullt(result.data)
    }
    console.log(shows);


    useEffect(() => {
        window.scrollTo(0, 0);
        getCategoryShow(searchData)
    }, [categoryName,searchData]);

    return (
        <div className='bg-black min-h-screen text-white'>
            <Header />
            <div className='md:p-20 sm:p-10 px-2 pt-10'>
                <div className='flex justify-center text-xl md:text-3xl text-blue-300'>
                    <h1>{categoryName.toUpperCase()}</h1>
                </div>
                <div className='flex justify-center items-center bg-white/10 p-2 rounded sm:my-10 my-5'>
                    <label htmlFor='search'><FontAwesomeIcon icon={faMagnifyingGlass} className='text-white/60' /></label>
                    <input value={searchData} onChange={e=>setSearchData(e.target.value)} type="text" id='search' className='w-full py-2 px-2 rounded-lg text-sm outline-0' placeholder='Search Movies, Shows and More' />
                </div>
                <div className=''>
                    <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                        {
                            shows?.length > 0 ?
                                searchResullt.map((shows) => (
                                    <div className='bg-white/10 aspect-4/6  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                                        <div className='m-2 aspect-3/4 overflow-hidden rounded-xl'>
                                            <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{shows.score}/10</p>
                                            <img className='w-full object-fill rounded-xl' src={shows.imageUrl} alt="" />
                                        </div>
                                        <h5 className='px-3 sm:text-base text-xs whitespace-nowrap overflow-hidden text-ellipsis'>{shows.title}</h5>
                                        <div className='absolute inset-0 bg-black/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                            <p className='text-[10px] sm:text-xs sm:px-2 text-center overflow-auto'>{shows.summary}</p>
                                            <Link to={`/details/${shows._id}`}><button className='py-1 px-2 sm:py-2 sm:px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button></Link>
                                        </div>
                                    </div>
                                ))
                                :
                                <p>No Data</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage