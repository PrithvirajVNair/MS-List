import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faEllipsis, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { jwtDecode } from "jwt-decode";
import { format } from "timeago.js";
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { addCommentAPI, addToListAPI, commentActivityAPI, deleteCommentActivityAPI, deleteCommentAPI, getAShowAPI, getAUserAPI, getAUserWithEmailAPI, getCommentAPI, getRecommendationAPI, reportCommentAPI, showActivityAPI, updateScoreAPI } from '../../services/allAPIs'


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

const ViewDetails = () => {

    const [toggleList, setToggleList] = useState(false)
    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const { id } = useParams()
    const [show, setShow] = useState({})
    const [recommendation, setRecommendation] = useState([])
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState("")
    const [listData, setListData] = useState({
        showid: "",
        title: "",
        rating: "",
        status: "",
        sDate: "2026-01-01T00:00:00.000+00:00",
        eDate: "2026-01-01T00:00:00.000+00:00",
        genre: "",
        imageUrl: "",
    })
    const [comment, setComment] = useState({
        showId: "",
        comment: "",
    })
    const [commentButton, setCommentButton] = useState("hidden")
    const [allComments, setAllComments] = useState([])
    const [userMail, setUserMail] = useState("")
    const [toggleTDot, setToggleTDot] = useState(null)
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    // console.log(allComments);


    const getAShow = async () => {
        const result = await getAShowAPI(id)
        setShow(result.data)
        setLoading(false)
    }

    const getRecommendation = async () => {
        const result = await getRecommendationAPI(id)
        setRecommendation(result.data)
    }
    // console.log(recommendation);

    const handleAddToList = (title, id, url, genre) => {
        setToggleList(true)
        setListData({ ...listData, title: title, showid: id, imageUrl: url, genre: genre })
    }

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
            const result = await addToListAPI(listData, reqHeader)
            if (result.status == 200) {
                toast.success("Sucessfully Added to Watchlist")
                await updateScoreAPI(listData)
                const showId = result.data._id
                const show = await showActivityAPI({ showId }, reqHeader)
                console.log(show);
                console.log(result);

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

    const handleComment = (event) => {
        if (event.target.value != "") {
            setCommentButton("block")
        }
        else {
            setCommentButton("hidden")
        }
        setComment({ ...comment, comment: event.target.value, showId: id })
    }

    const addComment = async () => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        if (comment.comment == "") {
            toast.info("Comment Should not be Empty!")
        }
        else {
            const result = await addCommentAPI(comment, reqHeader)
            console.log(result);
            if (result.status == 200) {
                toast.success("Comment added")
                setComment({
                    comment: ""
                })
            }
            else {
                toast.warning("Something Went Wrong! please try again later...")
            }
            getComment()
            const commentId = result.data._id
            const comment2 = await commentActivityAPI({ commentId }, reqHeader)
            console.log(comment2);

        }
    }

    const getComment = async () => {
        const result = await getCommentAPI({ id })
        setAllComments(result.data)
        // console.log(result);
    }

    const handleDelete = async (cmtid) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const dltCmtAct = await deleteCommentActivityAPI({ commentId: cmtid }, reqHeader)
        const result = await deleteCommentAPI({ id: cmtid })
        if (result.status == 200) {
            toast.success("Comment Deleted Successfully")
            getComment()
        }
        else {
            toast.warning("Something Went Wrong, Please Try Again")
        }
    }

    const getProfile = async (email) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAUserWithEmailAPI(email, reqHeader)
        setUserData(result.data)
        setLoading(false)
    }

    const handleReport = async (id) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await reportCommentAPI({ id }, reqHeader)
        console.log(result);
        if (result.status == 200) {
            toast.success(result.data)
        }
        else if (result.status == 401) {
            toast.warning(result.response.data)
        }
        else {
            toast.warning("Soemthing Went Wrong!")
        }

    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
            const decoded = jwtDecode(token);
            getProfile(decoded.userMail)

            setUserMail(decoded.userMail);
        } else {
            navigate('/login')
        }
        getAShow()
        getRecommendation()
        getComment()
        window.scrollTo(0, 0);
    }, [id])

    const handleChange = (event) => {
        setListData({ ...listData, status: event.target.value })
    };

    return (
        <>
            <Header />
            {
                !loading ?
                    <div className='min-h-screen bg-black sm:px-10 text-white sm:pt-20'>

                        <div className='flex justify-center items-center max-sm:flex-col min-h-[400px] p-5 bg-white/10'>
                            <div className='sm:min-w-[250px] w-[250px] h-full sm:pt-0 pt-10'>
                                <img className='w-full h-full object-fill p-5 sm:p-0' src={show.imageUrl} alt="" />
                            </div>
                            <div className='sm:px-5 flex flex-col justify-center'>
                                <h1 className='text-xl sm:text-3xl 2xl:text-4xl'>{show.title}</h1>
                                <div className='h-[150px] overflow-y-auto sm:text-base text-sm 2xl:text-base pt-2'><p><span className='text-blue-300'>Description: </span>{show.description}</p>
                                </div>
                                <div className='p-3'>
                                    {
                                        show.genre.map(genre => (
                                            <span className={`bg-black/60 rounded-2xl px-2 text-sm me-2 ${genre == "Action" ? 'text-[#FF3B30]' : genre == "Adventure" ? 'text-[#FF9500]' : genre == "Comedy" ? 'text-[#FFD60A]' : genre == "Drama" ? 'text-[#8E8E93]' : genre == "Horror" ? 'text-[#51515e]' : genre == "Thriller" ? 'text-[#5E5CE6]' : genre == "Sci-Fi" ? 'text-[#32ADE6]' : genre == "Fantasy" ? 'text-[#A55EEA]' : genre == "Romance" ? 'text-[#FF2D55]' : genre == "Mystery" ? 'text-[#3A3A3C]' : genre == "History" ? 'text-[#AC8E68]' : genre == "Suspense" ? 'text-[#6E6E73]' : genre == "Biography" ? 'text-[#2ECC71]' : genre == "Supernatural" ? 'text-[#B53471]' : genre == "Musical" ? 'text-[#F8A5C2]' : genre == "Crime" ? 'text-[#5856D6]' : 'text-white'}`}>{genre}</span>
                                        ))
                                    }
                                </div>
                                <div className='p-3 text-xs sm:text-sm text-white/60'>
                                    <p>Language: {show.language}</p>
                                    <p>Category: {show.category}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <div>
                                            <button onClick={() => handleAddToList(show.title, show._id, show.imageUrl, show.genre)} className='me-10 text-xs sm:text-base py-2 px-5 rounded-xl bg-linear-to-r via-[#000CF1]/60 hover:via-[#000CF1] via-30% from-[#000CF1]/60 hover:from-[#000CF1] to-black/60 hover:to-black text-white cursor-pointer'>Add to List</button>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-white/60 me-2 mt-1 text-sm sm:text-xl ps-5'>Rating: <FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{show.score}/10</p>
                                        <p className='text-white/60 ps-5 text-xs sm:text-sm'>Ratings by {show.scoreCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='bg-white/10 p-1 mt-10'>
                            <h2 className='sm:text-2xl px-1 sm:px-3'>Recommendation:</h2>
                            <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                                {
                                    recommendation?.length > 0 ?
                                        recommendation?.map((shows, index) => (
                                            <div key={index} className='bg-white/10 aspect-4/6  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                                                <div className='m-1 sm:m-2 aspect-3/4 overflow-hidden rounded-t-xl sm:rounded-xl'>
                                                    <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />{shows.show.score}/10</p>
                                                    <img className='w-full object-fill rounded-t-xl sm:rounded-xl' src={shows.show.imageUrl} alt="" />
                                                </div>
                                                <h5 className='px-2 sm:px-3 2xl:text-[18px] sm:text-base text-[10px] whitespace-nowrap overflow-hidden text-ellipsis'>{shows.show.title}</h5>
                                                <div className='hidden absolute inset-0 bg-black/90 sm:flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                                    <p className='text-xs 2xl:text-base px-5 text-center overflow-auto'>{shows.show.summary}</p>
                                                    <p className='text-xs 2xl:text-base px-5 text-center'><span className='text-blue-300'>Simillarity to {show.title} : </span><span className='font-bold text-green-300'>{(shows.similarity * 100).toFixed(2)}%</span></p>
                                                    <Link to={`/details/${shows.show._id}`}><button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs 2xl:text-base'>View Details</button></Link>
                                                </div>
                                                <Link to={`/details/${shows.show._id}`}>
                                                    <div className='block sm:hidden absolute inset-0'>

                                                    </div>
                                                </Link>
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
                                <img src={userData.profile} alt="no image" className='me-5 sm:w-10 sm:h-10 w-8 h-8' style={{ borderRadius: '50%' }} />
                                <div className='w-full flex flex-col justify-center items-end'>
                                    <input value={comment.comment} onChange={e => handleComment(e)} type="text" className='bg-white/10 py-1 px-2 text-white w-full rounded-xl placeholder:text-white/60 sm:text-base text-sm' placeholder='Write a comment' />
                                    <button onClick={addComment} className={`${commentButton} text-end bg-blue-600 mt-5 py-1 px-3 rounded cursor-pointer hover:bg-blue-700`}>Comment</button>
                                </div>
                            </div>
                            {
                                allComments?.length > 0 ?
                                    allComments.map((cmt, index) => (
                                        !cmt.userId.restriction &&
                                        (<React.Fragment key={index}>
                                            <div className='relative'>
                                                <div className='mt-10 flex'>
                                                    <img src={cmt.userId.profile} alt="no image" className='me-3 sm:w-10 sm:h-10 w-8 h-8' style={{ borderRadius: '50%' }} />
                                                    <div className='flex flex-col w-full'>
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className='flex items-center'>
                                                                <Link to={`/profile/${cmt.userId._id}`}><h5 className='sm:text-base text-sm'>{cmt.userId.username}</h5></Link>
                                                                <div className='relative group ms-1 flex justify-center items-center'>
                                                                    <span className={`text-blue-500 text-xs ${cmt.userId?.verified ? 'inline-block' : 'hidden'}`}><FontAwesomeIcon className='' icon={faCircleCheck} /></span>
                                                                    <span className={`absolute translate-x-10 mb-1 bg-black/30 text-white text-xs p-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50 ${cmt.userId?.verified ? 'inline-block' : 'hidden'} `}>
                                                                        Verified
                                                                    </span>
                                                                </div>
                                                                <span className='text-white/60 text-xs ps-2'>{format(cmt.createdAt)}</span>
                                                            </div>
                                                            {<button onClick={() => setToggleTDot(toggleTDot ? null : cmt._id)} className='rounded cursor-pointer hover:bg-white/5'><FontAwesomeIcon icon={faEllipsis} /></button>}
                                                        </div>
                                                        <p className='mt-3 sm:text-base text-xs'>{cmt.comment}</p>
                                                    </div>
                                                </div>
                                                {
                                                    toggleTDot == cmt._id &&
                                                    <div className='absolute right-10 top-0 translate-y-full flex flex-col'>
                                                        {cmt.userId.email == userMail ? <button onClick={() => handleReport(cmt._id)} className='bg-white/20 px-2 rounded-t-md cursor-pointer hover:bg-white/30'>Report</button> :
                                                            <button onClick={() => handleReport(cmt._id)} className='bg-white/20 px-2 rounded-md cursor-pointer hover:bg-white/30'>Report</button>
                                                        }
                                                        {cmt.userId.email == userMail && (<button onClick={() => handleDelete(cmt._id)} className='bg-red-400 px-2 rounded-b-md cursor-pointer hover:bg-red-500'>Delete</button>)}
                                                    </div>}
                                            </div>

                                        </React.Fragment>)
                                    ))
                                    :
                                    <div className='flex flex-1 justify-center items-center'>
                                        <p>✨ Be the first to drop a comment!</p>
                                    </div>

                            }
                        </div>
                    </div >
                    :
                    <div className='flex justify-center items-center bg-black text-white h-screen'>
                        <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybHRsNGFzZnh0cWU4M2VkYWYzaXhpcHloaXl4YThtMWZyaXN2cG02byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/200w.gif" alt="" style={{ width: '100px' }} />
                    </div>
            }
            {
                toggleList &&
                <div className='fixed inset-0 text-black bg-black/50 h-screen flex justify-center items-center'>
                    <div className='grid sm:grid-cols-12 py-15 w-full'>
                        <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
                        <div className='rounded-xl flex flex-col justify-center items-center text-white bg-white/1 backdrop-blur-xl py-5 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 text-center'>
                            <h2 className='text-xl sm:text-2xl py-10'>Add to <span className='text-blue-600'>Watchlist</span></h2>
                            <div className='flex w-full px-10 justify-center items-center sm:text-base text-sm'>
                                {/* <label>Title:</label> */}
                                {/* <input type="text" readOnly className='bg-white ms-2 w-full py-1 px-2 placeholder:text-black/60 text-black' placeholder='Title' /> */}
                                <h2 className='text-2xl font-bold'>{show.title}</h2>
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
                                <input className="ms-2 date-icon-white" value={listData.sDate || today} onChange={e => setListData({ ...listData, sDate: e.target.value })} id='sdate' type="date" />
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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </>
    )
}

export default ViewDetails