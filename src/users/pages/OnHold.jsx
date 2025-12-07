import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import WatchlistCommon from '../components/WatchlistCommon'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { getOnHoldListAPI, putStatusListAPI } from '../../services/allAPIs';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const OnHold = () => {


    const [listData, setListData] = useState([])
    const [listCount, setListCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [statusData, setStatusData] = useState({
        value: "",
        data: {}
    })
    console.log(statusData);

    const getList = async (value) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getOnHoldListAPI(reqHeader, value)
        setListData(result.data.listData)
        setListCount(result.data.count)
        setLoading(false)
        console.log(result);
    }

    const handleChange = async (e, data) => {
        setStatusData({ ...statusData, value: e.target.value, data })
    }

    const changeStatus = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await putStatusListAPI(statusData, reqHeader)
        console.log(result);
        if (result.status == 200) {
            getList()
            toast.success("Status Changed")
        }
        else {
            toast.warning("Something Went Wrong...")
        }

    };

    useEffect(() => {
        getList()
        if (statusData.value != "") {
            changeStatus()
        }
    }, [statusData])

    return (
        <>
            <WatchlistCommon onhold count={listCount} onHandleSearch={getList} />
            <div className='min-h-screen bg-black text-white'>
                {
                    !loading ?
                        <div className='w-full grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 lg:px-10'>
                            {
                                listData?.length > 0 ?
                                    listData?.map((list) => (
                                        <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative overflow-hidden'>
                                            <div className='flex flex-col max-sm:flex-col m-2 aspect-4/6'>
                                                <div className='aspect-2/3'>
                                                    <img className='w-full h-full object-fill rounded-xl' src={list.imageUrl} alt="" />
                                                </div>
                                                <div>
                                                    <div className='flex justify-between items-center'>
                                                        <p className='text-white/60 me-2 mt-1 text-xs'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />{list.rating}/10</p>
                                                        <button onClick={() => setToggleList(true)} className='text-xs underline text-blue-300 cursor-pointer'><em>Edit</em></button>
                                                    </div>
                                                    <p className='text-white/60 mt-1 text-xs'>Start Date : {new Date(list.sDate).toLocaleDateString("en-GB")}</p>
                                                    <p className='text-white/60 mt-1 text-xs'>End Date : {new Date(list.eDate).toLocaleDateString("en-GB")}</p>
                                                    <div className='flex'>
                                                        <p className='text-white/60 me-2 mt-1 text-xs'>Status : </p>
                                                        <Box sx={{ minWidth: 80 }}>
                                                            <FormControl fullWidth size='small' variant="standard">
                                                                {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={list.status}
                                                                    label="Status"
                                                                    onChange={e => handleChange(e, list)}
                                                                    sx={{
                                                                        color: 'white',

                                                                        // ⬇ Custom padding (inside Select box)
                                                                        '.MuiSelect-select': {
                                                                            paddingTop: '0px',
                                                                            paddingBottom: '3px',
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            height: '100%',
                                                                            fontSize: '12px',
                                                                        },

                                                                        // ⬇ White dropdown arrow
                                                                        '.MuiSvgIcon-root': {
                                                                            color: 'white',
                                                                        },

                                                                        // ⬇ White border
                                                                        '.MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'white',
                                                                        },
                                                                        '&:hover .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'white',
                                                                        },
                                                                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                                            borderColor: 'white',
                                                                        },
                                                                    }}
                                                                >
                                                                    <MenuItem value={'planning'} sx={{ fontSize: '12px' }}>Planning</MenuItem>
                                                                    <MenuItem value={'watching'} sx={{ fontSize: '12px' }}>Watching</MenuItem>
                                                                    <MenuItem value={'onhold'} sx={{ fontSize: '12px' }}>On-Hold</MenuItem>
                                                                    <MenuItem value={'completed'} sx={{ fontSize: '12px' }}>Completed</MenuItem>
                                                                    <MenuItem value={'dropped'} sx={{ fontSize: '12px' }}>Dropped</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Box>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='group relative'>
                                                <h5 className='ps-2 overflow-x-hidden text-ellipsis whitespace-nowrap'>{list.title}</h5>
                                                <span className="absolute left-0 bottom-full mb-1 bg-black text-white text-xs p-1 rounded whitespace-nowrap opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-50">
                                                    {list.title}
                                                </span>
                                            </div>
                                            <div className='px-2 py-2 flex justify-between items-center'>
                                                <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>{list.genre}</span>
                                                <div>
                                                    {list.favorite &&
                                                        <button onClick={() => removeFromFav(list)}><FontAwesomeIcon icon={faStarSolid} /></button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    <div className='flex justify-center items-center lg:col-span-6 md:col-span-5 sm:col-span-4 col-span-2'>
                                        <p className='text-red-400 sm:text-2xl font-bold'>List is Empty</p>
                                    </div>
                            }
                        </div> :
                        <div className='flex justify-center items-center'>
                            <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybHRsNGFzZnh0cWU4M2VkYWYzaXhpcHloaXl4YThtMWZyaXN2cG02byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/200w.gif" alt="" style={{ width: '100px' }} />
                        </div>}
            </div>
        </>
    )
}

export default OnHold