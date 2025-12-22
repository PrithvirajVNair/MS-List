import { faStar as faStarSolid, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WatchlistCommon from '../components/WatchlistCommon'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import MylistCommon from '../components/MylistCommon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addCustomFavListAPI, deleteCustomListAPI, getCustomListAPI } from '../../services/allAPIs';

const MyListAll = () => {

    const [listData, setListData] = useState([])
    const [listCount, setListCount] = useState(0)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState("")
    const [toggleDelete, setToggleDelete] = useState(false)
    const [deleteData, setDeleteData] = useState({
        id: ""
    })
    const navigate = useNavigate()


    const getList = async (value) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getCustomListAPI(reqHeader, value)
        setListData(result.data.listData)
        setListCount(result.data.count)
        setLoading(false)
    }

    const addToFav = async (data) => {
        console.log(data);

        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await addCustomFavListAPI(data, reqHeader)
        // console.log(result);
        if (result.status == 200) {
            getList()
            toast.success("Added to Favorite")
        }
        else {
            toast.warning("Something Went Wrong...")
        }
    }

    const handleDelete = async () => {
        setToggleDelete(false)
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await deleteCustomListAPI(deleteData, reqHeader)
        // console.log(result);
        if (result.status == 200) {
            getList()
        }
    }

    const handleDeleteModal = async (id) => {
        setToggleDelete(true)
        setDeleteData({ ...deleteData, id: id })
    }

    useEffect(() => {
        getList()
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
        } else {
            navigate('/login')
        }

    }, [])

    return (
        <>
            <MylistCommon all count={listCount} onHandleSearch={getList} />
            <div className='min-h-screen bg-black text-white'>
                {
                    !loading ?
                        <div className='w-full grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 lg:px-20 px-2'>
                            {
                                listData?.length > 0 ?
                                    listData?.map((list, index) => (
                                        <div key={index} className='bg-white/10 rounded-xl lg:m-1 m-1 relative overflow-hidden aspect-auto'>
                                            <div className='flex flex-col max-sm:flex-col m-2'>
                                                {/* <div className='aspect-2/3'>
                                                    <img className='w-full h-full object-fill rounded-xl' src={list.imageUrl} alt="" />
                                                </div> */}
                                                <div className='group relative'>
                                                    <h5 className='overflow-x-hidden text-ellipsis whitespace-nowrap'>{list.title}</h5>
                                                    <span className="pointer-events-none absolute left-0 bottom-0 mb-1 bg-black text-white text-xs p-1 rounded whitespace-nowrap opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-50">
                                                        {list.title}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className='text-white/60 mt-1 text-xs'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />{list.rating}/10</p>
                                                    <p className='text-white/60 mt-1 text-xs'>Start Date : {new Date(list.sDate).toLocaleDateString("en-GB")}</p>
                                                    <p className='text-white/60 mt-1 text-xs'>End Date : {new Date(list.eDate).toLocaleDateString("en-GB")}</p>
                                                    <p className='text-white/60 mt-1 text-xs'>Status : {list.status}</p>
                                                </div>
                                            </div>
                                            <div className='px-2 flex justify-between items-center'>
                                                <button onClick={() => handleDeleteModal(list._id)} className='text-red-500'><FontAwesomeIcon icon={faTrash} /></button>
                                                <div>
                                                    {list.favorite ?
                                                        <button><FontAwesomeIcon icon={faStarSolid} /></button> :
                                                        <button onClick={() => addToFav(list)}> <FontAwesomeIcon icon={faStarRegular} /></button>}
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
                        </div>
                }
            </div>
            {
                toggleDelete &&
                <div className='inset-0 fixed h-screen bg-black/60'>
                    <div className='text-white flex justify-center items-center h-screen'>
                        <div className='backdrop-blur-2xl p-5 rounded-2xl w-105 m-5'>
                            <h2 className='text-red-500 md:text-2xl'>Are You Sure?</h2>
                            <p className='md:text-base text-xs'>Are you sure you want to delete this show from list?</p>
                            <div className='flex justify-end items-center md:text-base text-sm'>
                                <button onClick={() => setToggleDelete(false)} className='bg-blue-400 rounded px-2 mt-2 me-3 cursor-pointer hover:bg-blue-500'>Cancel</button>
                                <button onClick={handleDelete} className='bg-red-400 rounded px-2 mt-2 cursor-pointer hover:bg-red-500'>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>}
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="dark"
                transition={Bounce}
            />
        </>
    )
}

export default MyListAll