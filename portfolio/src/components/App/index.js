import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Navbar from "../Navbar";
import Header from "../Header";
import Contact from "../Contact";
import HamburgerBar from "../HamburgerBar";
import Footer from "../Footer";
import Projects from "../Projects";
import logo from './logo_big.svg';

function App() {
  return (
    <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
      <Navbar />
      <HamburgerBar />
      <Router>
        <Header path="/" />
        <Projects path="/projects" />
        <Contact path="/contact"/>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
