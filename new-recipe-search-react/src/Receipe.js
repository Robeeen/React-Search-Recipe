import React from 'react';

const Receipe = ({titles, caloriess, weights, images, ctype, ingredis}) => {
    return (
        <div>
            <h4>{titles} | Type: {ctype} </h4>
            <p>Calories: {caloriess} | Total Weight: {weights}</p>
            <ul>
                {ingredis.map(ingredi => (
                    <li>-{ingredi.text}</li>
                ))}
                </ul>    
            <img src={images} alt={''} />
            <br />
        </div>
    )
}

export default Receipe
