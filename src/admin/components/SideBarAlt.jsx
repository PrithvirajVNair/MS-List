import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBarAlt = ({ overview, users, contents, reports, settings }) => {

    const navigate = useNavigate()

    const swapButton = (data) => {
        if (data == "overview") {
            navigate('/admin-dashboard')
        }
        else if (data == "users") {
            navigate('/admin-users')
        }
        else if (data == "content") {
            navigate('/admin-contents')
        }
        else if (data == "settings") {
            navigate('/admin-settings')
        }
        else if (data == "reports") {
            navigate('/admin-reports')
        }
        else if (data == "logout") {
            sessionStorage.clear()
            navigate('/login')
        }
    }

    return (
        <div className='flex flex-col gap-2 rounded backdrop-blur-2xl bg-white/10 flex-wrap absolute p-5 top-11' style={{zIndex:'999'}}>
            <button onClick={() => swapButton("overview")} className={`py-1 cursor-pointer w-20 rounded hover:bg-white hover:text-black ${overview ? 'bg-white text-black' : 'bg-white/10'}`}>Overview</button>
            <button onClick={() => swapButton("users")} className={`py-1 cursor-pointer w-20 rounded hover:bg-white hover:text-black ${users ? 'bg-white text-black' : 'bg-white/10'}`}>Users</button>
            <button onClick={() => swapButton("content")} className={`py-1 cursor-pointer w-20 rounded hover:bg-white hover:text-black ${contents ? 'bg-white text-black' : 'bg-white/10'}`}>Content</button>
            <button onClick={() => swapButton("reports")} className={`py-1 cursor-pointer w-20 rounded hover:bg-white hover:text-black ${reports ? 'bg-white text-black' : 'bg-white/10'}`}>Reports</button>
            <button onClick={() => swapButton("settings")} className={`py-1 cursor-pointer w-20 rounded hover:bg-white hover:text-black ${settings ? 'bg-white text-black' : 'bg-white/10'}`}>Settings</button>
            <button onClick={() => swapButton("logout")} className={`py-1 cursor-pointer w-20 rounded hover:bg-white text-red-500 bg-white/10`}>Log Out</button>
        </div>
    )
}

export default SideBarAlt