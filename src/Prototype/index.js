import React from 'react';
import Hero from '../Components/Hero';
import HeroImg from '../assets/prototype/HeroImg.png';
import './index.scss';

const info = {
    title: 'Prototype',
    desc: 'We ideated on the features of each prototype that would be most useful to our duel channel solution. We conducted a competitive analysis of existing best-in-class airport applications and secondary research into existing virtual queue system technology to inform our design decisions.',
    heroImg: HeroImg
};

function Prototype() {
    return (
        <div>
            <Hero info={info}></Hero>
            <div className="content">
                <p>Hi I am Proto</p>
            </div>
        </div>
    );
}

export default Prototype;
