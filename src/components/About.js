import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Typography } from '@mui/material';

const About = () => {
  // return (
  //   <div className='about-container'>
  //     <div>
  //       <h2 className='about-heading' style={{fontFamily:'cursive' , margin:'20px'}}>Thanks for taking the time to reach out.</h2>
  //       <hr/>
  //     </div>
  //     <div className='resume-container'>
  //       <div className='personal-info'>
  //         <div className='personal-pic'>
  //           <img src='\images\profile.jpg' alt='Profile-Picture'/>
  //           <h4>Vishnu Gawade</h4>
  //           <div style={{display:"flex" , gap:'20px'}}>
  //           <span><a href='linkedin.com/in/vishnu-gawade-08547421a'><LinkedInIcon></LinkedInIcon></a></span>
  //           <span><a href='https://github.com/Vishnu15121999/MyPortfolio.git'><GitHubIcon></GitHubIcon></a></span>
  //           <span><a href='https://vishnugportfolio.netlify.app/'><LinkIcon></LinkIcon></a></span>
  //           </div>
  //         </div>
  //         <div className='personal-details'>
  //           <h3 style={{fontWeight:'bold'}}>Personal Details</h3>
  //           <hr/>
  //           <div className='info-box'>
  //           <h3 >Full Name : Vishnu Shankar Gawade</h3>
  //           <h3 >DOB : 15/12/1998</h3>
  //           <h3 >Email : vishnugawade90@gmail.com</h3>
  //           <h3 >Phone : 9082215755/9702052203</h3>
  //           <h3 >Address : Mumbai Maharastra</h3>
  //           </div>
  //         </div>
  //       </div>
  //       <div className='skills-container'>
  //         <h4 style={{fontWeight:'bold'}}>Skills</h4>
  //         <Box sx={{display:'flex' , marginTop:3 , gap:15}}>
  //         <div className='hard-skills'>
  //           <ol>
  //             <li>HTML</li>
  //             <li>CSS</li>
  //             <li>JavaScript</li>
  //             <li>Redux</li>
  //             <li>MERN Stack</li>
  //             <li>Visual Studio Code</li>
  //             <li>Postman</li>
  //           </ol>
  //         </div>
  //         <div className='soft-skills'>
  //         <ol>
  //             <li>Communication</li>
  //             <li>Observation</li>
  //             <li>Multitasking</li>
  //             <li>Decision Making</li>
  //             <li>Active Learner</li>
  //           </ol>
  //         </div>
  //         </Box>
  //       </div>
  //       <div className='experience-container'>
  //         <h3>Experience</h3>
  //         <h4>Technical Recruiter (Aug 17 , 2021 - Nov 23 , 2023) : </h4>
  //         <hr/>
  //         <p> - Worked as a IT Recruiter in the UK/EU region for 2.2 years. Where my daily task was to recruit people from in the uk/eu region for different IT roles.<br/>
  //         Which Includes understanding the requirement , converting them to string and recruit people from different portals , calling , deliver to the consultant client , schedule interview witht the client and onboard them succussfully for that particular role.
  //         </p>
  //       </div>
  //       <div className='education-info'>
  //         <h3>Educational Details</h3>
  //         <h4 sx={{fontWeight:'bold'}}> - HSC (2015-2017)<br/>Kirti College(Dadar)</h4>
  //         <h4 sx={{fontWeight:'bold'}}> - Bsc IT (2017-2020)<br/>Vidyalankar School of Information Technology(Wadala)</h4>
  //       </div>
  //       <div className='achievement-container'>
  //         <h3>Achievements</h3>
  //         <p>- Certification in Full Stack Developer</p>
  //         <p>- Certification in ML&AI</p>
  //       </div>
  //     </div>
  //   </div>
  // )

  return(
    <div style={{width:'95%' , margin:'0 auto' , height:'fit-content'}}>
      <div style={{width:'95%' , height:'100%' , backgroundColor:'beige' , margin:'0 auto' , marginTop:'10px'}}>
        <Box sx={{width:'100%' , height:'100px' , border:'5px solid #ddd' , margin:'0 auto' , marginTop:'5px' , display:'flex' , alignItems:'center' , justifyContent:'center' , padding:'10px'}}>
          <Typography variant='h3' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Thanks for taking the time to reach out.</Typography>
        </Box>
        <Box className='basic-information-div' sx={{width:'80%' , height:'400px' , margin:'0 auto' , display:'flex' , marginTop:'20px'}}>
          <Box sx={{width:'40%' , height:'400px' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center'}}>
            <img style={{width:'300px' , height:'300px' , borderRadius:'50%'}} src='\images\profile.jpg' alt='profile-pic'/>
            <Box sx={{display:'flex' , gap:'20px' , margin:'20px'}}>
              <LinkedInIcon/>
              <GitHubIcon/>
            </Box>
          </Box>
          <Box sx={{width:'60%' , height:'400px'}}>
            <Typography variant='h4' sx={{fontWeight:'600' , fontFamily:'cursive' , padding:'10px 0px'}}>Basic Information</Typography>
            <hr/>
            <Box sx={{display:'flex' , flexDirection:'column' , gap:'20px' , marginTop:'20px'}}>
              <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Full Name : Vishnu Shankar Gawade</Typography>
              <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>DOB : 15/12/1998</Typography>
              <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Email : vishnugawade90@gmail.com</Typography>
              <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Contact No. : 9702052203 </Typography>
              <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Address : Mumbai , India </Typography>
            </Box>
          </Box>
        </Box>
        <Box className='experience-information-div' sx={{width:'80%' , height:'400px' , margin:'0 auto'}}>
          <Box sx={{width:'100%',display:"flex",justifyContent:'center',padding:'10px'}}>
          <Typography variant='h4' sx={{fontWeight:'600',fontFamily:'cursive'}}>Experience</Typography>
          </Box>
          <hr/>
          <Box sx={{margin:'30px'}}>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive' , marginBottom:'20px'}}>Innovation Hacks AI || React Frontend Developer</Typography>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive' , marginBottom:'20px'}}> - Optimizing the user experience.</Typography> 
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive' , marginBottom:'20px'}}> - Using HTML5 , CSS , JavaScript , React to bring concepts of life.</Typography> 
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive' , marginBottom:'20px'}}> - Developing and maintaining the UI. </Typography> 
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive' , marginBottom:'20px'}}> - Creating tools that improve site interaction regardless of the browser. </Typography> 
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive' , marginBottom:'20px'}}> - Managing software workflow. </Typography>
          </Box>
        </Box>
        <Box className='skills-container-div' sx={{width:'80%' , height:'400px' , margin:'0 auto'}}>
          <Box sx={{width:"100%" , display:'flex' , justifyContent:'center' , padding:'10px'}}>
            <Typography variant='h4' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Skills</Typography>
          </Box>
          <hr/>
          <Box sx={{width:'100%' , display:'flex'}}>
          <Box className='hard' sx={{width:'50%' , height:'300px' , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
            <ol style={{fontFamily:'cursive' , fontWeight:'600' , fontSize:'1.5rem'}}>
            <li>Communication</li>
            <li>Observation</li>
            <li>Active Learner</li>
            <li>Multitasking</li>
            <li>Decision Making</li>
            <li>Time Management</li>
            <li>Creativity</li>
            </ol>
          </Box>
          <Box className='soft' sx={{width:'50%' , height:'300px' , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
            <ol style={{fontFamily:'cursive' , fontWeight:'600' , fontSize:'1.5rem'}}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Figma</li>
              <li>Postman</li>
            </ol>
          </Box>
          </Box>
        </Box>
        <Box className='educational-div' sx={{width:'80%' , height:'400px' , margin:'0 auto'}}>
          <Box sx={{width:"100%" , display:'flex' , justifyContent:'center' , padding:'10px'}}>
            <Typography variant='h4' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Education</Typography>
          </Box>
          <hr/>
          <Box sx={{margin:'30px'}}>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>SSC (2015)</Typography>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Saraswati Mandir High School (Mumbai)</Typography>
            <br/>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>HSC (2015-2017)</Typography>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Kirti College (Dadar , Mumbai)</Typography>
            <br/>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>BSC IT (2017-2020)</Typography>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Vidyalankar School Of Information Technology (Wadala , Mumbai)</Typography>
          </Box>
        </Box>
        <Box className='achievement-div' sx={{width:'80%' , height:'400px' , margin:'0 auto'}}>
          <Box sx={{width:"100%" , display:'flex' , justifyContent:'center' , padding:'10px'}}>
            <Typography variant='h4' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Achievements</Typography>
          </Box>
          <hr/>
          <Box sx={{margin:'30px' , display:'flex' , flexDirection:'column' , gap:'20px'}}>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}> - Certification in Full Stack Developer</Typography>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}> - Certification in AI/ML</Typography>
            <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}> - Certification in Power BI/Tableau</Typography>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default About;
