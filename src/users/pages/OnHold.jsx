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
import { getOnHoldListAPI, putListAPI, putStatusListAPI, updateScoreAPI } from '../../services/allAPIs';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';


const labels = {
    0.5: 'Appalling',
    1: 'Horrible',
    1.5: 'Very Bad',
    2: 'Bad',
    2.5: 'Average',
    3: 'Fine',
    3.5: 'Good',
    4: 'Very Good',
    4.5: 'Great',
    5: 'Masterpiece',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const OnHold = () => {


    const [listData, setListData] = useState([])
    const [listCount, setListCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [editData, setEditData] = useState({})
    const [toggleList, setToggleList] = useState(false)
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [statusData, setStatusData] = useState({
        value: "",
        data: {}
    })
    // console.log(statusData);
    const [token, setToken] = useState("")
    const navigate = useNavigate()

    const getList = async (value) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getOnHoldListAPI(reqHeader, value)
        setListData(result.data.listData)
        setListCount(result.data.count)
        setLoading(false)
        // console.log(result);
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

    const handleEdit = async () => {
        setToggleList(false)
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await putListAPI(editData, reqHeader)
        if (result.status == 200) {
            await updateScoreAPI(editData)
            getList()
        }
    }

    useEffect(() => {
        getList()
        if (statusData.value != "") {
            changeStatus()
        }
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
        } else {
            navigate('/login')
        }
    }, [statusData])

    return (
        <>
            <WatchlistCommon onhold count={listCount} onHandleSearch={getList} />
            <div className='min-h-screen bg-black text-white'>
                {
                    !loading ?
                        <div className='w-full grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 lg:px-20 px-2'>
                            {
                                listData?.length > 0 ?
                                    listData?.map((list, index) => (
                                        <div key={index} className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative overflow-hidden'>
                                            <div className='flex flex-col max-sm:flex-col m-2 aspect-4/6'>
                                                <div className='aspect-2/3'>
                                                    <img className='w-full h-full object-fill rounded-xl' src={list.imageUrl} alt="" />
                                                </div>
                                                <div>
                                                    <div className='flex justify-between items-center'>
                                                        <p className='text-white/60 me-2 mt-1 text-xs'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />{list.rating}/10</p>
                                                        <button onClick={() => {
                                                            setToggleList(true)
                                                            setEditData(list)
                                                        }} className='text-xs underline text-blue-300 cursor-pointer'><em>Edit</em></button>
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
                                                <span className="pointer-events-none absolute left-0 bottom-full mb-1 bg-black text-white text-xs p-1 rounded whitespace-nowrap opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-50">
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
            {/* below is edit list option for rating,date etc... */}
            {
                toggleList &&
                <div className='fixed inset-0 bg-black/50 text-black h-screen flex justify-center items-center'>
                    <div className='grid sm:grid-cols-12 py-15 w-full'>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                        <div className='text-center rounded-xl flex flex-col justify-center items-center text-white bg-white/10  backdrop-blur-xl py-5 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4'>
                            <h2 className='text-xl sm:text-2xl py-10'>Edit <span className='text-blue-600'>Watchlist</span></h2>
                            <div className='flex w-full px-10 justify-center items-center sm:text-base text-sm'>
                                <h2 className='text-xl font-bold'>{editData.title}</h2>
                            </div>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='py-5 px-10'>
                                <Typography variant='label' className='sm:text-base text-sm'>
                                    Rating:
                                </Typography>
                                <Rating
                                    name="hover-feedback"
                                    value={editData.rating / 2}
                                    precision={0.5}
                                    max={5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                        setEditData({ ...editData, rating: event.target.value * 2 })
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    className='ms-2'
                                />
                                {value !== null && (
                                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                )}
                            </Box>
                            <div className='w-full px-10 sm:text-base text-sm'>
                                <label htmlFor="sdate">Start Date:</label>
                                <input value={editData.sDate.split("T")[0]} onChange={e => setEditData({ ...editData, sDate: e.target.value })} id='sdate' type="date" className='ms-2 date-icon-white' />
                            </div>
                            <div className='w-full px-10 py-5 sm:text-base text-sm'>
                                <label htmlFor="sdate">End Date:</label>
                                <input value={editData.eDate.split("T")[0]} onChange={e => setEditData({ ...editData, eDate: e.target.value })} id='sdate' type="date" className='ms-2 date-icon-white' />
                            </div>
                            <div className='py-10'>
                                <button onClick={() => setToggleList(false)} className='py-1 px-5 bg-orange-600 text-white rounded-2xl hover:text-orange-600 hover:bg-white border border-orange-600 sm:text-base text-sm w-[100px]'>Cancel</button>
                                <button onClick={handleEdit} className='py-1 px-5 bg-blue-600 text-white rounded-2xl hover:text-blue-600 hover:bg-white border border-blue-600 ms-3 sm:text-base text-sm w-[100px]'>Edit</button>
                            </div>
                        </div>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                    </div>
                </div>}
        </>
    )
}

export default OnHold