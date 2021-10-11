import React from 'react';
import './card.css'

const Card = (props) => {
    console.log(props.meal);
    const { idMeal, strMeal, strMealThumb, strTags } = props.meal;
    return (
        <>
            <div className="card">
                <img src={strMealThumb} alt="" />
                <div className="text">
                    <h1>$12</h1>
                    <h3>{strMeal}</h3>
                    <span>{strTags}</span>
                </div>
            </div>
        </>
    );
};

export default Card;