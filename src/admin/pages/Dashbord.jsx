import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faUsers } from '@fortawesome/free-solid-svg-icons';
import { getShowAPI, getUsersAPI } from '../../services/allAPIs';


const Dashbord = () => {

      const [usersCount,setUsersCount] = useState(0)
      const [movieCount,setMovieCount] = useState(0)
      const [seriesCount,setSeriesCount] = useState(0)
      const [fetching,setFetching] = useState(true)
    
      const getUsers = async() => {
        const result = await getUsersAPI()
        console.log(result);  
        setUsersCount(result.data.userCount)
        setFetching(false)
      }

      const getShows = async() => {
        const result = await getShowAPI()
        console.log(result);
        setMovieCount(result.data.movieCount)
        setSeriesCount(result.data.seriesCount)
        setFetching(false)
      }
    
      useEffect(()=>{
        getUsers()
        getShows()
      },[])

    return (
        <div className='bg-black text-white min-h-screen'>
            <marquee className='bg-gray-950 fixed' behavior="" direction="left">THIS IS THE ADMIN HOME PAGE OF MS LIST</marquee>
            <div className='grid grid-cols-[1fr_4fr]'>
                <div className='h-full'>
                    <SideBar overview />
                </div>
                <div className='grid grid-cols-2'>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faUsers} className='text-2xl text-blue-600' />
                        <p className='text-3xl py-2'>{fetching ? <p className='text-sm'>Fetching...</p> :usersCount}</p>
                        <p>Total Users</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faFilm} className='text-2xl text-green-600' />
                        <p className='text-3xl py-2'>{fetching ? <p className='text-sm'>Fetching...</p> :movieCount}</p>
                        <p>Total Movies</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faTv} className='text-2xl text-red-600' />
                        <p className='text-3xl py-2'>{fetching ? <p className='text-sm'>Fetching...</p> :seriesCount}</p>
                        <p>Total Series</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <p>User Growth</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbord