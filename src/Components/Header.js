import React, { useState } from 'react'
import "../index.css"
import { useNavigate } from 'react-router-dom';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import { useDispatch } from 'react-redux';



function Header() {

    // Handling theme changes 
    const theme = useSelector((state) => state);
    console.log(theme);
    // This handles the dispatching of the toggle theme action
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div className='Header-container'>
        <div className= {theme ? 'Header-container-1' : "Header-container-1-dark"}>
            DN.
        </div>
          <div className='Header-container-2'>
            <div onClick={() => {
          navigate('/my-website/')
              }} className={theme ? 'links-style' : "links-style-dark"}>
                Work
            </div>
            <div onClick={() => {
                navigate('/AboutPage')
              }} className={theme ? 'links-style' : "links-style-dark"}> 
                About
            </div>
            <div onClick={() => {
                  navigate('/ContactPage')
              }} className={theme ? 'links-style' : "links-style-dark"}>
                Contact
            </div>
            <div onClick={() => dispatch(toggleTheme())} >
                  {theme && <DarkModeOutlinedIcon />} {!theme && <LightModeOutlinedIcon  className="icons-dark" />}
            </div>

        </div>
    </div>
  )
}

export default Header