import React from 'react';
import './App.css';

function App() {




  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar_logo">
            <i className="fas fa-battery-full"></i>
            <span className="navbar_title"> Porfolio</span>
          </div>
          <ul className="navbar_menu">
            <li><a href>About</a></li>
            <li><a href>Porfolio</a></li>
            <li><a href>Resume</a></li>
            <li><a href>Contact</a></li>
          </ul>
          <div className="navbar_icon">
            <i className="fab fa-github-square"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <a href className="navbar_menubar">
            <i className="fas fa-bars"></i>
          </a>
        </nav>
        <div className="navbar_name">
          <h1>SANG BAE</h1>
          <div className="navbar_position">
            <p>FULL-STACK WEB DEVELOPER</p>
            <p>SW QUALITY ASSURANCE ENGINEER</p>
          </div>
        </div>
        <div className="navbar_downArrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </header>

      <main>
        <section className="skill">
          <ul>
            <li className="skill_web">
              <i className="fas fa-laptop-code"></i>
              <span>WEB DEVELOPMENT</span>
            </li>
            <li className="skill_design">
              <i className="fas fa-mobile-alt"></i>
              <span>RESPONSIVE DESIGN</span>
            </li>
            <li className="skill_automation">
              <i className="fas fa-robot"></i>
              <span>AUTOMATION TEST</span>
            </li>
            <li className="skill_qa">
              <i className="fas fa-eye"></i>
              <span>QUALITY ASSURANCE</span>
            </li>
          </ul>
        </section>

        <section className="about">

          <h2 className="about_title">About Me</h2>
          <p>Hi, I am Sang Bae.</p>
          <ul className="about_skill">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>NodeJS</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>ReactJS</li>
            <li>QXDM|QCAT</li>
          </ul>
        </section>

        <section className="porfolio">
          <h2 className="porfolio_title">My Work</h2>
          <ul className="porfolio_list">
            <li>WORK1</li>
            <li>WORK2</li>
            <li>WORK3</li>
          </ul>
          <button className="porfolio_btn">See More</button>
        </section>

        <section className="resume">
          <div>
            <h2 className="resume_title">Like What You See?</h2>
            <p>Check out my resume to learn more.</p>
          </div>
          <button className="resume_btn">View Resume</button>
        </section>

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
      </main>

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
    </>
  );
}

export default App;
