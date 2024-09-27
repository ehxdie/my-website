import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import "../../index.css";
import Projects from '../Projects';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import workoutimg from "../Images/workout.jpg";
import votingapplicationimg from "../Images/VotingApplication.jpg";
import chatappimg from "../Images/chatapp.jpg";
import gameimg from "../Images/Game.jpg";
import { useSelector } from 'react-redux';




function HomePage() {
  // Setting up dummy data for the projects data
  const [projects, setprojects] = useState([
    {
      name: "Mern Application 'workout buddy'",
      description: "This is a full stack application built on the MERN stack with a Rust backend and Docker",
      stack: "React, MongoDB, Express, Node, Warp, Rust and Docker",
      link: "https://fitflex-ten.vercel.app/",
      img: workoutimg,
    },
    {
      name: "Electronic Voting System",
      description: "An electronic voting system built using Solidity, Ethereum network (sempolia testnet) and Metamask, The Chai and Mocha library where used for testing the smart contract",
      stack: "React, Solidity, Sempolia testnet, and Chai and Mocha library",
      link: "https://ehxdie.github.io/voting-application/",
      img: votingapplicationimg,

    }])

  const ProjectCard = projects.map(project => {
    return (
      <Projects
        key={project.number}
        number={project.number}
        name={project.name}
        description={project.description}
        stack={project.stack}
        link={project.link}
        img={project.img} />
    )
  }


  );

  //Setting up theme control
  const theme = useSelector((state) => state);
  return (

    <div className='Homepage-container'>
      <div className='Homepage-header'>
        <div className='Homepage-header-section'>
          <p className={theme ? 'Homepage-header-text1' : "Homepage-header-text1-dark"}>Hello, I'm <br></br> Edidiong Ephraim.</p>
          <div className='icon-area'>
            <p className={theme ? 'icon-area-text' : "icon-area-text-dark"}> <a className={theme ? 'links-style' : "links-style-dark"} href='https://docs.google.com/document/d/1_H8IMPC_mGm9nt3ne3XLF5OHlY96AnzaARMXE4HGmLE/edit?usp=sharing' rel="noopener noreferrer" target="_blank">Download my CV?</a></p>
          </div>
        </div>

        <p className={theme ? 'Homepage-header-text2' : "Homepage-header-text2-dark"}>I'm a Software Engineer.</p>

      </div>
      <div className='Homepage-body'>
        <div className={theme ? 'projects-headline' : "projects-headline-dark"}>
          Some of the things I've built...
          <SouthOutlinedIcon className='icon' />
        </div>

        {ProjectCard}
      </div>
    </div>

  )
}

export default HomePage