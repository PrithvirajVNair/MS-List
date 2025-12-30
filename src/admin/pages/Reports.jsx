import React from 'react'
import SideBar from '../components/SideBar'
import { banUserAPI, deleteCommentAPI, deleteReportAPI, getReportAPI, unBanUserAPI } from '../../services/allAPIs'
import { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBan, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const Reports = () => {

    const navigate = useNavigate()
    const [reports, setReports] = useState([])
    console.log(reports);


    const getReport = async () => {
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getReportAPI(reqHeader)
        setReports(result.data)
        console.log(result.data);

    }

    const handleDeleteComment = async (cmtid) => {
        const result = await deleteCommentAPI({ id: cmtid })
        if (result.status == 200) {
            getReport()
        }
        else {
            toast.warning("Something Went Wrong, Please Try Again")
        }
    }

    const handleDelete = async (rid) => {
        const result = await deleteReportAPI({ id: rid })
        console.log(result);

        if (result.status == 200) {
            getReport()
        }
        else {
            toast.warning("Something Went Wrong, Please Try Again")
        }
    }

    const handleBan = async (email) => {
        const result = await banUserAPI({ email })
        console.log(result);
        getReport()
    }
    const handleUnBan = async (email) => {
        const result = await unBanUserAPI({ email })
        console.log(result);
        getReport()
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token')
            const details = jwtDecode(token)
            if (!details.administrator) {
                navigate('/youhavenoaccess')
            }
        }
        else {
            navigate('/login')
        }
        getReport()
    }, [])

    return (
        <div className='bg-black text-white'>
            <div className='grid grid-cols-[1fr_6fr] min-h-screen'>
                <div className='h-full'>
                    <SideBar reports />
                </div>
                <div className='px-5'>
                    <div className='pt-20'>
                        <h2 className='text-3xl font-bold'>REPORTS</h2>
                    </div>
                    <table className='table-auto w-full mt-10'>
                        <thead className='bg-white/20'>
                            <tr className=''>
                                <th className='py-2'>#</th>
                                <th className='py-2'>User</th>
                                <th className='py-2'>Comment</th>
                                <th className='py-2'>Report Date</th>
                                <th className='py-2'>Reported By</th>
                                <th className='py-2'>Go To Show</th>
                                <th className='py-2'>Ban</th>
                                <th className='py-2'>Delete Comment</th>
                                <th className='py-2'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reports?.length > 0 ?
                                    reports?.map((data, index) => (
                                        <tr key={index} className='text-center bg-white/10 overflow-scroll'>
                                            <td className='py-2'>{index + 1}</td>
                                            <td className='py-2'>{data.commentId?.userId?.email || "Comment Deleted"}</td>
                                            <td className='py-2 max-w-25'>{data.commentId?.comment || "Comment Deleted"}</td>
                                            <td className='py-2 max-w-15'>{data.reportDate.split("T")[0]}</td>
                                            <td className='py-2 max-w-15 overflow-hidden text-ellipsis'>{data.reportedBy}</td>
                                            <td>{data.commentId ? <Link to={`/details/${data.commentId?.showId}`}><button className='bg-green-400 rounded px-1 hover:bg-green-500 cursor-pointer'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></button></Link> : "--"}</td>

                                            <td>{data.commentId ?
                                                (!data.commentId?.userId?.restriction ?
                                                    <button onClick={() => handleBan(data.commentId.userId.email)} className='text-orange-400 rounded px-1 hover:text-orange-500 cursor-pointer'> <FontAwesomeIcon icon={faBan} /></button>
                                                    :
                                                    <button onClick={() => handleUnBan(data.commentId.userId.email)} className='text-green-400 rounded px-1 hover:text-green-500 cursor-pointer'> <FontAwesomeIcon icon={faCheck} /></button>)

                                                : "--"}</td>

                                            <td>{data.commentId ? <button onClick={() => handleDeleteComment(data.commentId._id)} className='bg-red-400 rounded px-1 hover:bg-red-500 cursor-pointer'><FontAwesomeIcon icon={faTrash} /></button> : "--"}</td>

                                            <td><button onClick={() => handleDelete(data._id)} className='bg-red-400 rounded px-1 hover:bg-red-500 cursor-pointer'><FontAwesomeIcon icon={faTrash} /></button></td>
                                        </tr>
                                    )) :
                                    <tr className='text-center text-red-400'><td>No Reports</td></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Reports