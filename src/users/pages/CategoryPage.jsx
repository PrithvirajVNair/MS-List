import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faStar } from '@fortawesome/free-solid-svg-icons';

const CategoryPage = () => {

    const { categoryName } = useParams();
    console.log(categoryName);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryName]);

    return (
        <div className='bg-black min-h-screen text-white'>
            <Header />
            <div className='md:p-20 sm:p-10 px-2 pt-10'>
                <div className='flex justify-center text-xl md:text-3xl text-blue-300'>
                    <h1>{categoryName.toUpperCase()}</h1>
                </div>
                <div className='flex justify-center items-center bg-white/10 p-2 rounded sm:my-10 my-5'>
                    <label htmlFor='search'><FontAwesomeIcon icon={faMagnifyingGlass} className='text-white/60' /></label>
                    <input type="text" id='search' className='w-full py-2 px-2 rounded-lg text-sm outline-0' placeholder='Search Movies, Shows and More' />
                </div>
                <div className=''>
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
        </div>
    )
}

export default CategoryPage