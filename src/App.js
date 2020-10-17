import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Skill from "./components/skill";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";
import './App.css';

function App() {

  function scrollDown(e) {
    let menu = e.target.id;
    let elementHeights = {
      "body": document.body.scrollHeight,
      "header": document.body.getElementsByTagName("header")[0].scrollHeight,
      "about": document.body.getElementsByClassName("about")[0].scrollHeight,
      "resume": document.body.getElementsByClassName("resume")[0].scrollHeight,
      "portfolio": document.body.getElementsByClassName("portfolio")[0].scrollHeight,
      "contact": document.body.getElementsByClassName("contact")[0].scrollHeight,
      "footer": document.body.getElementsByClassName("footer")[0].scrollHeight,
      "skill": document.body.getElementsByClassName("skill")[0].scrollHeight
    };
    let aboutHeight = elementHeights.header + elementHeights.skill;
    let resumeHeight = elementHeights.header + elementHeights.skill + elementHeights.about;
    let portfolioHeight = elementHeights.header + elementHeights.skill + elementHeights.about + elementHeights.resume;
    let itemHeights = {
      "about": aboutHeight,
      "resume": resumeHeight,
      "portfolio": portfolioHeight
    };
    window.scrollTo(0, itemHeights[menu]);
  }

  return (
    <Router>
      <Header scrollDown={scrollDown} />
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
