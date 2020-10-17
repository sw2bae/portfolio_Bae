import React from "react";
import Projects from "../projects.json";

function Portfolio() {
    return (
        <section className="portfolio">
            <h1 className="portfolio_title">My Work</h1>
            <ul className="portfolio_list">
                {Projects.map((project, index) => {
                    return (<li>
                        <img alt={index} src={project.image} />
                        <div>
                            <a href={project.URL} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-chrome"></i>
                            </a>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </li>)
                })}

            </ul>
        </section>
    );
}
export default Portfolio;
