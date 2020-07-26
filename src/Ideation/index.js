import React from 'react';
import Hero from '../Components/Hero';
import HeroImg from '../assets/prototype/HeroImg.png';
import './index.scss';

const info = {
    title: 'Ideation',
    desc: 'We generated multiple design artifacts to continuously refine our core problem and brainstormed on various solutions that focus on providing PIT travelers transparency, control, and efficiency.',
    heroImg: HeroImg
};

function Ideation() {
    return (
        <div>
            <Hero info={info}></Hero>
            <div className="content">
                <p>Hi I am Ideation</p>
            </div>
        </div>
    );
}

export default Ideation;
