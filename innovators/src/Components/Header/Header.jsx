import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, IconButton, Button, Menu, MenuItem, Box } from "@mui/material";
import { Search as SearchIcon, AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Header.css";

const Header = () => {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(null);
  const [servicesMenu, setServicesMenu] = useState(null);

  const toggleDark = () => {
    setDark(!dark);
  };

  const openMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setMenu(null);
  };

  const openServicesMenu = (event) => {
    setServicesMenu(event.currentTarget);
  };

  const closeServicesMenu = () => {
    setServicesMenu(null);
  };

  return (
    <AppBar position="static" className={`header ${dark ? "dark" : ""}`}>
      <Toolbar className="toolbar">
        
        <Box className="logoBox">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
          <Typography variant="h6" className="name">Innovators Tech</Typography>
        </Box>

        
        <Box className="searchBox">
          <InputBase placeholder="Search…" className="searchInput" />
          <IconButton className="searchBtn">
            <SearchIcon />
          </IconButton>
        </Box>

        
        <Box className="navBox">
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          
          <Button color="inherit" onClick={openServicesMenu} endIcon={<ExpandMoreIcon />}>
            Services
          </Button>
          <Menu anchorEl={servicesMenu} open={Boolean(servicesMenu)} onClose={closeServicesMenu}>
            <MenuItem onClick={closeServicesMenu}>Web Development</MenuItem>
            <MenuItem onClick={closeServicesMenu}>Mobile App Development</MenuItem>
            <MenuItem onClick={closeServicesMenu}>UI/UX Design</MenuItem>
            <MenuItem onClick={closeServicesMenu}>SEO Optimization</MenuItem>
          </Menu>

          <Button color="inherit">Portfolio</Button>
          <Button color="inherit">Blog</Button>
          <Button color="inherit">Contact</Button>

          
          <IconButton onClick={toggleDark} color="inherit">
            {dark ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          
          <Button className="loginBtn"  color="inherit">Login</Button>
          <Button variant="contained" className="signupBtn">Sign Up</Button>

          
          <IconButton onClick={openMenu} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={menu} open={Boolean(menu)} onClose={closeMenu}>
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>Settings</MenuItem>
            <MenuItem onClick={closeMenu}>Logout</MenuItem>
          </Menu>

          
          <IconButton className="menuIcon">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
