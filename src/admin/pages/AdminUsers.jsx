import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { banUserAPI, deleteUserAPI, getUsersAPI, unBanUserAPI } from '../../services/allAPIs'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const AdminUsers = () => {

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const getUsers = async () => {
    const result = await getUsersAPI()
    console.log(result);

    setUsers(result.data.allUsers)
  }

  const handleDelete = async (id) => {
    // console.log(id);
    const result = await deleteUserAPI({ id })
    // console.log(result);

    getUsers()
  }

  const handleBan = async (email) => {
    const result = await banUserAPI({ email })
    console.log(result);
    getUsers()
  }
  const handleUnBan = async (email) => {
    const result = await unBanUserAPI({ email })
    console.log(result);
    getUsers()
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
    getUsers()
  }, [])

  return (
    <div className='bg-black text-white'>
      <div className='grid grid-cols-[1fr_6fr] min-h-screen'>
        <div className='h-full'>
          <SideBar users />
        </div>
        <div className='px-10  overflow-auto h-screen'>
          <div className='pt-20'>
            <h2 className='text-3xl font-bold'>USERS</h2>
          </div>
          <div>
            <div className='grid grid-cols-3 pt-10'>
              {/* card */}
              {
                users?.length > 0 ?
                  users?.map((items) => (
                    <div className='bg-white/10 h-[200px] m-2 rounded-2xl overflow-auto'>
                      <div className='p-5 h-full'>
                        <div className='flex'>
                          <img src={items.profile} alt="no image" className='me-5 cursor-pointer' style={{ widows: '50px', height: '50px', borderRadius: '50%' }} onClick={() => setToggleUser(!toggleUser)} />
                          <div>
                            <p className='text-red-500'>ID : {items._id}</p>
                            <p className='text-blue-500'>Name : {items.username}</p>
                          </div>
                        </div>
                        <p className='pt-2'>Email : {items.email}</p>
                        <div className='flex justify-between items-end py-5'>
                          {!items.restriction?
                          <button onClick={()=>handleBan(items.email)} className='bg-orange-500 py-1 px-2 rounded-lg cursor-pointer'>Ban</button>
                        :
                        <button onClick={()=>handleUnBan(items.email)} className='bg-green-500 py-1 px-2 rounded-lg cursor-pointer'>Unban</button>
                        }
                          <button onClick={() => handleDelete(items._id)} className='bg-red-500 py-1 px-2 rounded-lg cursor-pointer'>Delete</button>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>No Users</p>
              }
              {/* <div className='bg-white/10 h-[200px] m-2 rounded-2xl overflow-hidden'>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUsers