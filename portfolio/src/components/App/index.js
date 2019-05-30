import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Navbar from "../Navbar";
import Header from "../Header";
import HamburgerBar from "../HamburgerBar";
import Projects from "../Projects";
import logo from './logo_big.svg';


function App() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <Navbar />
      <HamburgerBar />
      <Router>
        <Header path="/"/>
      </Router>

      <Router>
        <Projects path="/projects" />
      </Router>
    </div>
  );
}

export default App;
