import React from 'react';
import './index.scss';


function Idea(props) {
    var info = props.info;
    return (
        <div className="insight">
            <p className="title"><b>{info.title}</b></p>
            <p>{info.desc}</p>
        </div>
    );
}

export default Idea;
