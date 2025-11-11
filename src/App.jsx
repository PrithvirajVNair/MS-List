import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import PageNotFound from "./pages/PageNotFound"
import Authentication from "./pages/Authentication"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/register" element={<Authentication register/>} />
        <Route path="/login" element={<Authentication/>} />




        <Route path="*" element={<PageNotFound/>} />
      </Routes>
     
    </>
  )
}

export default App
