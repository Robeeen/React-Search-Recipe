import React from 'react';

const Receipe = ({titles, caloriess, weights, images, ctype, ingredis}) => {
    return (
        <div className='card'>
            <h4>{titles} | Type: {ctype} </h4>
            <p>Calories: {caloriess} | Total Weight: {weights}</p>
            <div className='question'>
            <ul>
                {ingredis.map(ingredi => (
                    <li>-{ingredi.text}</li>
                ))}
                </ul>    
            <img src={images} alt={''} className='newimage'/>
            </div>
        </div>
    )
}

export default Receipe
