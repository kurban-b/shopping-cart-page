import React, {useState} from 'react';
import checkout from './shopping-cart-solid.svg'

function Checkout(props) {
    return (
        <div className='checkout'>
            <img src={checkout} alt=""/>
            <span className="counter">
                {props.date.filter((i)=>{return i.bought}).length}
            </span>
        </div>
    );
}

export default Checkout;