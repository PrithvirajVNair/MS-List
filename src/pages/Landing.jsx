import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faMasksTheater, faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Landing = () => {


    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log('scrollY:', window.scrollY)
            if (window.scrollY > 524) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])



    return (
        <>
            <Header showButton={showButton} />
            <div className='min-h-screen text-white'>
                <div className='background1'>
                    <div className='bg-black/60 flex flex-col justify-center items-center h-screen text-center'>
                        <h1 className='text-7xl leading-22'>Never Forget What to <br /> Watch Next</h1>
                        <p className='text-2xl text-white/60 mt-5'>Organize your favorite movies and TV shows in one place.</p>
                        <p className='text-2xl text-white/60'>Create your list, track what you've watched.</p>
                        <Link to={'/register'}><button className='py-2 px-5 rounded-xl my-10 bg-linear-to-r via-[#000CF1]/60 via-30% from-[#000CF1]/60 to-black/60 hover:to-black hover:via-[#000CF1] hover:from-[#000CF1] cursor-pointer'>Get Started</button></Link>
                    </div>
                </div>
                <div id='features' className='flex flex-col justify-center items-center h-screen bg-[#262626]'>
                    <h1 className='text-5xl'>Everything You Need to Track Your Favorites</h1>
                    <p className='text-2xl py-2 text-white/60'>Powerful features designed to make managing your watchlist effortless and enjoyable.</p>
                    <div className='grid grid-cols-3 w-full px-5 my-15'>
                        <div className='border m-5 rounded flex flex-col p-5'>
                            <FontAwesomeIcon icon={faArrowTrendUp} className='text-2xl' />
                            <h2 className='py-5 text-2xl'>Progress Tracking</h2>
                            <p className='text-white/60'>
                                You can Track your Movies/Shows by Classifying them to Planning,Watched, etc...
                            </p>
                        </div>
                        <div className='border m-5 rounded flex flex-col p-5'>
                            <FontAwesomeIcon icon={faStar} />
                            <h2 className='py-5 text-2xl'>Rate & Review</h2>
                            <p className='text-white/60'>
                                Keep Track of what you loved and what disappointed. your personal ratings help you remember.
                            </p>
                        </div>
                        <div className='border m-5 rounded flex flex-col p-5'>
                            <FontAwesomeIcon icon={faMasksTheater} />
                            <h2 className='py-5 text-2xl'>Genre Specific Recommendation</h2>
                            <p className='text-white/60'>
                                Get Recommendations based on your most watched Genre.
                            </p>
                        </div>
                    </div>
                </div>
                <div id='about' className='h-screen bg-black flex flex-col justify-center items-center'>
                    <h2 className='text-3xl'>ABOUT US</h2>
                    <p className='text-center py-10 px-20'>Discover movies and shows like never before! Our AI-Powered Recommendation Platform helps you find content that truly matches your taste. Instead of endless scrolling, you get smart suggestions based on your watch history, favorite genres, and trending categories.</p>
                    <p className='text-center py-10 px-20'>Each movie comes with automatically generated AI summaries and taglines that capture the essence of the story in just a few words — making exploration faster and more exciting. You can create and manage your own watchlist, track your viewing progress, and explore what’s popular among other users.</p>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Landing