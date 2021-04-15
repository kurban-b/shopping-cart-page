import React from 'react';
import Button from "./Button";

function Card(props) {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={props.product.image} alt=""/>
            </div>
            <div className="card-info">
                <div className="card-name">{props.product.name}</div>
                <div className="card-price">{props.product.price}</div>
                <Button product = {props.product} setBought = {props.setBought}/>
            </div>
        </div>
    );
}

export default Card;