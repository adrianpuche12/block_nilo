import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Slide } from '@mui/material';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);  

 
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
    
      setShowNavbar(false);
    } else {
     
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);  
  };

  useEffect(() => {
 
    window.addEventListener('scroll', handleScroll);

    return () => {

      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
  
    <Slide appear={false} direction="down" in={showNavbar}>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'transparent', 
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navbar Title
          </Typography>
        </Toolbar>
      </AppBar>
    </Slide>
  );
}
