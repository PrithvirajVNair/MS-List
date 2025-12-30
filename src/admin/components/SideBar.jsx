import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = ({overview,users,contents,reports,settings}) => {

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
    else if(data=="reports"){
      navigate('/admin-reports')
    }
    else if(data=="logout"){
      sessionStorage.clear()
      navigate('/login')
    }
  }

  return (
    <div className='h-screen border-r flex flex-col w-fit'>
        <div className='py-5 border-b'>
            <h1 className='text-2xl font-semibold text-center'><span className='text-blue-600'>MS</span> List</h1>
            <p className='text-center text-white/60'>Admin</p>
        </div>
        <div className='w-fit px-5 flex flex-col items-center'>
            <button onClick={()=>swapButton("overview")} className={`py-1 cursor-pointer w-40 rounded my-2 hover:bg-white hover:text-black ${overview? 'bg-white text-black':'bg-white/10'}`}>Overview</button>
            <button onClick={()=>swapButton("users")} className={`py-1 cursor-pointer w-40 rounded my-2 hover:bg-white hover:text-black ${users? 'bg-white text-black':'bg-white/10'}`}>Users</button>
            <button onClick={()=>swapButton("content")} className={`py-1 cursor-pointer w-40 rounded my-2 hover:bg-white hover:text-black ${contents? 'bg-white text-black':'bg-white/10'}`}>Content</button>
            <button onClick={()=>swapButton("reports")} className={`py-1 cursor-pointer w-40 rounded my-2 hover:bg-white hover:text-black ${reports? 'bg-white text-black':'bg-white/10'}`}>Reports</button>
            <button onClick={()=>swapButton("logout")} className={`py-1 cursor-pointer w-40 rounded my-2 hover:bg-white text-red-500 bg-white/10`}>Log Out</button>
        </div>
    </div>
  )
}

export default SideBar