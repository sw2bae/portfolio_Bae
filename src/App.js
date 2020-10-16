import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./components/header";
import Skill from "./components/skill";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";

import './App.css';

function App() {

  function black(e) {
    e.target.className = "fas fa-paper-plane";
  }
  function white(e) {
    e.target.className = "far fa-paper-plane"
  }


  return (
    <Router>
      <Header />
      <Skill />
      <About />
      <Resume />
      <Portfolio />


      <section className="contact">
        <h2 className="contact_title">Get in Touch</h2>
        <div className="contact_container">
          <div className="contact_point">
            <p>I'd love to hear from you!</p><br />
            <ul>
              <li>
                <i className="fas fa-envelope-square"></i>&nbsp;sw2.bae@gmail.com</li>
              <li><i className="fas fa-phone-square"></i>&nbsp;214.727.4326</li>
            </ul>
          </div>

          <form className="contact_input">
            <div className="contact_userInfo">
              <input className="emailInput" placeholder="Email" type="email"></input>
              <input className="nameInput" placeholder="Name"></input>
            </div>
            <div className="contact_body">
              <input className="bodyInput" placeholder="Tell me how I can help you"></input>
            </div>
          </form>
          <Link className="contact_btn" >
            <i className="far fa-paper-plane" onMouseEnter={black} onMouseLeave={white}></i>
          </Link>
        </div>
      </section>

      <Footer />
    </Router >
  );
}

export default App;
