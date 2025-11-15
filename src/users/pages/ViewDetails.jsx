import React, { useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Header />
            <div className='min-h-screen bg-black sm:px-10 text-white sm:pt-20'>
                <div className='flex h-[400px] p-5 bg-white/10'>
                    <div className='min-w-[250px] h-full'>
                        <img className='w-full h-full object-fill' src="https://i.pinimg.com/originals/89/3f/fd/893ffdb8c9e5d47e2855e348848195b9.jpg" alt="" />
                    </div>
                    <div className='px-5'>
                        <h1 className='text-3xl'>TITLE</h1>
                        <div className='h-[200px] overflow-y-auto'><p><span className='text-blue-300'>Description: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.or sit amet consectetur adipisicing elit. Nulla ut praesentium nesciunt tenetur totam numquam perspiciatis tempore ipsam placeat, beatae dolor officia iste facere necessitatibus laborum magni molestiae veritatis? Corrupti.</p>
                        </div>
                        <div className='p-3'>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Action</span>
                            <span className='bg-black/60 rounded-2xl px-2 text-sm me-2'>Drama</span>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div>
                                    <button onClick={() => setToggleList(true)} className='me-10 text-base py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>
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
                            <p className='text-white/60 me-2 mt-1 text-xl ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                        </div>
                    </div>
                </div>
                {/* comments */}
                <h1 className='mt-10 text-2xl'>Comments:</h1>
                <div className='flex flex-col min-h-[400px] p-10 border border-white/20'>
                    <div className='flex justify-start items-start w-full'>
                        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-5' style={{ widows: '40px', height: '40px', borderRadius: '50%' }} />
                        <input type="text" className='bg-white/10 py-1 px-2 text-white w-full rounded-xl placeholder:text-white/60' placeholder='Write a comment' />
                    </div>
                    <div className='mt-10 flex'>
                        <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-3' style={{ widows: '40px', height: '40px', borderRadius: '50%' }} />
                        <div className='flex flex-col'>
                            <h5>Name</h5>
                            <p className='mt-3'>hello</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                toggleList &&
                <div className='fixed inset-0 bg-black/80 text-black h-screen'>
                    <div className='grid grid-cols-3 py-15 h-screen'>
                        <div></div>
                        <div className='border rounded-xl flex flex-col justify-center items-center bg-white/90 backdrop-blur-lg py-5'>
                            <h2 className='text-2xl py-10'>Add to <span className='text-blue-600'>Watchlist</span></h2>
                            <div className='flex w-full px-10 justify-center items-center'>
                                <label>Title:</label>
                                <input type="text" readOnly className='bg-white ms-2 w-full py-1 px-2 placeholder:text-black/60 text-black' placeholder='Title' />
                            </div>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }} className='py-5 px-10'>
                                <Typography variant='label'>
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
                            <div className='w-full px-10'>
                                <label htmlFor="sdate">Start Date:</label>
                                <input id='sdate' type="date" className='ms-2' />
                            </div>
                            <div className='w-full px-10 py-5'>
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
                                <button className='py-1 px-5 bg-blue-600 text-white rounded-2xl hover:text-blue-600 hover:bg-white border border-blue-600 me-3'>Add</button>
                                <button onClick={() => setToggleList(false)} className='py-1 px-5 bg-orange-600 text-white rounded-2xl hover:text-orange-600 hover:bg-white border border-orange-600'>Cancel</button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>}
        </>
    )
}

export default ViewDetails