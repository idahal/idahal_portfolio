import React from 'react';
import { Router } from "@reach/router"
import './App.css';
import Navbar from "../Navbar";
import Header from "../Header";
import Projects from "../Projects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Router>
        <Projects path="/projects"/>
      </Router>
    </div>
  );
}

export default App;
