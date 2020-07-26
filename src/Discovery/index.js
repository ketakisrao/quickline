import React from 'react';
import Hero from '../Components/Hero';
import './index.scss';

const info = {
    title: ''
};

function Discovery() {
    return (
        <div>
            <Hero></Hero>
            <div className="content">
                <p>Hi I am KR</p>
            </div>
        </div>
    );
}

export default Discovery;
