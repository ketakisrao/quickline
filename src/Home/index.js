import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import HeroImg from '../assets/home/HeroImg.png';
import AirIcon from '../assets/home/AirIcon.svg';

import partners from '../assets/home/Partners.png';
import p from '../assets/home/pic.svg';
import qs from '../assets/home/problems.svg';
import hmw from '../assets/home/hmw.svg';

import ico1 from '../assets/solution/ico1.png';
import ico2 from '../assets/solution/ico2.png';
import ico3 from '../assets/solution/ico3.png';

import Feature from '../Components/Feature';
import Phases from '../Components/Phases';
import QuoteCarousel from '../Components/QuoteCarousel';

const info = {
    title: ''
};

const features = [
    {
        icon: ico1,
        title: 'Plan your flight',
        desc: 'Custom itineraries, quick access to wait times, and integration with premium services help travelers prepare for any trip.'
    },
    {
        icon: ico2,
        title: 'Skip the line',
        desc: 'Use Quickline to reserve a security time up to 48 hours in advance and skip the main queue—or access Quickline on-the fly as a walk-in.'
    },
    {
        icon: ico3,
        title: 'Navigate the airport',
        desc: 'Access terminal maps with overlays for food, amenities and your custom itinerary, or get quick, simple maps via MMS.'
    }
];

const quotes = [
    'Gives me a lot more peace of mind knowing when I will arrive',
    'A lot of anxiety is over not really knowing how fast it will take(how long line is) and missing your flight',
    'When I would get there and whether I would be late or not.',
    'Whether I trust this will depend on my experience with it.',
    'Even though you said to leave two hours; I might still leave earlier...even though I see it, I’m going to[add ten minutes].',
    'Will I make my flight? How much time do I have left?'

];


function Home(props) {
    let features_item = [];
    let i = 0;
    for (i = 0; i < features.length; i++) {
        features_item.push(<Feature info={features[i]}></Feature>);
    }
    return (
        <div>
            <div className="home-hero">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div className="vertical-center">
                                <div>
                                    <h2>An innovative service ecosystem for the future of air travel<img src={AirIcon} className="air-icon" /></h2>
                                    <p>Developed by Carnegie Mellon Masters students in
                                    partnership with Pittsburgh International Airport</p>
                                    <Link to="/solution" className="button">Learn More</Link>
                                    <a target="_blank" href="https://m.me/100974845013806" className="button">Demo</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={HeroImg} className="full-width" />
                        </Col>
                    </Row>
                    <div className="margin-bottom"></div>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <img src={partners} className="partners" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section light-background">
                <div className="big-quote">
                    <h1>Airport travelers don’t have enough control</h1>
                </div>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div className="centered-item">
                                <img src={p} className="threeq-width" />
                            </div>

                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div className="vertical-center">
                                <img src={qs} className="full-width" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section weird-background">
                <img src={hmw} className="full-width" />
            </div>

            <div className="ideation-section">
                <Container fluid>
                    <Row>
                        {features_item}
                    </Row>
                </Container>
            </div>

            <div className="ideation-section light-background">
                <QuoteCarousel info={quotes}></QuoteCarousel>
            </div>
            <Phases></Phases>
        </div>
    );
}

export default Home;
