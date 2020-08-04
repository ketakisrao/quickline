import React from 'react';
import { Link } from "react-router-dom";
import './index.scss';


function Phase(props) {
    var info = props.info;
    return (
        <Link to={"/" + info.title} className="phase">
            <div className="cont">
                <div className="img">
                    <img src={info.img} />
                </div>
                <div className="info">
                    <h6 className="text-center">
                        {info.title}
                    </h6>
                </div>
            </div>
        </Link>
    );
}

export default Phase;