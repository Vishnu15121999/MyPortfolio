import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <div className='about-container'>
      <div>
        <h2 style={{fontFamily:'cursive' , margin:'20px'}}>Thanks for taking the time to reach out.</h2>
        <hr/>
      </div>
      <div className='resume-container'>
        <div className='personal-info'>
          <div className='personal-pic'>
            <img src='\images\profile.jpg'/>
            <h4>Vishnu Gawade</h4>
            <div style={{display:"flex" , gap:'20px'}}>
            <span><a href='linkedin.com/in/vishnu-gawade-08547421a'><LinkedInIcon></LinkedInIcon></a></span>
            <span><a href='https://github.com/Vishnu15121999/Flixxit-Project.git'><GitHubIcon></GitHubIcon></a></span>
            </div>
          </div>
          <div className='personal-details'>
            <Typography sx={{fontWeight:'bold'}} variant='h6'>Personal Details</Typography>
            <hr/>
            <Box sx={{marginTop:1}}>
            <Typography sx={{margin:1}}>Full Name : Vishnu Shankar Gawade</Typography>
            <Typography sx={{margin:1}}>DOB : 15/12/1998</Typography>
            <Typography sx={{margin:1}}>Email : vishnugawade90@gmail.com</Typography>
            <Typography sx={{margin:1}}>Phone : 9082215755/9702052203</Typography>
            <Typography sx={{margin:1}}>Address : Mumbai Maharastra</Typography>
            </Box>
          </div>
        </div>
        <div className='skills-container'>
          <Typography sx={{fontWeight:'bold'}} variant='h6'>Skills</Typography>
          <Box sx={{display:'flex' , marginTop:3 , gap:15}}>
          <div className='hard-skills'>
            <ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Redux</li>
              <li>MERN Stack</li>
              <li>Visual Studio Code</li>
              <li>Postman</li>
            </ol>
          </div>
          <div className='soft-skills'>
          <ol>
              <li>Communication</li>
              <li>Observation</li>
              <li>Multitasking</li>
              <li>Decision Making</li>
            </ol>
          </div>
          </Box>
        </div>
        <div className='experience-container'>
          <h3>Experience</h3>
          <h4>Technical Recruiter (Aug 17 , 2021 - Nov 23 , 2023) : </h4>
          <hr/>
          <p> - Worked as a IT Recruiter in the UK/EU region for 2.2 years. Where my daily task was to recruit people from in the uk/eu region for different IT roles.<br/>
          Which Includes understanding the requirement , converting them to string and recruit people from different portals , calling , deliver to the consultant client , schedule interview witht the client and onboard them succussfully for that particular role.
          </p>
        </div>
        <div className='education-info'>
          <h3>Educational Details</h3>
          <Typography sx={{fontWeight:'bold'}}> - HSC (2015-2017)<br/>Kirti College(Dadar)</Typography>
          <Typography sx={{fontWeight:'bold'}}> - Bsc IT (2017-2020)<br/>Vidyalankar School of Information Technology(Wadala)</Typography>
        </div>
      </div>
    </div>
  )
}

export default About