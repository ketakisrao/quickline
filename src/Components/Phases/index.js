import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Phase from "../Phase";

import arrow from '../../assets/home/arrow.svg';
import d from '../../assets/home/discovery.png';
import i from '../../assets/home/ideation.png';
import p from '../../assets/home/prototype.png';
import s from '../../assets/home/solution.png';

import './index.scss';

const phases = [
    {
        title: 'Discovery',
        img: d
    },
    {
        title: 'Ideation',
        img: i
    },
    {
        title: 'Prototype',
        img: p
    },
    {
        title: 'Solution',
        img: s
    }
];
function Phases(props) {
    // var phases = props.info;
    return (
        <div className="phases ideation-section dark-background">
            <Container fluid>
                <Row>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Phase info={phases[0]}></Phase>
                    </Col>
                    <Col className="arrow">
                        <img src={arrow} />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Phase info={phases[1]}></Phase>
                    </Col>
                    <Col className="arrow">
                        <img src={arrow} />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Phase info={phases[2]}></Phase>
                    </Col>
                    <Col className="arrow">
                        <img src={arrow} />
                    </Col>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2}>
                        <Phase info={phases[3]}></Phase>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Phases;