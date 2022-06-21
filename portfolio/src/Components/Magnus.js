import React from "react";

const linkedin = 'https://www.linkedin.com/in/magnus-pladsen-1a2738226'
const github = 'https://www.linkedin.com/in/magnus-pladsen-1a2738226'

export default function Magnus() {
    return (
        <div className="grid-item">
            <h1>Magnus Pladsen</h1>
            <h3 className="about">Frontend Student & Junior Developer</h3>
            <div className="links">
            <div className="tooltip">
                <a href={linkedin} target="_blank"><i className="fab fa-2xl fa-linkedin"></i></a>
                <span className="tooltiptext">Linkedin</span>
            </div>
            <div className="tooltip">
                <a href={github} target="_blank"><i className="fab fa-2xl fa-github"></i></a>
                <span className="tooltiptext">GitHub</span>
            </div>
            </div>
        </div>
        )
}