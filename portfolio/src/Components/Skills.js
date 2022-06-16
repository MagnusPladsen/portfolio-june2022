import React from 'react';

const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Adobe XD'
]

export default function Skills() {
    return (
        <div className="grid-item">
            <h2>Skills</h2>
            <div className="inner-container">
                {skills.map((skill, index) => (
                    <div className="inner-tile" key={index}>{skill}
                    </div>
            ))}
            </div>
        </div>
    )
}