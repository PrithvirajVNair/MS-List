import React from 'react'
import SideBar from '../components/SideBar'

const AdminUsers = () => {
  return (
    <div className='bg-black text-white'>
        <div className='grid grid-cols-[1fr_4fr]'>
            <div className='h-full'>
                <SideBar users/>
            </div>
        </div>
    </div>
  )
}

export default AdminUsers