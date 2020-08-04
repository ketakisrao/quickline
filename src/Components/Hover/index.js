import React from 'react';
import { Card } from 'react-bootstrap';
import './index.scss';


function Hover(props) {
    var info = props.info;
    return (
        <div className="hover">
            <img src={info.img} className="full-width" />
            <div className="hover-text centered-item">
                <div>
                <h5>{info.title}</h5>
                <p>{info.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default Hover;