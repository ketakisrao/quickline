import React from 'react';
import Hero from '../Components/Hero';
import Idea from '../Components/Idea';
import Cards from '../Components/Cards';
import Insight from '../Components/Insight';
import Phases from '../Components/Phases';
import { Container, Col, Row } from 'react-bootstrap';


import HeroImg from '../assets/discovery/HeroImg.png';
import Line from '../assets/discovery/Line.png';
import queue from '../assets/discovery/queue.png';
import queue3 from '../assets/discovery/queue3.png';
import pretotype from '../assets/discovery/pretotype.png';
import q1 from '../assets/discovery/q1.png';
import q2 from '../assets/discovery/q2.png';
import affinity from '../assets/discovery/affinity.png';

import c1 from '../assets/discovery/research.png';
import c2 from '../assets/discovery/thinkaloud.png';
import c3 from '../assets/discovery/ci.png';
import c4 from '../assets/discovery/future.png';
import c5 from '../assets/discovery/diarystudy.png';
import c6 from '../assets/discovery/ar.png';

import tce from '../assets/discovery/tce.png';
import './index.scss';

const info = {
    title: 'Discovery',
    desc: 'Over the course of 3 month, we conducted 15+ research activities to better understand travelers’ behaviors, attitudes, perceptions, decision making processes and social engagement associated with waiting in queues.',
    heroImg: HeroImg
};

const ideation = [
    {
        title: 'Secondary Research',
        desc: (<p>
            We began our discovery phase by conducting secondary research on the different types of queues, the history of queueing theory, and the behaviors found in queueing.
            <img src={queue} className="full-width" />
            </p>)
    },
    {
        title: 'Behaviors in Line',
        desc: (<p className="half-to-full">With some foundational knowledge on queues, we simulated a waiting experience where participants could either choose to stand in line or pick a buzzer to come at a later time. Our three main goals were to understand...<br></br>
        <ul>
                <li>...why people might choose to stand in line vs. getting a buzzer</li>
                <li>...what people do while waiting</li>
                <li>...how people perceive the passage of time while waiting</li>
        </ul>
        <img src={queue3} className="half-width" />
        </p>)
    },
    {
        title: 'Understanding User’s Journey',
        desc: 'Following our line simulation prototype, we sought to understand people’s frustrations and behavior in the airport with the following methods:'
    }
];

const cards = [
    {
        title: 'Semi-structured interview & Guerrilla Research',
        desc: 'Understanding airport traveler’s needs and pain points associated with waiting and traveling in airports',
        img: c1
    },
    {
        title: 'Airport Journey Think Aloud',
        desc: 'Shadowing travelers through Pittsburgh International Airport to map out passengers’ airport journey from home',
        img: c2
    },
    {
        title: 'Contextual Inquiry ',
        desc: 'Observing how supermarkets and Disney approach line-waiting interventions to inspire our own future design solutions ',
        img: c3
    },
    {
        title: 'Future Journey Map (co-creation)',
        desc: 'Inviting our clients to uncover key operations in the airport that supports the passenger’s trip and project the current solution into the future',
        img: c4
    },
    {
        title: 'Diary Study',
        desc: 'Asking travelers to jot down their feelings and thoughts at each stage of their airport journey experience',
        img: c5
    },
    {
        title: 'Analogous World Field Research',
        desc: 'Observing how supermarkets and Disney approach line-waiting interventions to inspire our own future design solutions',
        img: c6
    }
];
const insights = [
    {
        title: "Airports’ unpredictable nature gives travelers anxiety",
        desc: "Travelers feel anxious because they do not know if they will catch their flight, especially when they don’t have visibility into how long they will have to wait in the security line. "
    },
    {
        title: "Guidance and recommendation help reduce travelers’ cognitive load",
        desc: "While traveling, people become anxious due to the large amount of information and things they need to keep track of,  which gives them a high cognitive load."
    },
    {
        title: "A traveler's journey starts at home",
        desc: "A user’s journey doesn’t begin at the airport—it actually starts at home, where the user works backwards, calculates and plans for their upcoming trip. "
    }
];

function Discovery() {
    let insights_array = [], i;
    for (i = 0; i < insights.length; i++) {
        insights_array.push(<Insight info={insights[i]}></Insight>);
    }
    return (
        <div>
            <Hero info={info}></Hero>
            <div>
                <img className="full-width" src={Line} />
            </div>
            <div className="ideation-section">
                <Idea info={ideation[0]}></Idea>
            </div>
            <div className="ideation-section">
                <Idea info={ideation[1]}></Idea>
            </div>
            <div>
                <img className="full-width" src={pretotype} />
            </div>
            <div className="ideation-section">
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={q1} className="full-width" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                            <img src={q2} className="full-width" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="cards ideation-section light-background">
                <Idea info={ideation[2]}></Idea>
                <Container>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Cards info={cards[0]}></Cards>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Cards info={cards[1]}></Cards>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Cards info={cards[2]}></Cards>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Cards info={cards[3]}></Cards>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Cards info={cards[4]}></Cards>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Cards info={cards[5]}></Cards>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <img className="full-width" src={affinity} />
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
            <div className="ideation-section text-center">
                <b>We found these three factors to be important across our user needs:</b>
                <div className="padding"></div>
                <img src={tce} className="half-width"/>
            </div>
            <Phases></Phases>

        </div>
    );
}

export default Discovery;