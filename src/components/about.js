import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function About() {

    return (
        <section className="about">
            <h2 className="about_title">About Me</h2>
            <p>A Developer with Mathematical Thought | Musical Sensibility | QA Analysis</p>
            <span><i className="fas fa-building"></i>&nbsp;Experience  <br />
                <i className="fas fa-caret-right"></i>&nbsp;SW Quality Assurance Engineer | Samsung Electronics of America (SEA)</span>
            <span><i className="fas fa-graduation-cap"></i>&nbsp;Education <br />
                <i className="fas fa-caret-right"></i>&nbsp;B.A. Mathematics | University of Washington, Seattle, WA<br />
                <i className="fas fa-caret-right"></i>&nbsp;Full-Stack Coding Boot Camp | University of Kansas, KS</span>
            <ul className="about_skill">
                <div>
                    <li><i className="fab fa-html5"></i>&nbsp;&nbsp;HTML5</li>
                    <li><i className="fab fa-css3-alt"></i>&nbsp;&nbsp;CSS3</li>
                    <li><i className="fab fa-js-square"></i>&nbsp;&nbsp;JavaScript</li>
                    <li><i className="fab fa-python"></i>&nbsp;&nbsp;Python</li>
                    <li><i className="fab fa-node-js"></i>&nbsp;&nbsp;NodeJS</li>
                </div>
                <div>
                    <li><i className="fas fa-database"></i>&nbsp;&nbsp;MySQL</li>
                    <li><i className="fas fa-database"></i>&nbsp;&nbsp;MongoDB</li>
                    <li><i className="fab fa-react"></i>&nbsp;&nbsp;React</li>
                    <li><i className="fab fa-android"></i>&nbsp;&nbsp;QXDM|QCAT</li>
                    <li><i className="fas fa-network-wired"></i>&nbsp;&nbsp;Wireshark</li>
                </div>
            </ul>
        </section>
    );
}

export default About;
