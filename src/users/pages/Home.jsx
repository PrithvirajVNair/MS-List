import React from 'react'
import Header from '../components/Header'
import cbg from '../../assets/IM2024001_Yu-crop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Home = () => {

    // for carosuel
    // pagination
    // const [currenntPage, setCurrentPage] = useState(1)
    // const productsPerPage = 1
    // const totalPages = Math.ceil(datafromdb?.length / productsPerPage)
    // const currenntPageLastIndex = 0
    // const currenntPageFirstIndex = 0 or 1
    // const visibleProducts = allproducts?.slice(currenntPageFirstIndex, currenntPageLastIndex)


    return (
        <>
            <Header home />
            <div className='bg-black min-h-screen text-white pt-15'>

                {/* carousel */}
                <div className='sm:h-[650px] sm:pt-0 mx-3 sm:mx-10 rounded-xl relative'>
                    <div className='w-full h-full'>
                        <img src={cbg} alt="" className='bg-cover bg-center w-full h-full object-fill rounded-xl' />
                    </div>
                    <div className='bg-black/60 absolute inset-0'>
                        <div className='w-full h-full flex justify-between items-end'>
                            <div className='sm:mx-10 sm:my-20 mx-2 my-2'>
                                <h2 className='sm:text-4xl'>TITLE</h2>
                                <p className='text-white/60 sm:text-base text-xs'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <div className=''>
                                    <span className='bg-black/60 rounded-2xl px-2 text-xs sm:text-sm me-2'>Action</span>
                                    <span className='bg-black/60 rounded-2xl px-2 text-xs sm:text-sm me-2'>Drama</span>
                                </div>
                                <div className=''>
                                    <Link to={'/:id/details'}><button className='sm:py-2 sm:px-5 px-2 py-1 sm:text-base text-xs rounded-xl sm:my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer me-3'>View Details</button></Link>
                                    {/* <Link to={'/:id/addtolistz'}><button className='sm:py-2 sm:px-5 px-2 py-1 sm:text-base text-xs rounded-xl sm:my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer'>Add to List</button></Link> */}
                                </div>
                            </div>
                            <div className='text-sm sm:text-2xl sm:m-10 m-2'>
                                <FontAwesomeIcon icon={faChevronLeft} /> 1 / 8 <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* recomended */}
                <div className='sm:px-10 px-3 sm:mt-10'>
                    <h2 className='sm:text-2xl sm:pt-0 pt-5'>Recommended:</h2>
                    <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* popular */}
                <div className='sm:px-10 px-3 sm:mt-10'>
                    <h2 className='sm:text-2xl sm:pt-0 pt-5'>Popular:</h2>
                    <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* trending */}
                <div className='sm:px-10 px-3 sm:mt-10'>
                    <h2 className='sm:text-2xl sm:pt-0 pt-5'>Trending:</h2>
                    <div className='w-full grid sm:grid-cols-4 lg:grid-cols-6 grid-cols-3'>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                        <div className='bg-white/10 aspect-4/5  rounded-xl sm:m-3 m-1 relative group overflow-hidden'>
                            <div className='m-2 aspect-3/3 overflow-hidden rounded-xl'>
                                <p className='sm:text-white/60 absolute right-0 sm:me-5 me-3 mt-1 md:text-xs bg-black rounded-2xl text-[8px] p-1'><FontAwesomeIcon icon={faStar} className='me-1 text-yellow-400' />9.5/10</p>
                                <img className='w-full object-fill rounded-xl' src="https://m.media-amazon.com/images/I/91HjK3oSJwL._UF1000,1000_QL80_.jpg" alt="" />
                            </div>
                            <h5 className='px-3 sm:text-base text-xs'>TITLE</h5>
                            <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <p className='text-xs'>Summary</p>
                                <button className='py-2 px-5 rounded-xl my-5 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer text-xs'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home