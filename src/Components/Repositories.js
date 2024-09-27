import React from 'react'
import { useState, useEffect } from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useSelector } from 'react-redux';

function Repositories() {
  // Setting up variables that would hold the repositories
  const [activeRepo, setActiveRepo] = useState([]);
  const [allRepos, setAllRepos] = useState([]);

 console.log(allRepos);
  // Fetching all repositories
 const getAllRepos = async () => {
     try {
         // Replace "your-username" with your GitHub username
         // Replace "your-token" with your GitHub personal access token
         const response = await fetch('https://api.github.com/users/ehxdie/repos');
        if (response.ok) {
             const data = await response.json();
             setAllRepos(data);
             getLatestRepo(data);
         } else {
            console.error('Failed to fetch repositories');
         }
     } 

    catch (error) 

    {
         console.error('Error fetching repositories:', error);
     }
 }

  
  // Getting only the last worked on Repositories
const getLatestRepo = async (dataArray) => {
        
        if (!dataArray || dataArray.length === 0) {
            return null;
        }

        // Sort the array based on the 'time' property in descending order
        const sortedArray = dataArray.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        // Return the first element (with the latest time) in the sorted array
        setActiveRepo(sortedArray[0]);

    }


console.log(activeRepo);

  

useEffect(() => {
    getAllRepos();

  }, []);




    // Theme control
    const theme = useSelector((state) => state);
  return (

    <div className='repository-container'>
          <div className={theme ? 'active-repo' : 'active-repo-dark'}>
              <div className='underline'>
                  Checkout my last active Repo <br></br> 
                  <ArrowForwardOutlinedIcon className='contact-arrow' />
              </div>
              
              <div className={theme ? 'active-repo-info' : 'active-repo-info-dark'} >
                  Name: {activeRepo.full_name}
                  <div>
                  Link:   <a href={activeRepo.html_url}> {activeRepo.html_url}</a> 
                 </div>
              </div>
        </div>
    </div>

  )
}

export default Repositories