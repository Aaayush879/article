import React from 'react';
import './Base.css';
import {useNavigate} from 'react-router-dom'


const Base=(props)=>{
    const navigate = useNavigate();
    const onSubmit=()=>{
        navigate('/article');
    }
    
    return(
        <div className='containerr'>
            <div className='img'>
                <img src={props.imgsrc}  className='imagee'/>
            </div>
            <div className='text'>
                <h3><b>{props.heading}</b></h3><br/>
                <h6>{props.body}</h6>
            </div>
            <div className='name'>
                <p>{props.para}</p>
                <p onClick={onSubmit}>More</p>
            </div>

        </div>
    )
}
export default Base;
