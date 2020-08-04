import React from 'react';
import bull from '../../assets/card-dot.svg';
import './index.scss';


function Bullet(props) {
    var info = props.info;
    return (
        <div className="bullet-card">
            <div className="bullet-img">
                <img src={bull} />
            </div>
            <div className="bullet-info">
                <h6>{info.title}</h6>
                <p>{info.desc}</p>
            </div>
        </div>
    );
}

export default Bullet;