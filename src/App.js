import { Route, Routes } from "react-router-dom"
import { Footer, Login, Main, Navbar, Products, Register } from "./components"

const App = () => {


  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/footer" element={<Footer/>}/>
        </Routes>   
      </div>
    </>
  )
}

export default App