import React from 'react';
import './Base1.css';

const Base1=(props)=>{
    return(
        <div className='container1'>
            <h3>{props.title}</h3>
            
            <a href={props.link}>Click</a>

        </div>
    )
}
export default Base1;