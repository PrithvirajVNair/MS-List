import React from 'react'
import SideBar from '../components/SideBar'

const AdminUsers = () => {
  return (
    <div className='bg-black text-white'>
      <div className='grid grid-cols-[1fr_4fr]'>
        <div className='h-full'>
          <SideBar users />
        </div>
        <div className='px-10'>
          <div className='pt-20'>
            <h2 className='text-3xl font-bold'>USERS</h2>
          </div>
          <div>
            <div className='grid grid-cols-4 pt-10'>
              {/* card */}
              <div className='bg-white/10 h-[200px] m-2 rounded-2xl overflow-hidden'>
                <div className='p-5 h-full'>
                  <div className='flex'>
                    <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='me-5 cursor-pointer' style={{ widows: '50px', height: '50px', borderRadius: '50%' }} onClick={() => setToggleUser(!toggleUser)} />
                    <div>
                      <p className='text-red-500'>ID :</p>
                      <p className='text-blue-500'>Name :</p>
                    </div>
                  </div>
                  <p className='pt-2'>Email :</p>
                  <div className='flex justify-between items-end py-5'>
                    <button className='border bg-orange-500 py-1 px-2 rounded-lg'>Ban</button>
                    <button className='border bg-red-500 py-1 px-2 rounded-lg'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUsers