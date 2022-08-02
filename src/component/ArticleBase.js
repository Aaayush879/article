import React from 'react';
import './ArticleBase.css';
import dummy from './dummy.png';

const ArticleBase=()=>{
    return(
        <div className='containe'>
            <h3>TOPIC Name Surname</h3>
            <div className='disp'>
            <div className='imga'>
                <img src={dummy}  className='img'/>
                <br/>
                <img src={dummy}  className='img2'/>
            </div>
            <br/>
            <div className='textt'>
                 <img src={dummy}  className='img3'/>
                 <br/>
                 <p>"he answer if you don't want to use src is to delete the service worker from the create-react-app project. For some reason it affects react-router's handling of server routes."</p>
            </div>
            </div>
            <div className='bottom'>
                <p>"he answer if you don't want to use src is to delete the service worker from the create-react-app project. For some reason it affects react-router's handling of server routes."</p>
            </div>

        </div>
    )
}
export default ArticleBase;
