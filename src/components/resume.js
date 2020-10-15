import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Resume() {

    function black(e) {
        e.target.className = "fas fa-file";
    }
    function white(e) {
        e.target.className = "far fa-file"
    }
    return (
        <section className="resume">
            <div>
                <h2 className="resume_title">Like What You See?</h2>
                <p>Check out my resume to learn more</p>
            </div>
            <a className="resume_btn" href="#" target="_blank" rel="noopener noreferrer"><i className="far fa-file" onMouseEnter={black} onMouseLeave={white}></i></a>
        </section>
    );
}

export default Resume;
