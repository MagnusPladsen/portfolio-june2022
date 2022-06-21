import React from 'react';
import { useState } from 'react';

const skills = [
    'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Adobe XD'
]

export default function Skills() {
    const [show, setShow] = useState('Show');
    const [hide, setHide] = useState('hide');

    const handleShowInterests = (e) => {
        e.preventDefault();
        if (hide === 'hide') {
            setHide('show');
            setShow('Hide');
        } else {
            setHide('hide');
            setShow('Show');
        }
    }
    return (
        <div className="grid-item">
            <h2>Skills</h2>
            {/* <a href="#" className="cta cta-show" onClick={handleShowInterests}>{show}</a> */}
            <div className="inner-container">
                {skills.map((skill, index) => (
                    <div className="inner-tile" id={hide} key={index}>{skill}
                    </div>
            ))}
            </div>
        </div>
    )
}