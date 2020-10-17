import React from "react";

function Skill() {

    return (
        <section className="skill">
            <ul className="skill_list">
                <li className="skill_web">
                    <i className="fas fa-laptop-code"></i>
                    <p>WEB<br />DEVELOPMENT</p>
                </li>
                <li className="skill_design">
                    <i className="fas fa-mobile-alt"></i>
                    <p>RESPONSIVE<br />DESIGN</p>
                </li>
                <li className="skill_automation">
                    <i className="fas fa-robot"></i>
                    <p>AUTOMATION<br />TEST</p>
                </li>
                <li className="skill_qa">
                    <i className="fas fa-eye"></i>
                    <p>QUALITY<br />ASSURANCE</p>
                </li>
            </ul>
        </section>
    );
}

export default Skill;
