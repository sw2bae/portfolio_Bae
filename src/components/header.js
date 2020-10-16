import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Header() {

    const [toggleBtnStatus, setToggleBtnStatus] = useState(false);

    function toggleBtn(e) {
        setToggleBtnStatus(!toggleBtnStatus);
        console.log(toggleBtnStatus);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="navbar_logo">
                    <Link onClick={() => {
                        window.scrollTo(0, 0)
                    }}>
                        <i class="fab fa-connectdevelop"></i>
                        <span className="navbar_title"> <span className="point">BAE</span></span>
                    </Link>
                </div>
                <Link className='navbar_menubar' onClick={toggleBtn}>
                    <i className="fas fa-bars"></i>
                </Link>
                <ul className={"navbar_menu" + (toggleBtnStatus ? "_active" : "")}>
                    <li><Link onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight)
                    }}>About</Link></li>
                    <li><Link onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight)
                    }}>Resume</Link></li>
                    <li><Link onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight)
                    }}>Portfolio</Link></li>
                    <li><Link onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight)
                    }}>Contact</Link></li>
                </ul>
                <div className={"navbar_icon" + (toggleBtnStatus ? "_active" : "")}>
                    <a href="https://github.com/sw2bae" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sang-bae-8a38011a0/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </nav>
            <div className="navbar_name">
                <h1>SANG <span className="point">BAE</span></h1>
                <div className="navbar_position">
                    <p>FULL-STACK WEB DEVELOPER</p>
                    <p>SW QUALITY ASSURANCE ENGINEER</p>
                </div>
            </div>
            <div className="navbar_downArrow">
                <i className="fas fa-chevron-down"></i>
            </div>
        </header>
    );
}

export default Header;
