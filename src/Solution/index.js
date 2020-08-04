import React from 'react';
import './index.scss';
import HeroImg from '../assets/solution/HeroImg.png';
import Switch from '../Components/Switch';

import AppIcon from '../assets/solution/AppIcon.svg';
import ChatIcon from '../assets/solution/ChatIcon.svg';

import ico1 from '../assets/solution/ico1.png';
import ico2 from '../assets/solution/ico2.png';
import ico3 from '../assets/solution/ico3.png';

import app1 from '../assets/solution/app1.png';
import app2 from '../assets/solution/app2.svg';
import app3 from '../assets/solution/app3.svg';
import app4 from '../assets/solution/app4.svg';

import sms1 from '../assets/solution/sms1.svg';
import sms2 from '../assets/solution/sms2.svg';
import sms3 from '../assets/solution/sms3.svg';
import sms4 from '../assets/solution/sms4.svg';

import { Container, Row, Col } from 'react-bootstrap';
import Feature from '../Components/Feature';


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


class Solution extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChatbot: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({ isChatbot: !this.state.isChatbot });
    }
    getFeatures() {
        if (this.state.isChatbot) {
            return (
                <div>
                    <div className="feature-section plan">
                        <h2>Plan your flight</h2>
                        <p>Chat with a bot to receive image-based cards that provide essential airport info</p>
                        <div>
                            <img src={sms1} className="half-width" />
                        </div>
                        <div>
                            <img src={sms2} className="half-width" />
                        </div>
                    </div>
                    <div className="feature-section skip">
                        <h2>Skip the line</h2>
                        <p>Reserve a time to go through security with Quickline and skip the main line</p>
                        <div>
                            <img src={sms3} className="threeq-width" />
                        </div>
                    </div>
                    <div className="feature-section navigation">
                        <h2>Navigate the airport</h2>
                        <p>Quickly locate amenities, vendors, and locations relevant to your itinerary with a dynamic map</p>
                        <div>
                            <img src={sms4} className="full-width" />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="feature-section plan">
                        <h2>Plan your flight</h2>
                        <p>Chat with a bot to receive image-based cards that provide essential airport info</p>
                        <div>
                            <img src={app1} className="full-width" />
                        </div>
                        <div>
                            <img src={app2} className="half-width" />
                        </div>
                    </div>
                    <div className="feature-section skip">
                        <h2>Skip the line</h2>
                        <p>Reserve a time to go through security with Quickline and skip the main line</p>
                        <div>
                            <img src={app3} className="width-80" />
                        </div>
                    </div>
                    <div className="feature-section navigation">
                        <h2>Navigate the airport</h2>
                        <p>Quickly locate amenities, vendors, and locations relevant to your itinerary with a dynamic map</p>
                        <div>
                            <img src={app4} className="half-width" />
                        </div>
                    </div>
                </div>
            );
        }
    }
    render() {
        let features_item = [];
        let i = 0;
        for (i = 0; i < features.length; i++) {
            features_item.push(<Feature info={features[i]}></Feature>);
        }

        return (
            <div>
                <div className="hero-sol">
                    <h3>Introducing PIT+</h3>
                    <p>An innovative system designed to provide air travelers predictability, control and efficiency.</p>
                    <div class="centered-item">
                        <Container>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <div className="centered-item">
                                        <img src={HeroImg} className="full-width" />
                                    </div>
                                </Col>
                                <Col md={6} lg={6} xl={6}>
                                    <div className="centered-item hidden">
                                        <img src={HeroImg} className="full-width" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="ideation-section">
                    <Container fluid>
                        <Row>
                            {features_item}
                        </Row>
                    </Container>
                </div>
                <div className="modes">
                    <h2>Two modes of delivery</h2>
                    <p>For maximum accessibility, PITPlus functions are available in two formats—full
                    mobile application and SMS/MMS-based messaging system. Choose a mode to see key
                        features and design decisions.</p>
                    <div className="app-chat">
                        <Container fluid>
                            <Row>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <div className={(this.state.isChatbot) ? "opacity-light" : ""}>
                                        <img src={AppIcon} className="full-width"/>
                                    </div>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <div className="switch-div">
                                        <Switch isChecked={this.state.isChatbot} handleChange={this.handleChange}></Switch>
                                    </div>
                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                    <div className={(this.state.isChatbot) ? "" : "opacity-light"}>
                                        <img src={ChatIcon} className="full-width"/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                {this.getFeatures()}
            </div>
        );
    }
}
export default Solution;