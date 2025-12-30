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
// import AddToList from "./users/pages/AddToList"
import Category from "./users/pages/Category"
import Favorite from "./users/pages/Favorite"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsOfService from "./pages/TermsOfService"
import Dashbord from "./admin/pages/Dashbord"
import AdminUsers from "./admin/pages/AdminUsers"
import AdminContents from "./admin/pages/AdminContents"
import Search from "./users/pages/Search"
import Feedback from "./users/pages/Feedback"
import CategoryPage from "./users/pages/CategoryPage"
import MyListAll from "./users/pages/MyListAll"
import MlFavorite from "./users/pages/MlFavorite"
import MlPlanning from "./users/pages/MlPlanning"
import MlWatching from "./users/pages/MlWatching"
import MlOnHold from "./users/pages/MlOnHold"
import MlCompleted from "./users/pages/MlCompleted"
import MlDropped from "./users/pages/MlDropped"
import Reports from "./admin/pages/Reports"


function App() {



  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
        <Route path="/termsofservice" element={<TermsOfService/>} />
        <Route path="/register" element={<Authentication register/>} />
        <Route path="/login" element={<Authentication/>} />
        <Route path="/verify-otp" element={<Authentication otp/>} />
        <Route path="/home" element={<Home/>} />


        <Route path="/watchlist" element={<WatchlistAll/>} />
        <Route path="/watchlist/favorite" element={<Favorite/>} />
        <Route path="/watchlist/planning" element={<Planning/>} />
        <Route path="/watchlist/watching" element={<Watching/>} />
        <Route path="/watchlist/onhold" element={<OnHold/>} />
        <Route path="/watchlist/completed" element={<Completed/>} />
        <Route path="/watchlist/dropped" element={<Dropped/>} />


        <Route path="/mylist" element={<MyListAll/>} />
        <Route path="/mylist/favorite" element={<MlFavorite/>} />
        <Route path="/mylist/planning" element={<MlPlanning/>} />
        <Route path="/mylist/watching" element={<MlWatching/>} />
        <Route path="/mylist/onhold" element={<MlOnHold/>} />
        <Route path="/mylist/completed" element={<MlCompleted/>} />
        <Route path="/mylist/dropped" element={<MlDropped/>} />


        <Route path="/category" element={<Category/>} />
        <Route path="/category/:categoryName" element={<CategoryPage/>} />
        <Route path='/details/:id' element={<ViewDetails/>} />
        <Route path='/profile/:id' element={<Profile/>} />


        <Route path='/admin-dashboard' element={<Dashbord/>} />
        <Route path='/admin-users' element={<AdminUsers/>} />
        <Route path='/admin-contents' element={<AdminContents/>} />
        <Route path='/admin-reports' element={<Reports/>} />


        <Route path='/search' element={<Search/>} />
        <Route path='/feedback' element={<Feedback/>} />




        <Route path="*" element={<PageNotFound/>} />
      </Routes>
     
    </>
  )
}

export default App
