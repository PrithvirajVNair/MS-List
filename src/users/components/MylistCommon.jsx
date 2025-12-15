import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import StarIcon from '@mui/icons-material/Star';
import { addToCustomListAPI } from '../../services/allAPIs'
import { Bounce, toast, ToastContainer } from 'react-toastify'


const labels = {
    1: 'Appalling',
    2: 'Horrible',
    3: 'Very Bad',
    4: 'Bad',
    5: 'Average',
    6: 'Fine',
    7: 'Good',
    8: 'Very Good',
    9: 'Great',
    10: 'Masterpiece',
};
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}



const MylistCommon = ({ all, favorite, planning, watching, onhold, completed, dropped, count, onHandleSearch }) => {

    const [token, setToken] = useState("")
    const [toggleList, setToggleList] = useState(false)
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [show, setShow] = useState({})
    const [listData, setListData] = useState({
        title: "",
        rating: "",
        status: "",
        sDate: "2026-01-01T00:00:00.000+00:00",
        eDate: "2026-01-01T00:00:00.000+00:00",
    })
    // console.log(listData);

    const handleChange = (event) => {
        setListData({ ...listData, status: event.target.value })
    };

    const addToList = async () => {
        setToggleList(false)
        const { rating, status, sDate, eDate } = listData
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        if (!status) {
            toast.info("Select a Status")
        }
        else {
            const result = await addToCustomListAPI(listData, reqHeader)
            if (result.status == 200) {
                toast.success("Sucessfully Added to Watchlist")
                // below line is for reloading after list is added
                onHandleSearch()
            }
            else if (result.status == 401) {
                toast.warning(result.response.data)
            }
            else {
                toast.warning("Something Went Wrong, please try again later")
            }
            // console.log(result);
        }

    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
        } else {
            navigate('/login')
        }
    }, [])

    return (
        <>
            <div className='bg-black text-white'>
                <Header mylist />
                <div className='pt-15 sm:pt-20 lg:px-20 px-3'>
                    <div className='flex justify-between items-center'>
                        <h2 className='sm:text-3xl'>My Custom Watchlist</h2>
                        <button onClick={() => setToggleList(true)} className='bg-blue-500 rounded px-2 py-1 md:text-base text-xs hover:bg-blue-600 cursor-pointer'>Add Show</button>
                    </div>
                    <p className='ms-3 text-xs sm:text-base text-white/60'>{count} items</p>
                    <div className='sm:py-10 py-5'>
                        <input onChange={e=>onHandleSearch(e.target.value || "")} type="text" className='bg-white/10 w-full py-1 px-2 rounded-xl text-sm' placeholder='Search your Watchlist' />
                        <div className='py-5 sm:text-base text-xs'>
                            <Link to={'/mylist'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${all ? 'bg-white text-black' : 'bg-white/10 text-white/60'}`}>All</button></Link>
                            <Link to={'/mylist/favorite'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${favorite ? 'bg-white text-black' : 'bg-white/10 text-white/60'}`}>Favorite</button></Link>
                            <Link to={'/mylist/planning'}><button className={`sm:me-3 sm:my-0 my-1 me-1 py-1 px-2 rounded-xl cursor-pointer ${planning ? 'bg-white text-black' : 'bg-white/10 text-white/60'}`}>Planning</button></Link>
                            <Link to={'/mylist/watching'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${watching ? 'bg-white text-black' : 'bg-white/10 text-white/60'}`}>Watching</button></Link>
                            <Link to={'/mylist/onhold'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${onhold ? 'bg-white text-black' : 'bg-white/10 text-white/60'}`}>On Hold</button></Link>
                            <Link to={'/mylist/completed'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${completed ? 'bg-white text-black' : 'bg-white/10 text-white/60'}`}>Completed</button></Link>
                            <Link to={'/mylist/dropped'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${dropped ? 'bg-white text-black' : 'bg-white/10 text-white/60'}`}>Dropped</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                toggleList &&
                <div className='fixed inset-0 text-black bg-black/50 h-screen flex justify-center items-center' style={{zIndex:999}}>
                    <div className='grid sm:grid-cols-12 py-15 w-full'>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                        <div className='rounded-xl flex flex-col justify-center items-center text-white bg-white/1 backdrop-blur-xl py-5 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 text-center'>
                            <h2 className='text-xl sm:text-2xl py-10'>Add to <span className='text-blue-600'>Watchlist</span></h2>
                            <div className='flex w-full px-10 justify-center items-center sm:text-base text-sm'>
                                {/* <label>Title:</label> */}
                                <input onChange={e => setListData({ ...listData, title: e.target.value })} type="text" className='bg-white/10 ms-2 w-50 py-1 px-2 placeholder:text-white text-white' placeholder='Title' />
                            </div>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }} className='py-5 px-10'>
                                <Typography variant='label' className='sm:text-base text-sm'>
                                    Rating:
                                </Typography>
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    max={5}
                                    getLabelText={getLabelText}
                                    onChange={(e, newValue) => {
                                        setValue(newValue);
                                        setListData({ ...listData, rating: e.target.value * 2 })
                                    }}
                                    onChangeActive={(event, newHover) => {
                                        setHover(newHover * 2);
                                    }}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55, color: 'white' }} fontSize="inherit" />}
                                    className='ms-2'
                                />
                                {/* {value !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                    )} */}
                            </Box>
                            <div className='w-full px-10 sm:text-base text-sm'>
                                <label htmlFor="sdate">Start Date:</label>
                                <input className="ms-2 date-icon-white" onChange={e => setListData({ ...listData, sDate: e.target.value })} id='sdate' type="date" />
                            </div>
                            <div className='w-full px-10 py-5 sm:text-base text-sm'>
                                <label htmlFor="sdate">End Date:</label>
                                <input onChange={e => setListData({ ...listData, eDate: e.target.value })} id='sdate' type="date" className='ms-2 date-icon-white' />
                            </div>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }} >Status</InputLabel>
                                    <Select
                                        sx={{
                                            color: "white",
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "white"
                                            },
                                            "&:hover .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "white"
                                            },
                                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "white"
                                            },
                                            ".MuiSvgIcon-root": {
                                                color: "white"
                                            }
                                        }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={listData.status}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={'planning'}>Planning</MenuItem>
                                        <MenuItem value={'watching'}>Watching</MenuItem>
                                        <MenuItem value={'onhold'}>On-Hold</MenuItem>
                                        <MenuItem value={'completed'}>Completed</MenuItem>
                                        <MenuItem value={'dropped'}>Dropped</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <div className='py-10'>
                                <button onClick={() => setToggleList(false)} className='py-1 px-5 bg-orange-600 text-white rounded-2xl hover:text-orange-600 hover:bg-white border border-orange-600 sm:text-base text-sm w-[100px]'>Cancel</button>
                                <button onClick={addToList} className='py-1 px-5 bg-blue-600 text-white rounded-2xl hover:text-blue-600 hover:bg-white border border-blue-600 ms-3 sm:text-base text-sm w-[100px]'>Add</button>
                            </div>
                        </div>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                    </div>
                </div>
            }
        </>
    )
}

export default MylistCommon