import React, { useEffect, useState } from 'react';
import {Box, Button, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const Home = () => {
  // return 
  // (
  //   <div className='homeContainer'>
  //     <div className='sub-homeContainer'>
  //       <img className='homeContainer-image' src='https://miro.medium.com/v2/resize:fit:2400/1*yxQO9lRzHPcF8TZAb18y4w.png' alt='my-image' />
  //       <div className='advertise-page'>
  //         <h2 className='heading'>Hello World!!</h2>
  //         <h2 className='heading'>Welcome to my Portfolio Website</h2>
  //         <h2 className='heading'>Vishnu_Portfolio</h2>
  //       </div>
  //     </div>
  //   </div>
  // )


  return(
    <div className='home-div'>
      <Box sx={{width:'40%' , height:'400px'}}>
        <div style={{width:'500px' , height:'500px' , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
          <img style={{width:'80%' , height:'80%' , border:'2px solid black' ,boxShadow:'8px -5px 0px black' , borderRadius:'5px 5px 5px 50%' , objectFit:'contain'}} src='https://miro.medium.com/v2/resize:fit:2400/1*yxQO9lRzHPcF8TZAb18y4w.png' alt='image-logo'/>
        </div>
      </Box>
      <Box sx={{width:'800px' , height:'120px' , position:'absolute' , top:80 , left:0 , display:'flex' , alignItems:'center' , gap:0.5}}>
        {/* <div className='home-shape-first'></div>
        <div className='home-shape-second'></div>
        <div className='home-shape-third'></div>
        <div className='home-shape-four'></div> */}
        {/* <div className='home-circle-big'></div> */}
      </Box>
      <div className='home-wave'></div>
      <div className='square-one'></div>
      <div className='square-two'></div>
      <div className='square-three'></div>
      <div className='square-four'></div>
      <div className='square-five'></div>
      <div className='square-six'></div>
      <div className='square-seven'></div>
      <div className='square-eight'></div>
      {/* <div className='home-trianle-one'></div>
      <div className='home-trianle-two'></div>
      <div className='home-trianle-three'></div> */}
      <Box sx={{ display:'flex', flexDirection:'column' , gap:"20px" , marginTop:'50px' ,width:'45%', height:'350px' ,  padding:'10px'}}>
        <Typography variant='h3' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Hi👋,<br/>I am Vishnu Gawade,<br/><Typography className='frontend-developer' variant='h3' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Frontend Developer</Typography></Typography>
        <Typography variant='h5' sx={{fontWeight:'600' , fontFamily:'cursive'}}>Feel free to explore my portfolio and get in touch to discuss how we can turn your ideas into reality!</Typography>
        <Box sx={{display:'flex' , justifyContent:"space-around" , marginTop:'20px'}}>
          <Button LinkComponent={Link} to='/projects' variant='contained' sx={{color:'black' , fontWeight:'600' , bgcolor:'gold'}}>See My Projects</Button>
          <Button LinkComponent={Link} to='/about' variant='contained' sx={{color:'black' , fontWeight:'600' , bgcolor:'green'}}>Hire Me / Contact Me</Button>
        </Box>
      </Box>
    </div>
  )
}

export default Home;