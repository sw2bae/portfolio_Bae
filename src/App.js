import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/header";
import Skill from "./components/skill";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";
import './App.css';

function App() {



  return (
    <Router>
      <Header />
      <Skill />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </Router >
  );
}

export default App;
