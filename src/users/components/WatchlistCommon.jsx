import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Favorite from '../pages/Favorite'

const WatchlistCommon = ({all,favorite,planning,watching,onhold,completed,dropped, count, onHandleSearch}) => {
    return (
        <div className='bg-black text-white'>
            <Header watchlist />
            <div className='pt-15 sm:pt-20 lg:px-20 px-3'>
                <h2 className='sm:text-3xl'>My Watchlist</h2>
                <p className='ms-3 text-xs sm:text-base text-white/60'>{count} items</p>
                <div className='sm:py-10 py-5'>
                    <input onChange={e=>onHandleSearch(e.target.value || "")} type="text" className='bg-white/10 w-full py-1 px-2 rounded-xl text-sm' placeholder='Search your Watchlist' />
                    <div className='py-5 sm:text-base text-xs'>
                        <Link to={'/watchlist'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${all ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>All</button></Link>
                        <Link to={'/watchlist/favorite'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${favorite ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Favorite</button></Link>
                        <Link to={'/watchlist/planning'}><button className={`sm:me-3 sm:my-0 my-1 me-1 py-1 px-2 rounded-xl cursor-pointer ${planning ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Planning</button></Link>
                        <Link to={'/watchlist/watching'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${watching ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Watching</button></Link>
                        <Link to={'/watchlist/onhold'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${onhold ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>On Hold</button></Link>
                        <Link to={'/watchlist/completed'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${completed ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Completed</button></Link>
                        <Link to={'/watchlist/dropped'}><button className={`sm:me-3 me-1 py-1 px-2 rounded-xl my-1 cursor-pointer ${dropped ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Dropped</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchlistCommon