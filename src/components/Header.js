import React, { useState } from 'react';
import {AppBar, Box, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    const [value,setValue]=useState();

  return (
    <AppBar position='sticky'>
        <Toolbar sx={{display:'flex' , alignItems:'center', 
                    justifyContent:'space-between' , background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,155,169,1) 0%, rgba(16,34,63,1) 100%)'}}>
            <Typography variant='h5' sx={{fontWeight:'bold' , fontFamily:'cursive' , color:'white' , fontStyle:'italic', display:'flex' , alignItems:'center'}}><img className='logo-image' src='https://miro.medium.com/v2/resize:fit:2400/1*yxQO9lRzHPcF8TZAb18y4w.png'/> Vishnu Portfolio</Typography>
            <Box sx={{marginRight:'100px'}}>
            <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab sx={{fontFamily:'cursive'}} LinkComponent={Link} to='/projects' label='Projects'/>
                <Tab sx={{fontFamily:'cursive'}} LinkComponent={Link} to='/about' label='About Me'/>
            </Tabs>            
        </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header