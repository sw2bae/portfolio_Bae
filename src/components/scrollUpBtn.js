import React from "react";
import { Link } from 'react-router-dom';

function ScrollUpBtn() {

    function black(e) {
        e.target.className = "fas fa-arrow-alt-circle-up";
    }
    function white(e) {
        e.target.className = "far fa-arrow-alt-circle-up"
    }

    return (
        <a href="#top"> <i class="far fa-arrow-alt-circle-up" id="scrollUp" onMouseEnter={black} onMouseLeave={white}></i>
        </a>
    );
}

export default ScrollUpBtn;
