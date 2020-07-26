import React from 'react';
import Hero from '../Components/Hero';
import './index.scss';

const info = {
    title: ''
};

function About() {
    return (
        <div>
            <Hero></Hero>
            <div className="content">
                <p>Hi I am About</p>
            </div>
        </div>
    );
}

export default About;
