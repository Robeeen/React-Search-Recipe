import React from 'react';

const Receipe = ({titles, caloriess, weights, images, ctype, ingredis}) => {
    return (
        <div className='card'>
            <h4>{titles} | Type: {ctype} </h4>
            <p>Calories: {caloriess} - Total Weight: {weights}</p>
            <div className='question'>
                <div className='left'>
            <ul>
                {ingredis.map(ingredi => (
                    <li>-{ingredi.text}</li>
                ))}
                </ul>  </div>
                <div>
            <img src={images} alt={''} className='newimage'/>
            </div>
            </div>
        </div>
    )
}

export default Receipe
