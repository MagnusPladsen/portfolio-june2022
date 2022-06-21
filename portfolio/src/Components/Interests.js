import React from 'react';
import { useState } from 'react';

const interests = [
'Coding', 'Music', 'Movies', 'Gaming', 'FL Studio', 'Computers',
]

export default function Interests() {
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
            <h2>Interests</h2>
{/*             <a href="#" className="cta cta-show" onClick={handleShowInterests}>{show}</a> */}
            <div className="inner-container interests">
                {interests.map((interest, index) => (
                    <div className="inner-tile" id={hide} key={index}>{interest}
                    </div>
            ))}
            </div>
        </div>
    )
}