import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import WatchlistCommon from '../components/WatchlistCommon'
import { getFavListAPI, removeFavListAPI } from '../../services/allAPIs';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Favorite = () => {


    const [listData, setListData] = useState([])
    const [listCount, setListCount] = useState(0)
    const [loading, setLoading] = useState(true)


    const getList = async (value) => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getFavListAPI(reqHeader, value)
        setListData(result.data.listData)
        setListCount(result.data.count)
        setLoading(false)
    }

    const removeFromFav = async (data) => {
        console.log(data);

        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await removeFavListAPI(data, reqHeader)
        console.log(result);
        if (result.status == 200) {
            getList()
            toast.success("Removed from Favorite")
        }
        else {
            toast.warning("Something Went Wrong...")
        }
    }

    useEffect(() => {
        getList()

    }, [])

    return (
        <>
            <WatchlistCommon favorite count={listCount} onHandleSearch={getList} />

            <div className='min-h-screen bg-black text-white'>
                {!loading ? (
                    listData?.length > 0 ?
                        <div className='w-full grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 lg:px-20 px-2'>
                            {
                                listData?.map((list,index) => (
                                    <div key={index} className='bg-white/10 min-h-50 rounded-xl lg:m-1 m-1 relative overflow-hidden'>
                                        <div className='flex flex-col max-sm:flex-col m-2 aspect-4/6'>
                                            <div className='aspect-2/3'>
                                                <img className='w-full h-full object-fill rounded-xl' src={list.imageUrl} alt="" />
                                            </div>
                                            <div>
                                                <p className='text-white/60 mt-1 text-xs'>Rating: <FontAwesomeIcon icon={faStarSolid} className='me-1 text-yellow-400' />{list.rating}/10</p>
                                                <p className='text-white/60 mt-1 text-xs'>Start Date : {new Date(list.sDate).toLocaleDateString("en-GB")}</p>
                                                <p className='text-white/60 mt-1 text-xs'>End Date : {new Date(list.eDate).toLocaleDateString("en-GB")}</p>
                                                <p className='text-white/60 mt-1 text-xs'>Status : {list.status}</p>
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
                                                <button onClick={() => removeFromFav(list)}><FontAwesomeIcon icon={faStarSolid} /></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        :
                        <div className='flex justify-center items-center'>
                            <p className='text-red-400 sm:text-2xl font-bold'>No Favorite Shows</p>
                        </div>
                )
                    :
                    <div className='flex justify-center items-center h-full'>
                        <img src="https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUybHRsNGFzZnh0cWU4M2VkYWYzaXhpcHloaXl4YThtMWZyaXN2cG02byZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7bu3XilJ5BOiSGic/200w.gif" alt="" style={{ width: '100px' }} />
                    </div>
                }
            </div>
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

export default Favorite