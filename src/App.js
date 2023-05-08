import React from "react";
import './styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path="/*" element={<Navigate to="/error" replace/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
