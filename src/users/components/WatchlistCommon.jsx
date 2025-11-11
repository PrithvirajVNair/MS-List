import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const WatchlistCommon = ({all,planning,watching,onhold,completed,dropped}) => {
    return (
        <div className='bg-black text-white'>
            <Header watchlist />
            <div className='pt-20 px-20'>
                <h2 className='text-3xl'>My Watchlist</h2>
                <p className='ms-3 text-white/60'>x items</p>
                <div className='py-10'>
                    <input type="text" className='bg-white/10 w-full py-1 px-2 rounded-xl' placeholder='Search your Watchlist' />
                    <div className='py-5'>
                        <Link to={'/watchlist'}><button className={`me-3 py-1 px-2 rounded-xl ${all ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>All</button></Link>
                        <Link to={'/watchlist/planning'}><button className={`me-3 py-1 px-2 rounded-xl ${planning ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Planning</button></Link>
                        <Link to={'/watchlist/watching'}><button className={`me-3 py-1 px-2 rounded-xl ${watching ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Watching</button></Link>
                        <Link to={'/watchlist/onhold'}><button className={`me-3 py-1 px-2 rounded-xl ${onhold ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>On Hold</button></Link>
                        <Link to={'/watchlist/completed'}><button className={`me-3 py-1 px-2 rounded-xl ${completed ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Completed</button></Link>
                        <Link to={'/watchlist/dropped'}><button className={`me-3 py-1 px-2 rounded-xl ${dropped ? 'bg-white text-black':'bg-white/10 text-white/60'}`}>Dropped</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchlistCommon