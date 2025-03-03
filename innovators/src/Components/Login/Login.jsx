import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import "./Login.css";

const Login = ({ onSwitch }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <Container 
      className="login-container"
      sx={{ 
        width: "63%", 
        position: "absolute", 
        top: "63%", 
        left: "63%", 
        transform: "translate(-50%, -50%)", 
        padding: "20px",
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        textAlign: "center"
      }}
    >
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" name="email" variant="outlined" margin="normal" onChange={handleChange} required />
        <TextField fullWidth label="Password" name="password" type="password" variant="outlined" margin="normal" onChange={handleChange} required />
        <Button type="submit" variant="contained" fullWidth className="login-btn">Login</Button>
      </form>
      <Box className="switch-text">
        <Typography>Don't have an account? <span onClick={onSwitch} style={{ color: "#1976d2", cursor: "pointer", fontWeight: "bold" }}>Sign Up</span></Typography>
      </Box>
    </Container>
  );
};

export default Login;
