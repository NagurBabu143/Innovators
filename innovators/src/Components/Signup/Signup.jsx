import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import "./Signup.css";

const Signup = ({ onSwitch }) => {
  const [userData, setUserData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(userData));
    alert("Signup Successful! You can now log in.");
    onSwitch();
  };

  return (
    <Container className="signup-container"
    sx={{ 
        width: "63%", 
        position: "absolute", 
        top: "45%", 
        left: "63%", 
        transform: "translate(-50%, -50%)", 
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        textAlign: "center"
      }}>
      <Typography variant="h4">Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Full Name" name="name" variant="outlined" margin="normal" onChange={handleChange} required />
        <TextField fullWidth label="Email" name="email" variant="outlined" margin="normal" onChange={handleChange} required />
        <TextField fullWidth label="Password" name="password" type="password" variant="outlined" margin="normal" onChange={handleChange} required />
        <Button type="submit" variant="contained" fullWidth className="signup-btn">Sign Up</Button>
      </form>
      <Box className="switch-text">
        <Typography>Already have an account? <span onClick={onSwitch}>Login</span></Typography>
      </Box>
    </Container>
  );
};

export default Signup;  
