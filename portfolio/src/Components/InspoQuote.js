import React from 'react';
import { quote } from '../Api/quoteApi';
import { useEffect, useState } from 'react';


export default function InspoQuote() {

    const [quoteId, setQuoteId] = useState('0');
    
    const timer = 5000; //5 seconds
    useEffect(() => {
    const interval = setInterval(() => {
        setQuoteId(Math.floor(Math.random() * quote.q.length))
    }, timer);  //Handles the selection of a random quote every 5 seconds

    return () => clearInterval(interval);
    }, [])
    
    const randomQuote = quote.q[quoteId];
    const randomAuthor = quote.a[quoteId];

    return (
        <div className='quote-container'>
            <p className="italic"><span className="italic">{randomQuote}</span><span className="bold">{randomAuthor}</span></p>
        </div>
    )
}