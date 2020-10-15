import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/header";
import Skill from "./components/skill";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";

import './App.css';

function App() {



  return (
    <Router>
      <Header />
      <Skill />
      <About />
      <Resume />
      <Portfolio />


      <section className="contact">
        <h2 className="contact_title">Get in Touch</h2>
        <div className="contact_point">
          <p>Feel free to reach out. I'd love to hear from you!</p>
          <ul>
            <li>sw2.bae@gmail.com</li>
            <li>214.727.4326</li>
          </ul>
        </div>
        <form className="contact_input">
          <input className="emailInput"></input>
          <input className="nameInput"></input>
          <input className="bodyInput"></input>
        </form>
        <button className="contact_btn">Send</button>
      </section>


      <footer>
        <div className="footer_logo">
          <i className="fas fa-battery-full"></i>
          <span>SANG BAE</span>
        </div>
        <div className="footer_right">
          <span>Copyright 2020. All rights reserved.</span>
        </div>
        <div className="footer_icon">
          <i className="fab fa-github-square"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </footer>
    </Router>
  );
}

export default App;
