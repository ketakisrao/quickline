import React from 'react';
import './index.scss';


function Idea(props) {
    var info = props.info;
    return (
        <div className="idea">
            <div className="title"><p>{info.title}</p></div>
            <div className="desc">{info.desc}</div>
        </div>
    );
}

export default Idea;