import React, { useEffect } from 'react'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import { addShowAPI, deleteShowAPI, getShowAPI } from '../../services/allAPIs'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const AdminContents = () => {

  const [toggleContent, setToggleContent] = useState(false)
  const [shows, setShows] = useState([])

  const [addShow, setAddShow] = useState({
    title: "",
    language: "",
    category: "",
    description: "",
    summary: "",
    genre: [],
    imageUrl: ""
  })
  console.log(addShow);


  const getShow = async () => {
    const result = await getShowAPI()
    console.log((result.data));
    setShows(result.data.allShows)
  }

    const handleDelete = async(id) =>{
      // console.log(id);
      const result = await deleteShowAPI({id})
      // console.log(result);
      
      getShow()
    }

  const handleCancel = () => {
    setToggleContent(false)
    setAddShow({
      title: "",
      language: "",
      category: "",
      description: "",
      summary: "",
      genre: [],
      imageUrl: ""
    }
    )
  }

  const handleAdd = async () => {
    const {title,language,category,description,genre,imageUrl} = addShow
    if (!title || !language || !category || !description || !genre || !imageUrl) {
      toast.warning("Fill the Details")
    }
    else {
      const result = await addShowAPI(addShow)
      console.log(result);
      setAddShow({
      title: "",
      language: "",
      category: "",
      description: "",
      summary: "",
      genre: [],
      imageUrl: ""
    }
    )
      setToggleContent(false)
      getShow()
    }
  }

  useEffect(() => {
    getShow()
  }, [])

  return (
    <div className='bg-black text-white'>
      <div className='grid grid-cols-[1fr_4fr] min-h-screen'>
        <div className='h-full'>
          <SideBar contents />
        </div>
        <div className='px-10 overflow-auto h-screen'>
          <div className='pt-20'>
            <h2 className='text-3xl font-bold'>CONTENTS</h2>
          </div>
          <div className='pt-5 text-center w-full '>
            <button onClick={() => setToggleContent(true)} className='py-2 px-3 bg-blue-400 rounded-xl cursor-pointer hover:bg-blue-500'>ADD CONTENT</button>
          </div>
          <div>
            <div className='grid grid-cols-1 pt-10'>
              {/* card */}
              {
                shows.length > 0 ?
                  shows?.map((items) => (
                    <div className='bg-white/10 m-2 w-full'>
                      <div className='p-5 h-[300px] grid grid-cols-5 w-full'>
                        <div className='flex justify-center items-center'>
                          <img src={items.imageUrl} style={{ width: '150px' }} alt="no image" className='' />
                        </div>
                        <div className='col-span-4 px-5 overflow-auto'>
                          <div className=''>
                            <p className='text-red-400'>ID : {items._id}</p>
                            <p className=''>Title : {items.title}</p>
                            <p className=''>Category : {items.category}</p>
                            <p className=''>Language : {items.language}</p>
                            <p className=''>Genre : {items.genre}</p>
                            <p className=''>Summary : {items.summary}</p>
                            <p className=''>Description : {items.description}</p>
                          </div>
                          <div className='flex justify-end'>
                            <button className='border bg-orange-500 py-1 px-2 rounded-lg me-3'>Edit</button>
                            <button onClick={()=>handleDelete(items._id)} className='border bg-red-500 py-1 px-2 rounded-lg'>Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>No Shows Added</p>
              }
              <div className='bg-white/10 m-2 w-full'>
                <div className='p-5 h-[300px] grid grid-cols-5 w-full'>
                  <div className='flex justify-center items-center'>
                    <img src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" style={{ width: '150px' }} alt="no image" className='' />
                  </div>
                  <div className='col-span-4 px-5 overflow-auto'>
                    <div className=''>
                      <p className=''>Title :</p>
                      <p className=''>Category :</p>
                      <p className=''>Language :</p>
                      <p className=''>Genre :</p>
                      <p className=''>Summary :</p>
                      <p className=''>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam similique dolore eum magnam. Eligendi in consequatur architecto, laborum obcaecati nam, delectus reprehenderit quaerat nihil quia doloribus dolores. Quam, debitis est. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia earum reiciendis quo sapiente incidunt quidem recusandae ad similique, veniam ipsa, sed, quaerat facere assumenda. Amet atque nulla sit placeat aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus soluta aut aliquid recusandae nam cum, esse delectus dolorum hic blanditiis eveniet quibusdam? Quibusdam adipisci rem maxime esse rerum amet mollitia!</p>
                    </div>
                    <div className='flex justify-end'>
                      <button className='border bg-orange-500 py-1 px-2 rounded-lg me-3'>Edit</button>
                      <button className='border bg-red-500 py-1 px-2 rounded-lg'>Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        toggleContent &&
        <div className='h-screen inset-0 absolute bg-black/60 text-black'>
          <div className='grid sm:grid-cols-12 py-15 h-screen'>
            <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
            <div className='border rounded-xl flex flex-col justify-center items-center bg-white/50 backdrop-blur-lg py-5 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4'>
              <h2 className='mb-10 text-2xl font-bold'>ADD CONTENT</h2>
              <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center items-center'>
                  <label className='mb-3' htmlFor='title'>Title:</label>
                  <label className='mb-3' htmlFor='cat'>Category:</label>
                  <label className='mb-3' htmlFor='lang'>Language:</label>
                  <label className='mb-3' htmlFor='gen'>Genre:</label>
                  <label className='mb-3' htmlFor='img'>Image URL:</label>
                  <label className='mb-3' htmlFor='desc'>Description:</label>
                </div>
                <div className=''>
                  <input value={addShow.title} onChange={e => setAddShow({ ...addShow, title: e.target.value })} className='bg-white ms-2 mb-3' id='title' type="text" />
                  <input value={addShow.category} onChange={e => setAddShow({ ...addShow, category: e.target.value })} className='bg-white ms-2 mb-3' id='cat' type="text" />
                  <input value={addShow.language} onChange={e => setAddShow({ ...addShow, language: e.target.value })} className='bg-white ms-2 mb-3' id='lang' type="text" />
                  <input value={addShow.genre} onChange={e => setAddShow({ ...addShow, genre: e.target.value })} className='bg-white ms-2 mb-3' id='gen' type="text" />
                  <input value={addShow.imageUrl} onChange={e => setAddShow({ ...addShow, imageUrl: e.target.value })} className='bg-white ms-2 mb-3' id='img' type="text" />
                  <textarea value={addShow.description} onChange={e => setAddShow({ ...addShow, description: e.target.value })} rows={1} className='bg-white ms-2 mb-3' id='desc' type="text" />
                </div>
              </div>
              <div>
                <button onClick={handleCancel} className='py-1 px-2 bg-yellow-600 rounded me-3 text-white cursor-pointer '>Cancel</button>
                <button onClick={handleAdd} className='py-1 px-2 bg-blue-600 rounded me-3 text-white cursor-pointer'>Add</button>
              </div>
            </div>
            <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
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
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  )
}

export default AdminContents