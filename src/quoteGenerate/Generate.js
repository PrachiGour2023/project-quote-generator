import React, { useState } from 'react'
import axios from 'axios';

const Generate = () => {

    const [advice, setAdvice] = useState([]);

    const fetchAdvice = () => {
        axios.get("https://api.adviceslip.com/advice")
            .then((response) => setAdvice(response.data.slip))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h2>Get Better Advice</h2>
            <div className='container'>
                <div className='card'>
                    <p>"{advice.advice}"</p>
                </div>
                <button onClick={fetchAdvice}>Another Quote</button>
            </div>
        </div>
    )
}

export default Generate