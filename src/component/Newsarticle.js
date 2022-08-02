import React from 'react';
import Base1 from './Base1';
import pdf from './my.pdf'
import './Newsarticle.css'
const Newsarticle=()=>{
    return(
        <div className='container2'>
            <h4>Newsletters</h4>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
            <br/>
            <Base1 title="syllabus" link={pdf}/>
        </div>
    )
}
export default Newsarticle;