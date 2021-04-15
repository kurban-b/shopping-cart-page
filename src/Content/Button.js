import React from 'react';

function Button(props) {
    if (props.product.bought) {
        return (
            <div className='card-button'>
                <button disabled className='btn' onClick={()=>{
                    props.setBought(props.product.id)}}>
                    Добавлено в корзину
                </button>
            </div>
        )
    }
    return (
        <div className='card-button'>
            <button className='btn' onClick={()=>{
                    props.setBought(props.product.id)}}>
                Добавить в корзину
            </button>
        </div>
    );
}

export default Button;