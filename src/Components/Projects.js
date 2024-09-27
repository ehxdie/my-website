import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { useSelector } from 'react-redux';


function Projects(props) {
  const [infocontrol, setinfocontrol] = useState(true);
  const [infocontrol1, setinfocontrol1] = useState(true);

  // Not the best way to handle the dropdown state change tbh
  const handleclick = () => setinfocontrol(!infocontrol);
  const handleclick1 = () => setinfocontrol1(!infocontrol1);


  console.log(infocontrol);
  
  // Theme control
  const theme = useSelector((state)=> state);
  
  return (
    <>
      <div className={theme ? 'projects-container' : "projects-container-dark"}>
        
         <div className='projects-container-text'>

            <p className={theme ? 'projects-container-text1' : "projects-container-text1-dark"}>Title: {props.name}</p>
            <div className='projects-container-text2-header' onClick={handleclick}>
                <div className={theme ? 'text2-header' : "text2-header-dark"}> Project description {infocontrol ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
                </div>
                {infocontrol ? null : <div className={theme ? 'projects-container-text2' : "projects-container-text2-dark"}>{props.description}</div>}  

            </div>

          <div className='projects-container-text3-header' onClick={handleclick1}P>
                <div className={theme ? 'text2-header' : "text2-header-dark"}> Tech Stack {infocontrol1 ? <KeyboardArrowDownOutlinedIcon /> : <KeyboardArrowUpOutlinedIcon />}
                </div>
                {infocontrol1 ? null : <div className={theme ? 'projects-container-text3' : "projects-container-text3-dark"}>{props.stack}</div>}
            </div> 

          <a className={theme ? 'projects-container-link' : "projects-container-link-dark"} href={props.link} target='_blank' rel='noopener noreferrer'>Visit Site</a>
        
        </div>

        <div className= "projects-container-image">
            <img src={props.img} className='img'/>
        </div>
    </div>
    </>
  )
}

export default Projects