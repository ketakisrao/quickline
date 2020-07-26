import React from 'react';
import Hero from '../Components/Hero';
import HeroImg from '../assets/prototype/HeroImg.png';
import './index.scss';

const info = {
    title: 'Discovery',
    desc: 'Over the course of 3 month, we conducted 15+ research activities to better understand travelers’ behaviors, attitudes, perceptions, decision making processes and social engagement associated with waiting in queues. ',
    heroImg: HeroImg
};

function Discovery() {
    return (
        <div>
            <Hero info={info}></Hero>
            <div className="content">
            </div>
        </div>
    );
}

export default Discovery;