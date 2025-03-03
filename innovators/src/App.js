import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Blog from "./Components/Blog/Blog";

const App = () => {
  const [activePage, setActivePage] = useState("Login"); // Start with Login

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Blog":
        return <Blog/>;  
      case "Login":
        return <Login onSwitch={() => setActivePage("Signup")} />;
      case "Signup":
        return <Signup onSwitch={() => setActivePage("Login")} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header setActivePage={setActivePage} />
      <div className="content-wrapper">
        <Sidebar setActivePage={setActivePage} />
        <div className="main-content">{renderPage()}</div>
      </div>
    </div>
  );
};

export default App;
