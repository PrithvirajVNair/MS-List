import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faUsers } from '@fortawesome/free-solid-svg-icons';
import { getShowAPI, getUsersAPI } from '../../services/allAPIs';
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom';


const Dashbord = () => {

    const [usersCount, setUsersCount] = useState(0)
    const [movieCount, setMovieCount] = useState(0)
    const [seriesCount, setSeriesCount] = useState(0)
    const [fetching, setFetching] = useState(true)
    const navigate = useNavigate()


    const getUsers = async () => {
        const result = await getUsersAPI()
        // console.log(result);  
        setUsersCount(result.data.userCount)
        setFetching(false)
    }

    const getShows = async () => {
        const result = await getShowAPI()
        // console.log(result);
        setMovieCount(result.data.movieCount)
        setSeriesCount(result.data.seriesCount)
        setFetching(false)
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token')
            const details = jwtDecode(token)
            console.log(details);
            if (!details.administrator) {
                navigate('/youhavenoaccess')
            }
        }
        else {
            navigate('/login')
        }
        getUsers()
        getShows()
    }, [])

    return (
        <div className='bg-black text-white min-h-screen'>
            <marquee className='bg-gray-950 fixed' behavior="" direction="left">THIS IS THE ADMIN HOME PAGE OF MS LIST</marquee>
            <div className='grid grid-cols-[1fr_6fr]'>
                <div className='h-full'>
                    <SideBar overview />
                </div>
                <div className='grid grid-cols-2'>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faUsers} className='text-2xl text-blue-600' />
                        <p className='text-3xl py-2'>{fetching ? <span className='text-sm'>Fetching...</span> : usersCount}</p>
                        <p>Total Users</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faFilm} className='text-2xl text-green-600' />
                        <p className='text-3xl py-2'>{fetching ? <span className='text-sm'>Fetching...</span> : movieCount}</p>
                        <p>Total Movies</p>
                    </div>
                    <div className='m-10 rounded-xl bg-white/10 flex flex-col justify-center items-center'>
                        <FontAwesomeIcon icon={faTv} className='text-2xl text-red-600' />
                        <p className='text-3xl py-2'>{fetching ? <span className='text-sm'>Fetching...</span> : seriesCount}</p>
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