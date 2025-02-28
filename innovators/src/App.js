import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

const App = () => {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />;
      case "About":
        return <About/>
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
