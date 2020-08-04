import React from 'react';
import Hero from '../Components/Hero';
import Idea from '../Components/Idea';
import Insight from '../Components/Insight';
import Bullet from '../Components/Bullet';
import Phases from '../Components/Phases';


import HeroImg from '../assets/prototype/HeroImg.png';
import bullseye from '../assets/prototype/bullseye.png';
import vq from '../assets/prototype/vq.png';
import prior from '../assets/prototype/prior.png';
import tp1 from '../assets/prototype/TP1.png';
import tp2 from '../assets/prototype/TP2.png';
import vq1 from '../assets/prototype/VQ1.png';
import vq2 from '../assets/prototype/VQ2.png';

import tpm1 from '../assets/prototype/tpm1.png';
import tpm2 from '../assets/prototype/tpm2.png';
import card1 from '../assets/prototype/card1.png';
import card2 from '../assets/prototype/card2.png';
import sim1 from '../assets/prototype/sim1.png';
import sim2 from '../assets/prototype/sim2.png';
import team from '../assets/prototype/team.png';
import './index.scss';

import { Container, Col, Row } from 'react-bootstrap';
import Hover from '../Components/Hover';


const info = {
    title: 'Prototype',
    desc: 'We ideated on the features of each prototype that would be most useful to our dual channel solution. We conducted a competitive analysis of existing best-in-class airport applications and secondary research into existing virtual queue system technology to inform our design decisions.',
    heroImg: HeroImg
};

const insights = [
    {
        title: "Quickline time windows take the guesswork out of planning, providing peace of mind.",
        desc: "Having a security check reservation provides travelers with a bench mark to plan around, allowing them to control their own time and reduce anxiety about missing their flight."
    },
    {
        title: "Timely, relevant communication reduces cognitive load.",
        desc: "Users feel supported by live updates and notifications that offer visibility of system status, both for their flight details and for their security reservations."
    },
    {
        title: "System trust is integral to repeat use.",
        desc: "Accurate, up-to-date information is required for users to trust these systems enough to use them more than once. There is a small margin of error."
    }
];

const ideation = [
    {
        title: "From 20+ concepts to 2 prototypes",
        desc: "After synthesizing feedback from our storyboard tests, we narrowed our focus to two main concepts: a security reservation system and a set of tools intended to provide transparency into the airport journey."
    },
    {
        title: "User Testing",
        desc: (
            <div>
                <p>We created mid-fidelity prototypes based on our synthesized priorities, and conducted user testing with PIT travelers remotely via UserTesting.com to validate that our prototypes met traveler needs as intended.</p>
                < div className="user-testing" >
                    <Container fluid>
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <img src={vq1} className="threeq-width" />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <img src={vq2} className="threeq-width" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <img src={tp1} className="threeq-width" />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <img src={tp2} className="threeq-width" />
                            </Col>
                        </Row>
                    </Container>
                </div >
            </div>
        )
    },
    {
        title: "User Testing",
        desc: "With this feedback in mind, we iterated on our prototypes through more rounds of design and testing, making sure to center accuracy, flexibility, cyber security, and user empathy.",
    },
    {
        title: "Simulating Experience",
        desc: "To better understand the behavior and perceptions associated with waiting and planning in real airports, we tested our prototypes with the intention of recreating the airport mindset as closely as possible.",
    }
];

const hover = [
    {
        title: '',
        desc: 'Through a bullseye approach we identified customized itinerary planning and dynamic map navigation as the two core functions.',
        img: bullseye
    },
    {
        title: '',
        desc: 'We created a user flow breakdown for Quickline to understand how the system could support both high-tech, low-tech, and no-tech access points to offer flexible security check reservation booking both remotely and on-site at PIT.',
        img: vq
    }
];

const bullet = [
    {
        title: 'explanation is key',
        desc: 'Users loved being able to reserve a time window to go through security once they understood the process, but the system was not intuitive without explanatory support'
    },
    {
        title: 'trip planning comforts',
        desc: 'The transparency features were well-received in testing; users found the map overlays to be helpful and the itinerary worth downloading'
    },
    {
        title: 'safety is paramount',
        desc: 'In both scenarios, privacy and cyber security were of the utmost importance. Unsurprisingly, users found the solutions beneficial only with guaranteed data safety'
    }
];

const bullet2 = [
    {
        title: 'reserve Peace of mind',
        desc: 'In testing, multiple users commented that knowing they had a security check reservation would give them reassurance that they would make their flight on time.'
    },
    {
        title: 'Remove PAYMENT ASPECT',
        desc: 'We were surprised to learn that our “fast pass” app function did not test well. Although users liked the idea of being able to recover from lateness, they did not want to pay for the privilege.'
    },
    {
        title: 'be accurate and firm',
        desc: 'Users in both tests worried what might happen if interferences such as late reservation arrivals or flight status bugs occurred. They confirmed the importance of preventing these system failures.'
    }
];


function Prototype() {
    let insights_array = [], i;
    for (i = 0; i < insights.length; i++) {
        insights_array.push(<Insight info={insights[i]}></Insight>);
    }
    return (
        <div>
            <Hero info={info}></Hero>
            <div className="ideation-section">
                <Idea info={ideation[0]}></Idea>
            </div>
            <div className="ideation-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Hover info={hover[0]}></Hover>
                            <h6 className="text-center">Planning Support Tools</h6>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Hover info={hover[1]}></Hover>
                            <h6 className="text-center">Quickline Reservation System</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section dark-background">
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={prior} className="half-width" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div className="vertical-center">
                                <div>
                                    <b>We prioritized features that would meet user needs identified during our ideation phase:</b>
                                    <p>
                                        <ul>
                                            <li>Recommended time windows to go through security</li>
                                            <li>Reservation flexibility and modification</li>
                                            <li>Trip-planning support</li>
                                            <li>Information on what to expect at each stage of the airport</li>
                                            <li>Quick access to food and services on-site</li>
                                            <li>Accurate flight details and security wait times</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section light-background">
                <Idea info={ideation[1]}></Idea>
            </div>
            <div className="ideation-section light-background">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Bullet info={bullet[0]}></Bullet>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Bullet info={bullet[1]}></Bullet>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Bullet info={bullet[2]}></Bullet>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                            <img src={tpm1} className="full-width" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div class="vertical-center">
                                <div className="text">
                                    <p>
                                        A security reservation system scored well in early testing, 
                                        but some users did not want to download an app or access a 
                                        website to sign up.
                                    </p>
                                    <p>
                                        To improve accessibility for those users as well as travelers 
                                        who may not have a smart phone, we created an SMS/MMS card-based 
                                        prototype to offer basic flight and airport information along with 
                                        a reservation code.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="padding"></div>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div class="vertical-center">
                                <div className="text">
                                    <p>
                                        In order to reduce traveler anxiety and frustration both in the
                                        security line and throughout the airport journey, we created a
                                        customized itinerary planning feature to augment PIT’s existing app.
                                    </p>
                                    <p>
                                        This itinerary shows travelers what to expect at each stage of their
                                        journey along with time estimates for how long it will take. It also
                                        offers accurate flight updates and personalized cushion time with access
                                        to coupons for their favorite retail and service needs and recommendations
                                        for their free time.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                            <img src={tpm2} className="full-width" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section light-background">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                            <img src={card1} className="full-width" />
                        </Col>
                        <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                            <div class="vertical-center">
                                <div className="text">
                                    <p>
                                        In order to reduce traveler anxiety and frustration both in the
                                        security line and throughout the airport journey, we created a
                                        customized itinerary planning feature to augment PIT’s existing app.
                                    </p>
                                    <p>
                                        This itinerary shows travelers what to expect at each stage of their
                                        journey along with time estimates for how long it will take. It also
                                        offers accurate flight updates and personalized cushion time with access
                                        to coupons for their favorite retail and service needs and recommendations
                                        for their free time.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="padding"></div>
                    <Row>
                        <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                            <div class="vertical-center">
                                <div className="text">
                                    <p>
                                        Although the main function of the card system is the Quickline 
                                        security reservation system, we created additional transparency 
                                        features to support the user needs most validated in testing and 
                                        via PIT passenger survey:
                                        flight status, security wait times, food options, and low-level navigation.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                            <img src={card2} className="full-width" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section light-background">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Bullet info={bullet[0]}></Bullet>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Bullet info={bullet[1]}></Bullet>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Bullet info={bullet[2]}></Bullet>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section dark-background">
                <Container>
                    <Row>
                        <Col xs={12} sm={9} md={9} lg={9} xl={9}>
                            <img src={team} className="full-width" />
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={3} xl={3}>
                            <div className="vertical-center">
                                <div>
                                    <p>
                                        Most of our prototyping, testing, 
                                        and iteration occurred remotely due to 
                                        COVID-19. We used tools including Miro, 
                                        Mural, Google Forms, Zoom, and UserTesting.com 
                                        to collaborate together and test with travelers remotely. 
                                    </p>
                                    <p>
                                        We kept COVID at front of mind when designing our solutions 
                                        for the hopeful future of airport travel post-pandemic.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section">
                <Idea info={ideation[3]}></Idea>
            </div>
            <div className="ideation-section">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                            <img src={sim1} className="full-width" />
                        </Col>
                        <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                            <div class="">
                                <div className="text">
                                    <p>
                                        Using a research method known as “user enactment,” 
                                        we created a virtual airport and asked our users to 
                                        book a Quickline security reservation by interacting 
                                        with our messages directly via their phone. When they 
                                        “arrived” at our simulated airport as an avatar, they 
                                        spent their pre-reservation time according to their 
                                        normal preference.  
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="padding"></div>
                    <Row>
                        <Col xs={12} sm={5} md={5} lg={5} xl={5}>
                            <div class="">
                                <div className="text">
                                    <p>
                                        On UserTesting.com, we asked users to test our itinerary 
                                        planning and map navigation functionality by completing 
                                        click-through tasks, thinking aloud as they did so. We wanted 
                                        to understand how they plan their travel and what kinds of 
                                        information they need to support them when on-site. 
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={7} md={7} lg={7} xl={7}>
                            <img src={sim2} className="full-width" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="insights ideation-section">
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <div className="vertical-center">
                                <h1>Insights</h1>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            {insights_array}
                        </Col>
                    </Row>
                </Container>
            </div>
            <Phases></Phases>
        </div>
    );
}

export default Prototype;
