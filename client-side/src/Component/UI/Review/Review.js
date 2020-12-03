import React from 'react';
import icon from '../../../assests/restaurant-details/icon.svg';
import './review.css';

const review = (props) => {
    const setIcon = (currIcon) => {
        var useTag = `<use xlink:href="${icon}#${currIcon}" />`;
        return <svg dangerouslySetInnerHTML={{ __html: useTag }} />;
    };
    return (
        <div>
        <div className="Review-section">
            <h2>REVIEW</h2>
        <span className= "Review-header">
        <img src={props.image} alt="NOT Found"></img>
        <h2>{props.name}</h2>
        {setIcon("star")}
        {setIcon("star")}
        {setIcon("star")}
        {setIcon("star")}
        {setIcon("star")}

        </span>
    <p className="review-time">{props.time} hours ago</p>
    <p className="review-description">{props.description}</p>
    <hr/>
    </div>
        <div className="Review-section">
        <span className= "Review-header">
        <img src={props.image} alt="NOT Found"></img>
        <h2>{props.name}</h2>
        {setIcon("star")}
        {setIcon("star")}
        {setIcon("star")}
        {setIcon("star")}
        {setIcon("star")}

        </span>
    <p className="review-time">{props.time} hours ago</p>
    <p className="review-description">{props.description}</p>
    <hr/>
    </div>

    </div>
    )
}

export default review;