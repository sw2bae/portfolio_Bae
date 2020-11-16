import React from "react";
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer_logo">
                <a href="#top">
                    <i class="fab fa-connectdevelop"></i>
                    <span className="footer_point">BAE</span>
                </a>
            </div>
            <div className="footer_right">
                <span>Copyright 2020. All rights reserved.</span>
            </div>
            <div className="footer_icon">
                <a href="https://github.com/sw2bae" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/sang-bae-8a38011a0/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
