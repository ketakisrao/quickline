import React from 'react';
import './index.scss';
import { Col } from 'react-bootstrap';


function Feature(props) {
    var info = props.info;
    return (
        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <div className="feature-card">
                <div className="feature-img centered-item">
                    <div className="circle centered-item">
                        <img />
                    </div>
                </div>
                <div className="feature-content">
                    <h4>{info.title}</h4>
                    <p>{info.desc}</p>
                </div>
            </div>
        </Col>
    );
}

export default Feature;
