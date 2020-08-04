import React from 'react';
import './index.scss';


function AboutC(props) {
    var info = props.info;
    return (
        <div className="about-card">
            <div className="about-img">
                <img src={info.img} />
            </div>
            <div className="about-info">
                <p className="title">{info.title}</p>
                <h3>{info.name}</h3>
                <p>{info.desc}</p>
                <a className="portfolio" target="_blank" href={"https://"+info.portfolio}>{info.portfolio}</a>
            </div>
        </div>
    );
}

export default AboutC;