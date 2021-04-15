import React from 'react';
import Card from "./Card";

function Content(props) {



    return (
        <div className='content'>
            {
                props.date.map((item)=>{
                    return <Card product = {item}
                                 date = {props.date}
                                 setDate = {props.setDate }
                                 setBought = {props.setBought}
                    />
                })
            }
        </div>
    );
}

export default Content;