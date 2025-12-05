import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAShowAPI, getRecommendationAPI } from '../../services/allAPIs'


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

const ViewDetails = () => {

    const [toggleList, setToggleList] = useState(false)
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    const { id } = useParams()

    const [show, setShow] = useState({})
    const [recommendation, setRecommendation] = useState([])
    const [loading, setLoading] = useState(true)

    const getAShow = async () => {
        const result = await getAShowAPI(id)
        setShow(result.data)
        console.log(result);
        setLoading(false)
    }

    const getRecommendation = async () => {
        const result = await getRecommendationAPI(id)
        setRecommendation(result.data)
    }
    console.log(recommendation);


    useEffect(() => {
        getAShow()
        getRecommendation()
    }, [id])

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Header />
            <div className='min-h-screen bg-black sm:px-10 text-white sm:pt-20'>
                {
                    !loading ?
                        <div className='flex justify-center items-center max-sm:flex-col min-h-[400px] p-5 bg-white/10'>
                            <div className='sm:min-w-[250px] w-[250px] h-full sm:pt-0 pt-10'>
                                <img className='w-full h-full object-fill p-5 sm:p-0' src={show.imageUrl} alt="" />
                            </div>
                            <div className='sm:px-5'>
                                <h1 className='text-xl sm:text-3xl'>{show.title}</h1>
                                <div className='h-[200px] overflow-y-auto sm:text-base text-sm'><p><span className='text-blue-300'>Description: </span>{show.description}</p>
                                </div>
                                <div className='p-3'>
                                    <span className='bg-black/60 rounded-2xl px-2 text-sm me-2 text-[#FF3B30]'>{show.genre}</span>
                                </div>
                                <div className='p-3 text-xs sm:text-sm text-white/60'>
                                    <p>Language: {show.language}</p>
                                    <p>Category: {show.category}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <div>
                                            <button onClick={() => setToggleList(true)} className='me-10 text-xs sm:text-base py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>
                                        </div>
                                        {/* { toggleList &&
                                <div className='flex flex-col border bg-blue-300/10 text-center rounded backdrop-blur-2xl px-5 py-3'>
                                <span className='hover:text-blue-300 cursor-pointer'>Planning</span>
                                <span className='hover:text-blue-300 cursor-pointer'>Watching</span>
                                <span className='hover:text-blue-300 cursor-pointer'>On Hold</span>
                                <span className='hover:text-blue-300 cursor-pointer'>Completed</span>
                                <span className='hover:text-blue-300 cursor-pointer'>Dropped</span>
                            </div>} */}
                                    </div>
                                    <p className='text-white/60 me-2 mt-1 text-sm sm:text-xl ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{show.score}/10</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex justify-center items-center'>
                            <p>Loading...</p>
                        </div>
                }
                <div className='bg-white/10 p-1 mt-10'>
                    <h2 className='sm:text-2xl px-1 sm:px-3'>Recommendation:</h2>
                    <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                        {
                            recommendation?.length > 0 ?
                                recommendation?.map((shows) => (
                                    <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                                        <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                            <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{shows.show.score}/10</p>
                                            <img className='w-full object-fill rounded-xl' src={shows.show.imageUrl} alt="" />
                                        </div>
                                        <h5 className='px-3 sm:text-base text-xs whitespace-nowrap overflow-hidden text-ellipsis'>{shows.show.title}</h5>
                                        <div className='absolute inset-0 bg-black/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                            <p className='text-xs px-2 text-center'>{shows.show.summary}</p>
                                            <p className='text-xs px-2 text-center'><span className='text-blue-300'>Simillarity to {show.title} : </span><span className='font-bold text-green-300'>{(shows.similarity*100).toFixed(2)}%</span></p>
                                            <Link to={`/details/${shows.show._id}`}><button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button></Link>
                                        </div>
                                    </div>
                                ))
                                :
                                <p>No Data</p>
                        }
                    </div>
                </div>
                {/* comments */}
                <h1 className='mt-10 text-base sm:px-0 px-5 sm:text-2xl'>Comments:</h1>
                <div className='flex flex-col min-h-[400px] p-5 sm:p-10 border border-white/20'>
                    <div className='flex justify-start items-start w-full'>
                        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-5 sm:w-10 sm:h-10 w-8 h-8' style={{ borderRadius: '50%' }} />
                        <input type="text" className='bg-white/10 py-1 px-2 text-white w-full rounded-xl placeholder:text-white/60 sm:text-base text-sm' placeholder='Write a comment' />
                    </div>
                    <div className='mt-10 flex'>
                        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-3 sm:w-10 sm:h-10 w-8 h-8' style={{ borderRadius: '50%' }} />
                        <div className='flex flex-col'>
                            <h5 className='sm:text-base text-sm'>Name</h5>
                            <p className='mt-3 sm:text-base text-sm'>hello</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                toggleList &&
                <div className='fixed inset-0 bg-black/80 text-black h-screen'>
                    <div className='grid sm:grid-cols-12 py-15 h-screen'>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                        <div className='border rounded-xl flex flex-col justify-center items-center bg-white/90 backdrop-blur-lg py-5 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4'>
                            <h2 className='text-xl sm:text-2xl py-10'>Add to <span className='text-blue-600'>Watchlist</span></h2>
                            <div className='flex w-full px-10 justify-center items-center sm:text-base text-sm'>
                                {/* <label>Title:</label> */}
                                {/* <input type="text" readOnly className='bg-white ms-2 w-full py-1 px-2 placeholder:text-black/60 text-black' placeholder='Title' /> */}
                                <h2 className='text-2xl font-bold'>Title</h2>
                            </div>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }} className='py-5 px-10'>
                                <Typography variant='label' className='sm:text-base text-sm'>
                                    Rating:
                                </Typography>
                                <Rating
                                    name="hover-feedback"
                                    value={value}
                                    precision={0.5}
                                    getLabelText={getLabelText}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
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
                                <input id='sdate' type="date" className='ms-2' />
                            </div>
                            <div className='w-full px-10 py-5 sm:text-base text-sm'>
                                <label htmlFor="sdate">End Date:</label>
                                <input id='sdate' type="date" className='ms-2' />
                            </div>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
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
                                <button className='py-1 px-5 bg-blue-600 text-white rounded-2xl hover:text-blue-600 hover:bg-white border border-blue-600 me-3 sm:text-base text-sm'>Add</button>
                                <button onClick={() => setToggleList(false)} className='py-1 px-5 bg-orange-600 text-white rounded-2xl hover:text-orange-600 hover:bg-white border border-orange-600 sm:text-base text-sm'>Cancel</button>
                            </div>
                        </div>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                    </div>
                </div>}
        </>
    )
}

export default ViewDetails