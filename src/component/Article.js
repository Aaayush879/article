import React from 'react';
import Base from './Base';
import dummy from './dummy.png';

const Article =()=>{
    return(
        <div>
            <h3>Articles</h3>
            <Base imgsrc={dummy} heading="Lorem ipsum dolor sit amet" 
            body="he answer if you don't want to use src is to delete the service worker from the create-react-app project. For some reason it affects react-router's handling of server routes."
            para="Name Surname 3h"
            />
            <br/>
            <Base imgsrc={dummy} heading="Lorem ipsum dolor sit amet" 
            body="he answer if you don't want to use src is to delete the service worker from the create-react-app project. For some reason it affects react-router's handling of server routes."
            para="Name Surname 3h"
            />
            <br/>
            <Base imgsrc={dummy} heading="Lorem ipsum dolor sit amet" 
            body="he answer if you don't want to use src is to delete the service worker from the create-react-app project. For some reason it affects react-router's handling of server routes."
            para="Name Surname 3h"
            />
            <br/>
            <Base imgsrc={dummy} heading="Lorem ipsum dolor sit amet" 
            body="he answer if you don't want to use src is to delete the service worker from the create-react-app project. For some reason it affects react-router's handling of server routes."
            para="Name Surname 3h"
            />

        </div>
    )
}
export default Article;