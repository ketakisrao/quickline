import React from 'react';
import './index.scss';
import { Container, Row, Col } from 'react-bootstrap';


function Hero(props) {
    var info = props.info;
    return (
        <div className="hero">
            <div>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                            <div className="title">
                                <div>
                                    <h3>{info.title}</h3>
                                    <p>{info.desc}</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div className="centered-item">
                                <img src={info.heroImg} className="full-width" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Hero;
