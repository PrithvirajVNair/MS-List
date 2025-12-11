import React, { useEffect } from 'react'
import SideBar from '../components/SideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const AdminSettings = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token')
      const details = jwtDecode(token)
      if (details.userMail != "mslistadmin@gmail.com") {
        navigate('/youhavenoaccess')
      }

    }
    else {
      navigate('/login')
    }
  },[])


  return (
    <div className='bg-black text-white'>
      <div className='grid grid-cols-[1fr_4fr] min-h-screen'>
        <div className='h-full'>
          <SideBar settings />
        </div>
        <div className="p-10">
          <h1 className="text-2xl text-center mb-8 font-semibold text-white/60">Settings</h1>

          <div className="flex flex-col md:flex-row justify-center items-start gap-10 px-5 md:px-20">
            {/* Left Paragraph */}
            <div className="text-white/60 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, eum explicabo dicta commodi aliquam porro fugiat alias impedit dignissimos accusantium officia consequatur doloribus provident quo nisi soluta atque cupiditate quod.
              <br /><br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, praesentium. In repudiandae ullam et itaque officia, quia quo rerum delectus, sequi distinctio ipsa atque architecto, incidunt mollitia ea labore natus!
            </div>

            {/* Right Card */}
            <div className="flex justify-center items-center">
              <div className="bg-white/10 p-8 rounded-lg shadow-lg w-96">
                {/* Profile Icon */}
                <div className="flex justify-center items-center mb-6 flex-col">
                  <div className="w-24 h-24 bg-white rounded-full flex justify-center items-center border-4 border-white shadow-md">
                    <img src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" alt="no image" className='cursor-pointer w-full h-full object-fill' style={{ borderRadius: '50%' }} />
                  </div>

                  {/* Edit Icon */}
                  <div className="cursor-pointer">
                    <FontAwesomeIcon icon={faPenToSquare} className='text-yellow-400 hover:text-yellow-500' />
                  </div>
                </div>

                {/* Input Fields */}
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition">Reset</button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings