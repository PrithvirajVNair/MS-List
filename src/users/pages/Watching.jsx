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

const Watching = () => {

    const [favorite, setFavorite] = useState([])
    const [toggleFavTemp, setToggleFavTemp] = useState(false) //this is temporary
    const [status, setStatus] = React.useState('watching');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <>
            <WatchlistCommon watching />
            <div className='min-h-screen bg-black text-white'>
                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:px-10'>
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
        </>
    )
}

export default Watching