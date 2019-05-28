import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Navbar from "../Navbar";
import Header from "../Header";
import HamburgerBar from "../HamburgerBar";
import logo from './logo_big.svg';


import Projects from "../Projects";
import projects from '../../data/projects';




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
        <Projects items={projects} path="/projects"/>
      </Router>
    </div>
  );
}

export default App;
