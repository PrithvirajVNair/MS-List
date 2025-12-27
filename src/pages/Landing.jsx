import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faMasksTheater, faStar } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import AboutBG from '../assets/Backgrounds/smoke.mp4'
import OrbBG from '../assets/Backgrounds/orb.mp4'

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
                    <div className='bg-black/60 flex flex-col justify-center items-center h-screen text-center p-3'>
                        <h1 className='text-3xl sm:text-7xl sm:leading-22'>Never Forget What to <br /> Watch Next</h1>
                        <p className='sm:text-2xl text-white/60 sm:mt-5'>Organize your favorite movies and TV shows in one place.</p>
                        <p className='sm:text-2xl text-white/60'>Create your list, track what you've watched.</p>
                        <Link to={'/register'}><button className='py-1 sm:text-base text-sm sm:py-2 px-3 sm:px-5 rounded-xl my-10 bg-blue-500 hover:bg-blue-600 cursor-pointer'>Get Started</button></Link>
                    </div>
                </div>
                <div id='features' className='flex flex-col justify-center items-center min-h-screen bg-[#262626] relative'>
                    <video autoPlay loop muted playsInline disablePictureInPicture controls={false} preload='auto' src={OrbBG} className='absolute w-full object-cover h-full'></video>
                    <div className='absolute inset-0 h-screen backdrop-blur-3xl'></div>
                    <div className='absolute'>
                        <div className='p-3'>
                            <h1 className='sm:text-5xl text-center pt-10 sm:pt-0'>Everything You Need to Track Your Favorites</h1>
                            <p className='sm:text-2xl py-2 text-center text-white/60'>Powerful features designed to make managing your watchlist effortless and enjoyable.</p>
                        </div>
                        <div className='sm:grid grid-cols-3 w-full sm:px-5 sm:my-15'>
                            <div className='m-5 rounded flex flex-col p-5 hover:shadow-2xl bg-white/10 hover:scale-103 duration-300'>
                                <FontAwesomeIcon icon={faArrowTrendUp} className='sm:text-2xl text-green-400' />
                                <h2 className='py-5 sm:text-2xl'>Progress Tracking</h2>
                                <p className='text-white/60 sm:text-base text-sm'>
                                    You can Track your Movies/Shows by Classifying them to Planning,Watched, etc...
                                </p>
                            </div>
                            <div className='m-5 rounded flex flex-col p-5 hover:shadow-2xl bg-white/10 hover:scale-103 duration-300'>
                                <FontAwesomeIcon icon={faStar} className='sm:text-2xl text-yellow-400' />
                                <h2 className='py-5 sm:text-2xl'>Rate & Review</h2>
                                <p className='text-white/60'>
                                    Keep Track of what you loved and what disappointed. your personal ratings help you remember.
                                </p>
                            </div>
                            <div className='m-5 rounded flex flex-col p-5 hover:shadow-2xl bg-white/10 hover:scale-103 duration-300'>
                                <FontAwesomeIcon icon={faMasksTheater} className='sm:text-2xl text-blue-400' />
                                <h2 className='py-5 sm:text-2xl'>AI-Inspired Recommendations</h2>
                                <p className='text-white/60'>
                                    Discover shows similar in story, theme, and tone using content analysis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='about' className='min-h-screen relative bg-black/10 flex flex-col justify-center items-center'>
                    <video autoPlay loop muted playsInline disablePictureInPicture controls={false} preload='auto' src={AboutBG} className='absolute w-full h-full object-cover' type='video/mp4'></video>
                    <div className='absolute inset-0 backdrop-blur-3xl h-screen'></div>
                    <div className='max-w-300 absolute'>
                        <h2 className='sm:text-3xl sm:pt-0 pt-10 text-center'>ABOUT US</h2>
                        <p className='text-center py-5 sm:py-10 px-5 sm:px-20 sm:text-base text-sm leading-relaxed'>Discover movies and shows like never before with <span className='text-blue-600'>MS</span> List, a smart content discovery platform designed to match your unique taste. Instead of relying only on genres or endless scrolling, the platform delivers intelligent recommendations based on content similarity.</p>
                        <p className='text-center py-5 sm:py-10 px-5 sm:px-20 sm:text-base text-sm leading-relaxed'>Each title features automatically generated AI summaries that capture the core theme and tone of the story in a single line, helping you explore faster and decide smarter. Users can build and manage personalized watchlists, rate shows, track viewing progress, and engage through comments and ratings.</p>
                        <p className='text-center py-5 sm:py-10 px-5 sm:px-20 sm:text-base text-sm leading-relaxed'>By combining modern web technologies with AI-inspired features, MS List offers a clean, interactive, and personalized way to discover content beyond traditional recommendation systems.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Landing