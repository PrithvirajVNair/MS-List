import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import PageNotFound from "./pages/PageNotFound"
import Authentication from "./pages/Authentication"
import Home from "./users/pages/Home"
import Planning from "./users/pages/Planning"
import WatchlistAll from "./users/pages/WatchlistAll"
import Watching from "./users/pages/Watching"
import OnHold from "./users/pages/OnHold"
import Completed from "./users/pages/Completed"
import Dropped from "./users/pages/Dropped"
import ViewDetails from "./users/pages/ViewDetails"
import Profile from "./users/pages/Profile"
import AddToList from "./users/pages/AddToList"
import Category from "./users/pages/Category"
import Favorite from "./users/pages/Favorite"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/register" element={<Authentication register/>} />
        <Route path="/login" element={<Authentication/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/watchlist" element={<WatchlistAll/>} />
        <Route path="/watchlist/favorite" element={<Favorite/>} />
        <Route path="/watchlist/planning" element={<Planning/>} />
        <Route path="/watchlist/watching" element={<Watching/>} />
        <Route path="/watchlist/onhold" element={<OnHold/>} />
        <Route path="/watchlist/completed" element={<Completed/>} />
        <Route path="/watchlist/dropped" element={<Dropped/>} />
        <Route path="/category" element={<Category/>} />
        <Route path='/:id/details' element={<ViewDetails/>} />
        <Route path='/profile/:username' element={<Profile/>} />
        <Route path='/:id/addtolist' element={<AddToList/>} />




        <Route path="*" element={<PageNotFound/>} />
      </Routes>
     
    </>
  )
}

export default App
