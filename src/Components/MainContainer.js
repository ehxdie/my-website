import React from 'react'
import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import AboutPage from './Pages/AboutPage'
import "../index.css"
import { Routes, Route } from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux';




function MainContainer() {
  const theme = useSelector((state) => state);
  return (

      <div className= {theme? 'Maincontainer': "Maincontainer-dark"}>
      <Header/>
      <Routes>
        <Route path="/my-website/" element={<HomePage/>} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
      <Footer/>
      </div>

  )
}

export default MainContainer