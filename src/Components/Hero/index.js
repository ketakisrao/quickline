import React from 'react';
import CustomNavbar from '../CustomNavbar';
import './index.scss';
import { Container, Row, Col } from 'react-bootstrap';
import HeroImg from '../../assets/prototype/HeroImg.png';

const product_name = "Quickline"
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
                                    <h3>Prototype</h3>
                                    <p>We ideated on the features of each prototype that
                                    would be most useful to our duel channel solution.
                                    We conducted a competitive analysis of existing best-in-class
                                    airport applications and secondary research into existing virtual
                                        queue system technology to inform our design decisions.</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div class="centered-item">
                                <img src={HeroImg} className="full-width" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Hero;
