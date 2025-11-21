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
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';



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


const Planning = () => {

    const [favorite, setFavorite] = useState([])
    const [toggleFavTemp, setToggleFavTemp] = useState(false) //this is temporary
    const [toggleList, setToggleList] = useState(false)
    const [status, setStatus] = React.useState('planning');
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);


    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <>
            <WatchlistCommon planning />
            <div className='min-h-screen bg-black text-white'>
                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:px-10'>
                    <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <div className='flex justify-between items-center'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />9.5/10</p>
                                    <button onClick={()=>setToggleList(true)} className='text-xs underline text-blue-300 cursor-pointer'><em>Edit</em></button>
                                </div>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>End Date :</p>
                                <div className='flex'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Status : </p>
                                    <Box sx={{ minWidth: 80 }}>
                                        <FormControl fullWidth size='small' variant="standard">
                                            {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Status"
                                                onChange={handleChange}
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
                            {/* <div onClick={() => setToggleList(false)} style={{ zIndex: 40 }} className='fixed inset-0'></div> */}
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>End Date :</p>
                                <div className='flex'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Status : </p>
                                    <Box sx={{ minWidth: 80 }}>
                                        <FormControl fullWidth size='small' variant="standard">
                                            {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Status"
                                                onChange={handleChange}
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
                            {/* <div onClick={() => setToggleList(false)} style={{ zIndex: 40 }} className='fixed inset-0'></div> */}
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>End Date :</p>
                                <div className='flex'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Status : </p>
                                    <Box sx={{ minWidth: 80 }}>
                                        <FormControl fullWidth size='small' variant="standard">
                                            {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Status"
                                                onChange={handleChange}
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
                            {/* <div onClick={() => setToggleList(false)} style={{ zIndex: 40 }} className='fixed inset-0'></div> */}
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>End Date :</p>
                                <div className='flex'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Status : </p>
                                    <Box sx={{ minWidth: 80 }}>
                                        <FormControl fullWidth size='small' variant="standard">
                                            {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Status"
                                                onChange={handleChange}
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
                            {/* <div onClick={() => setToggleList(false)} style={{ zIndex: 40 }} className='fixed inset-0'></div> */}
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>End Date :</p>
                                <div className='flex'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Status : </p>
                                    <Box sx={{ minWidth: 80 }}>
                                        <FormControl fullWidth size='small' variant="standard">
                                            {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Status"
                                                onChange={handleChange}
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
                            {/* <div onClick={() => setToggleList(false)} style={{ zIndex: 40 }} className='fixed inset-0'></div> */}
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>End Date :</p>
                                <div className='flex'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Status : </p>
                                    <Box sx={{ minWidth: 80 }}>
                                        <FormControl fullWidth size='small' variant="standard">
                                            {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Status"
                                                onChange={handleChange}
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
                            {/* <div onClick={() => setToggleList(false)} style={{ zIndex: 40 }} className='fixed inset-0'></div> */}
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                    </div>
                    <div className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative'>
                        <div className='flex max-sm:flex-col m-2'>
                            <div className='h-[100px] w-20'>
                                <img className='w-full h-full object-fill rounded-xl' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                            </div>
                            <div>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />9.5/10</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Start Date :</p>
                                <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>End Date :</p>
                                <div className='flex'>
                                    <p className='text-white/60 me-2 mt-1 text-xs ps-2 lg:ps-5'>Status : </p>
                                    <Box sx={{ minWidth: 80 }}>
                                        <FormControl fullWidth size='small' variant="standard">
                                            {/* <InputLabel id="demo-simple-select-label" sx={{ fontSize: '12px', color: 'white', alignItems: 'center', width: '100%' }}>Status</InputLabel> */}
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={status}
                                                label="Status"
                                                onChange={handleChange}
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
                            {/* <div onClick={() => setToggleList(false)} style={{ zIndex: 40 }} className='fixed inset-0'></div> */}
                        </div>
                        <h5 className='px-3'>TITLE</h5>
                        <div className='px-3 sm:py-0 py-2'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
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
                                <label>Title:</label>
                                <input type="text" readOnly className='bg-white ms-2 w-full py-1 px-2 placeholder:text-black/60 text-black' placeholder='Title' />
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

export default Planning