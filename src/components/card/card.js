import React from 'react';
import './card.scss';

const card = ({ image, title }) => (
    <div className="card-container__card">
        <img src={ image } alt="card" className="card-container__card-image" />
        <h4 className="card-container__card-name">
            {title}
        </h4>
    </div>
)
 
export default card;