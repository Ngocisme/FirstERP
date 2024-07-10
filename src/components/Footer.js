import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0 , backgroundColor: '#808080', boxShadow: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px', marginTop: '20px'}}>
      <Toolbar>
        <Typography variant="">@powered by GeitTech Solutions</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;