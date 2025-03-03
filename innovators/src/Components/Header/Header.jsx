import React, { useState } from "react";
import { AppBar, Toolbar, Typography, InputBase, IconButton, Button, Menu, MenuItem, Box } from "@mui/material";
import { Search as SearchIcon, AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Header.css";

const Header = ({ setActivePage, activePage }) => {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(null);
  const [servicesMenu, setServicesMenu] = useState(null);

  const toggleDark = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
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
          <Button color="inherit" onClick={() => setActivePage("Home")}>Home</Button>
          <Button color="inherit" onClick={() => setActivePage("About")}>About</Button>
          <Button color="inherit" onClick={openServicesMenu} endIcon={<ExpandMoreIcon />}>Services</Button>

          <Menu anchorEl={servicesMenu} open={Boolean(servicesMenu)} onClose={closeServicesMenu}>
            <MenuItem onClick={() => { setActivePage("Services"); closeServicesMenu(); }}>Web Development</MenuItem>
            <MenuItem onClick={() => { setActivePage("Services"); closeServicesMenu(); }}>Mobile App Development</MenuItem>
            <MenuItem onClick={() => { setActivePage("Services"); closeServicesMenu(); }}>UI/UX Design</MenuItem>
            <MenuItem onClick={() => { setActivePage("Services"); closeServicesMenu(); }}>SEO Optimization</MenuItem>
          </Menu>

          <Button color="inherit" onClick={() => setActivePage("Portfolio")}>Portfolio</Button>
          <Button color="inherit" onClick={() => setActivePage("Blog")}>Blog</Button>
          <Button color="inherit" onClick={() => setActivePage("Contact")}>Contact</Button>

          <IconButton onClick={toggleDark} color="inherit">
            {dark ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <Button className="loginBtn" color="inherit"onClick={() => setActivePage("Login")}>Login</Button>
          <Button variant="contained" className="signupBtn"onClick={() => setActivePage("Signup")}>Signup</Button>

          <IconButton onClick={openMenu} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={menu} open={Boolean(menu)} onClose={closeMenu}>
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>Settings</MenuItem>
            <MenuItem onClick={closeMenu}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
