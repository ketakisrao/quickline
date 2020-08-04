import React from 'react';
import Hero from '../Components/Hero';
import Idea from '../Components/Idea';
import Insight from '../Components/Insight';
import Hover from '../Components/Hover';
import Phases from '../Components/Phases';
import QuoteCarousel from '../Components/QuoteCarousel';
import './index.scss';


import HeroImg from '../assets/ideation/HeroImg.png';
import HMWIcon from '../assets/ideation/HMWIcon.png';
import crazy8 from '../assets/ideation/Crazy8.png';
import idea1 from '../assets/ideation/idea1.png';
import idea2 from '../assets/ideation/idea2.png';
import idea3 from '../assets/ideation/idea3.png';
import story1 from '../assets/ideation/story1.png';
import quote1 from '../assets/ideation/quote1.svg';
import quote2 from '../assets/ideation/quote2.svg';


import st1 from '../assets/ideation/st1.png';
import st2 from '../assets/ideation/st2.png';
import st3 from '../assets/ideation/st3.png';
import st4 from '../assets/ideation/st4.png';

import nuf from '../assets/ideation/NUF.png';
import matrix from '../assets/ideation/Matrix.png';



import { Container, Col, Row } from 'react-bootstrap';


const info = {
    title: 'Ideation',
    desc: 'We generated multiple design artifacts to continuously refine our core problem and brainstormed on various solutions that focus on providing PIT travelers transparency, control, and efficiency.',
    heroImg: HeroImg
};

const ideation = [
    {
        title: "Crazy 8s",
        desc: "Armed with data from primary and secondary research, we conducted “Crazy 8s” to rapidly brainstorm a wide variety of interventions based on the user needs we had uncovered. The activity produced some novel systems—including digital/physical ecologies, applications for emerging technology, and outside-the-box interactions."
    },
    {
        title: "Conceptual Prototype",
        desc: "To explore travelers’ need for transparency, we recruited 10+ PIT travelers to test out our conceptual prototype. In this research, we explored traveler’s need to reduce high cognitive load during their airport planning journey.",
    },
    {
        title: "Design Approach",
        desc: "As we synthesized our findings from our conceptual prototype and earlier research on pain points and opportunities, we decided to approach solving user needs and pain points through three approaches.",
    },
    {
        title: "Speed Dating",
        desc: "Based on the three approaches described above, we generated 20+ storyboards that describe a future where travelers’ frustration is resolved. Participants were guided to explain whether they would actually enjoy the proposed futures. This research helps us reduce the risk of designing a product or service that travelers will not adopt.",
    }
];

const insights = [
    {
        title: "The granularity of the information needs to be adjustable.",
        desc: "People have different preferences on how granular the information should be. Therefore, the system should be able to flex to account for these differences."
    },
    {
        title: "Conveying trustworthiness is the key to adoption.",
        desc: "People  are anxious to know that provided information is accurate and up-to-date. There is a small margin of error. “If it [doesn’t] work once, I [will] lose trust in it.”"
    },
    {
        title: "Customization is appreciated.",
        desc: "Its important to most travelers to be able to adjust “cushion time” and decide what activities to include in their airport journey."
    }
];


const hover = [
    {
        title: 'Line Engagement Activities',
        desc: 'Create a positive experience with engaging activities',
        img: st1
    },
    {
        title: 'Lateness Recovery Tool',
        desc: 'Skip the security line by purchasing a FastPass',
        img: st2
    },
    {
        title: 'Planning Support Tool',
        desc: 'Predict airport journey by having more transparency ',
        img: st3
    },
    {
        title: 'Virtual Queue System',
        desc: 'Provide control and comfort with a virtual queue',
        img: st4
    }
];

const quotes = [
    "Seeing this makes me feel more confident about the time I want to leave [for airport]",
    "[This] gives me a lot of peace of mind knowing when I will arrive",
    "Whether I trust this will depend on my experience with it",
    "Normally I stresses about ‘did I give myself enough time‘ and  ‘What’s going to happen?’"
];

function Ideation() {
    let insights_array = [], i;
    for (i = 0; i < insights.length; i++) {
        insights_array.push(<Insight info={insights[i]}></Insight>);
    }
    return (
        <div>
            <Hero info={info}></Hero>
            <div className="hmw">
                <div className="hmw-container">
                    <div className="hmw-img">
                        <img src={HMWIcon} className="full-width" />
                    </div>
                    <div className="hmw-question">
                        <p>
                            How might we <span>reduce travelers’ frustration</span> and anxiety in the security
                            line by providing more <span>transparency, control, and efficiency?</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="ideation-section">
                <Idea info={ideation[0]}></Idea>
                <div className="padding"></div>
                <img src={crazy8} className="full-width" />
            </div>
            <div className="ideation-section light-background">
                <Idea info={ideation[1]}></Idea>
                <QuoteCarousel info={quotes}></QuoteCarousel>
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
            <div className="ideation-section">
                <Idea info={ideation[2]}></Idea>
                <div className="padding"></div>
                <div className="design-approach">
                    <img src={idea1} />
                    <img src={idea2} />
                    <img src={idea3} />
                </div>
                {/* <Container fluid className="design-approach">
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <img src={idea1} className="full-width" />
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <img src={idea2} className="full-width" />
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <img src={idea3} className="full-width" />
                        </Col>
                    </Row>
                </Container> */}
            </div>
            <div className="ideation-section">
                <Idea info={ideation[3]}></Idea>
                <div className="padding"></div>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={story1} className="full-width" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={quote1} className="full-width quote" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={story1} className="full-width" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={quote2} className="full-width quote" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="ideation-section light-bg">
                <h5 className="st-header text-center">The four concepts that generated the most excitement:</h5>
                <div className="padding"></div>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Hover info={hover[0]}></Hover>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Hover info={hover[1]}></Hover>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Hover info={hover[2]}></Hover>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Hover info={hover[3]}></Hover>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="narrow ideation-section">
                <h4 className="text-center">Narrow Down</h4>
                <p>
                    To further narrow down our concepts, we invited our clients
                    and their guests to participate in a NUF evaluation sessions and
                    evaluated our four concepts internally on an prioritization matrix.
                    These two activities helped us narrow to two concepts.
                </p>
            </div>
            <div className="ideation-section">
                <div className="narrow-section">
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <img src={nuf} className="full-width" />
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <div className="vertical-center">
                                    <div>
                                        <h5>NUF Test</h5>
                                        <p>Identify and zoom in on concepts that are innovative
                                        to the airport industry, useful to travelers, and feasible to implement.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="narrow-section">
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <div className="vertical-center">
                                    <div>
                                        <h5>Prioritization Matrix</h5>
                                        <p>Identify concepts that have a highly positive
                                        impact on the airport experience and would be
                                        challenging to our multidisciplinary team.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <img src={matrix} className="full-width" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Phases></Phases>
        </div>
    );
}

export default Ideation;

