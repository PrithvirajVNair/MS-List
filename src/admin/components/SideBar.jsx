import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = ({overview,users,contents,settings}) => {

  const navigate = useNavigate()

  const swapButton = (data)=>{
    if(data=="overview"){
      navigate('/admin-dashboard')
    }
    else if(data=="users"){
      navigate('/admin-users')
    }
    else if(data=="content"){
      navigate('/admin-contents')
    }
    else if(data=="settings"){
      navigate('/admin-settings')
    }
    else if(data=="logout"){
      navigate('/login')
    }
  }

  return (
    <div className='h-screen border-r flex flex-col'>
        <div className='py-5 border-b w-full'>
            <h1 className='text-2xl font-semibold text-center'><span className='text-blue-600'>MS</span> List</h1>
            <p className='text-center text-white/60'>Admin</p>
        </div>
        <div className='w-full flex flex-col justify-center items-center flex-1 '>
            <button onClick={()=>swapButton("overview")} className={`py-1 w-40 rounded my-2 hover:bg-white hover:text-black ${overview? 'bg-white text-black':'bg-white/10'}`}>Overview</button>
            <button onClick={()=>swapButton("users")} className={`py-1 w-40 rounded my-2 hover:bg-white hover:text-black ${users? 'bg-white text-black':'bg-white/10'}`}>Users</button>
            <button onClick={()=>swapButton("content")} className={`py-1 w-40 rounded my-2 hover:bg-white hover:text-black ${contents? 'bg-white text-black':'bg-white/10'}`}>Content</button>
            <button onClick={()=>swapButton("settings")} className={`py-1 w-40 rounded my-2 hover:bg-white hover:text-black ${settings? 'bg-white text-black':'bg-white/10'}`}>Settings</button>
            <button onClick={()=>swapButton("logout")} className={`py-1 w-40 rounded my-2 hover:bg-white text-red-500 bg-white/10`}>Log Out</button>
        </div>
    </div>
  )
}

export default SideBar