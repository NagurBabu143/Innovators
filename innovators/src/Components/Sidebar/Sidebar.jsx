import React from "react";
import { Box, List, ListItem, ListItemText, Divider } from "@mui/material";
import "./Sidebar.css";

const Sidebar = ({ setActivePage, activePage }) => {
  return (
    <Box className="sidebar">
      <List>
        {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
          <ListItem
            key={item}
            selected={activePage === item}
            onClick={() => setActivePage(item)}
            className="sidebar-item"
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Profile", "Settings", "Logout"].map((item) => (
          <ListItem
            key={item}
            selected={activePage === item}
            onClick={() => setActivePage(item)}
            className="sidebar-item"
          >
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
