import React from 'react';

const interests = [
'Coding', 'Music', 'Movies', 'Gaming', 'Music Production', 'Computers'
]

export default function Interests() {
    return (
        <div className="grid-item">
            <h2>Interests</h2>
            <div className="inner-container">
                {interests.map((interest, index) => (
                    <div className="inner-tile" key={index}>{interest}
                    </div>
            ))}
            </div>
        </div>
    )
}