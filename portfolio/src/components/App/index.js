import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Navbar from "../Navbar";
import Header from "../Header";
import Projects from "../Projects";
import projects from '../../data/projects';




function App() {
  return (
    <div className="App">
      <Navbar />
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
