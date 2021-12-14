import React from 'react';

const Receipe = ({title, calories, weight, image}) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{calories}</p>
            <p>{weight}</p>
            <img src={image} alt={''} />
        </div>
    )
}

export default Receipe
