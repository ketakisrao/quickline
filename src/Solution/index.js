import React from 'react';
import './index.scss';
import HeroImg from '../assets/solution/HeroImg.png';
import Switch from '../Components/Switch';


import { Container, Row, Col } from 'react-bootstrap';
import Feature from '../Components/Feature';


const features = [
    {
        icon: '',
        title: 'Plan your flight',
        desc: 'Custom itineraries, quick access to wait times, and integration with premium services help travelers prepare for any trip.'
    },
    {
        icon: '',
        title: 'Skip the line',
        desc: 'Use Quickline to reserve a security time up to 48 hours in advance and skip the main queue—or access Quickline on-the fly as a walk-in.'
    },
    {
        icon: '',
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
    handleChange(event) {
        this.setState({ isChatbot: !this.state.isChatbot });
    }
    render() {
        let features_item = [];
        let i = 0;
        for(i=0; i<features.length; i++){
            features_item.push(<Feature info={features[i]}></Feature>);
        }
        console.log()
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
                <div className="features">
                    <Container>
                        <Row>
                            {features_item}
                        </Row>
                    </Container>
                </div>
                <div className="modes">
                    <h2>Two modes of delivery</h2>
                    <p>For maximum accessibility, PITPlus functions are available in two formats—full mobile application and SMS/MMS-based messaging system. Choose a mode to see key features and design decisions.</p>
                    <Switch isChecked={this.state.isChatbot} handleChange={this.handleChange}></Switch>
                </div>
            </div>
        );
    }
}
export default Solution;