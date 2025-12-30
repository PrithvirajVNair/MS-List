import React, { useEffect } from 'react'
import SideBar from '../components/SideBar'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Select from '@mui/material/Select'
import { addShowAPI, addToFeaturedAPI, deleteShowAPI, editAShowAPI, getAdminShowAPI, getShowAPI, removeFromFeaturedAPI } from '../../services/allAPIs'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import SideBarAlt from '../components/SideBarAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const AdminContents = () => {

  const [toggleContent, setToggleContent] = useState(false)
  const [toggleEditContent, setToggleEditContent] = useState(false)
  const [editContent, setEditContent] = useState({})
  const [editStatus, setEditStatus] = useState({})
  const [shows, setShows] = useState([])
  const navigate = useNavigate()
  const [tempgenre, setTempGenre] = useState("")
  const [toggleMenu, setToggleMenu] = useState(false)
  const [addShow, setAddShow] = useState({
    title: "",
    language: "",
    category: "",
    description: "",
    summary: "",
    genre: [],
    imageUrl: "",
    coverUrl: ""
  })
  console.log(addShow);

  const setGenre = () => {
    setAddShow({ ...addShow, genre: tempgenre.split(",").map(g => (g.trim())).filter(g => g != "") })
  }

  const setEditGenre = () => {
    setEditContent({ ...editContent, genre: tempgenre.split(",").map(g => (g.trim())).filter(g => g != "") })
  }

  const getShow = async () => {
    const result = await getAdminShowAPI()
    console.log((result.data));
    setShows(result.data)
  }

  const handleDelete = async (id) => {
    // console.log(id);
    const result = await deleteShowAPI({ id })
    // console.log(result);

    getShow()
  }

  const handleCancel = () => {
    setToggleContent(false)
    setToggleEditContent(false)
    setAddShow({
      title: "",
      language: "",
      category: "",
      description: "",
      summary: "",
      genre: [],
      imageUrl: "",
      coverUrl: ""
    }
    )
    setTempGenre("")
  }

  const handleAdd = async () => {
    const { title, language, category, description, genre, imageUrl } = addShow
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
        imageUrl: "",
        coverUrl: ""
      }
      )
      setTempGenre("")
      setToggleContent(false)
      getShow()
    }
  }

  const handleAddFeatured = async (id) => {
    const result = await addToFeaturedAPI({ id })
    console.log(result);
    getShow()
  }

  const handleRemoveFeatured = async (id) => {
    const result = await removeFromFeaturedAPI({ id })
    console.log(result);
    getShow()
  }

  const handleEditModal = (data) => {
    setEditContent(data)
    setTempGenre(data.genre)
    setToggleEditContent(true)
  }

  const handleEdit = async () => {
    const result = await editAShowAPI(editContent)
    console.log(result);
    if (result.status == 200) {
      setEditStatus(result)
      toast.success("Updated Successfully")
      setToggleEditContent(false)
      // setEditContent({})
    }
    else {
      toast.warning("Something Went Wrong!")
      setToggleEditContent(false)
    }
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
    getShow()
  }, [editStatus])

  return (
    <div className='bg-black text-white'>
      <div className='flex backdrop-blur-2xl justify-end items-center w-full lg:hidden border h-10 px-5'>
        {!toggleMenu ? <FontAwesomeIcon onClick={() => setToggleMenu(true)} icon={faBars} className='text-xl' /> : <FontAwesomeIcon onClick={() => setToggleMenu(false)} icon={faXmark} className='text-xl' />}
        {toggleMenu && <SideBarAlt contents />}
      </div>
      <div className='grid grid-cols-[1fr_6fr] min-h-screen'>
        <div className='h-full hidden lg:block'>
          <SideBar contents />
        </div>
        <div className='px-10 min-h-screen max-lg:col-span-12 '>
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
                  shows?.map((items, index) => (
                    <div key={index} className='bg-white/10 m-2 w-full'>
                      <div className='p-5 h-[300px] grid grid-cols-5 w-full'>
                        <div className='flex justify-center items-center'>
                          <img src={items.imageUrl} style={{ width: '150px' }} alt="no image" className='' />
                        </div>
                        <div className='col-span-4 px-5 overflow-aut'>
                          <div className=''>
                            <p className='text-red-400'>ID : {items._id}</p>
                            <p className=''>Title : {items.title}</p>
                            <p className=''>Category : {items.category}</p>
                            <p className=''>Language : {items.language}</p>
                            <p className=''>Genre : {items.genre}</p>
                            <div className='h-25 overflow-auto'>
                              <p className=''>Summary : {items.summary}</p>
                              <p className=''>Description : {items.description}</p>
                            </div>
                          </div>
                          <div className='flex justify-end py-2'>
                            <div>
                              {!items.featured ? <button onClick={() => handleAddFeatured(items._id)} className='bg-blue-500 py-1 px-2 rounded-lg me-3 cursor-pointer'>Add to Featured</button> :
                                <button onClick={() => handleRemoveFeatured(items._id)} className='bg-orange-500 py-1 px-2 rounded-lg me-3 cursor-pointer'>Remove From Featured</button>}
                            </div>
                            <button onClick={() => handleEditModal(items)} className='bg-orange-500 py-1 px-2 rounded-lg me-3 cursor-pointer'>Edit</button>
                            <button onClick={() => handleDelete(items._id)} className='bg-red-500 py-1 px-2 rounded-lg cursor-pointer'>Delete</button>
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
        <div className='h-screen inset-0 fixed bg-black/50 flex justify-center items-center'>
          <div className='grid sm:grid-cols-12 py-15'>
            <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
            <div className='rounded-xl flex flex-col justify-center items-center text-white backdrop-blur-lg py-5 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 p-20'>
              <h2 className='mb-10 text-2xl font-bold'>ADD CONTENT</h2>
              <div className='grid grid-cols-2'>
                {/* <div className='flex flex-col justify-center items-center'> */}
                <label className='mb-3' htmlFor='title'>Title:</label>
                <input value={addShow.title} onChange={e => setAddShow({ ...addShow, title: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='title' type="text" />
                <label className='mb-3' htmlFor='cat'>Category:</label>
                <input value={addShow.category} onChange={e => setAddShow({ ...addShow, category: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='cat' type="text" />
                <label className='mb-3' htmlFor='lang'>Language:</label>
                <input value={addShow.language} onChange={e => setAddShow({ ...addShow, language: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='lang' type="text" />
                <label className='mb-3' htmlFor='gen'>Genre:</label>
                <div className='flex justify-center items-center mb-3'>
                  <input value={tempgenre} onChange={e => setTempGenre(e.target.value)} className='bg-white ms-2  text-black w-full' id='gen' type="text" />
                  <button onClick={setGenre} className='text-xs bg-blue-400 px-2 cursor-pointer h-full'>Add</button>
                </div>
                <label className='mb-3' htmlFor='img'>Image URL:</label>
                <input value={addShow.imageUrl} onChange={e => setAddShow({ ...addShow, imageUrl: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='img' type="text" />
                <label className='mb-3' htmlFor='img'>Cover URL:</label>
                <input value={addShow.coverUrl} onChange={e => setAddShow({ ...addShow, coverUrl: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='img' type="text" />
                <label className='mb-3' htmlFor='desc'>Description:</label>
                <textarea value={addShow.description} onChange={e => setAddShow({ ...addShow, description: e.target.value })} rows={1} className='bg-white ms-2 mb-3 text-black' id='desc' type="text" />
                {/* </div> */}
              </div>
              <div>
                <button onClick={handleCancel} className='py-1 px-2 bg-yellow-600 rounded me-3 text-white cursor-pointer '>Cancel</button>
                <button onClick={handleAdd} className='py-1 px-2 bg-blue-600 rounded me-3 text-white cursor-pointer'>Add</button>
              </div>
            </div>
            <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
          </div>
        </div>}
      {
        toggleEditContent &&
        <div className='h-screen inset-0 fixed bg-black/50 flex justify-center items-center'>
          <div className='grid sm:grid-cols-12 py-15'>
            <div className='sm:col-span-2 md:col-span-3 lg:col-span-4'></div>
            <div className='rounded-xl flex flex-col justify-center items-center text-white backdrop-blur-lg py-5 col-span-12 sm:col-span-8 md:col-span-6 lg:col-span-4 p-20'>
              <h2 className='mb-10 text-2xl font-bold'>ADD CONTENT</h2>
              <div className='grid grid-cols-2'>
                {/* <div className='flex flex-col justify-center items-center'> */}
                <label className='mb-3' htmlFor='title'>Title:</label>
                <input value={editContent.title} onChange={e => setEditContent({ ...editContent, title: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='title' type="text" />
                <label className='mb-3' htmlFor='cat'>Category:</label>
                <input value={editContent.category} onChange={e => setEditContent({ ...editContent, category: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='cat' type="text" />
                <label className='mb-3' htmlFor='lang'>Language:</label>
                <input value={editContent.language} onChange={e => setEditContent({ ...editContent, language: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='lang' type="text" />
                <label className='mb-3' htmlFor='gen'>Genre:</label>
                <div className='flex justify-center items-center mb-3'>
                  <input value={tempgenre} onChange={e => setEditGenre(e.target.value)} className='bg-white ms-2  text-black w-full' id='gen' type="text" />
                  <button onClick={setGenre} className='text-xs bg-blue-400 px-2 cursor-pointer h-full'>Add</button>
                </div>
                <label className='mb-3' htmlFor='img'>Image URL:</label>
                <input value={editContent.imageUrl} onChange={e => setEditContent({ ...editContent, imageUrl: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='img' type="text" />
                <label className='mb-3' htmlFor='img'>Cover URL:</label>
                <input value={editContent.coverUrl} onChange={e => setEditContent({ ...editContent, coverUrl: e.target.value })} className='bg-white ms-2 mb-3 text-black' id='img' type="text" />
                <label className='mb-3' htmlFor='desc'>Description:</label>
                <textarea value={editContent.description} onChange={e => setEditContent({ ...editContent, description: e.target.value })} rows={1} className='bg-white ms-2 mb-3 text-black' id='desc' type="text" />
                {/* </div> */}
              </div>
              <div>
                <button onClick={handleCancel} className='py-1 px-2 bg-yellow-600 rounded me-3 text-white cursor-pointer '>Cancel</button>
                <button onClick={handleEdit} className='py-1 px-2 bg-blue-600 rounded me-3 text-white cursor-pointer'>Edit</button>
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