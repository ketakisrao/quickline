import React from 'react';
import Hero from '../Components/Hero';
import AboutC from '../Components/AboutC';
import HeroImg from '../assets/about/HeroImg.svg';



import k from '../assets/about/ketaki.png';
import e from '../assets/about/emily.png';
import i from '../assets/about/irene.png';
import l from '../assets/about/lauren.png';
import d from '../assets/about/denny.png';
import w from '../assets/about/wendy.png';


import './index.scss';

const info = {
    title: 'Meet Our Team',
    desc: 'We are team of six masters students at the Human-Computer Interaction Institute at Carnegie Mellon University. Our various academic and professional backgrounds make us a dynamic problem-solving and design unit.',
    heroImg: HeroImg
};

const about = [
    {
        title: 'Engineering Lead',
        name: 'Ketaki Rao',
        desc: 'As a UX Engineer and I am extremely passionate about using the latest front-end technology to build usable & useful interfaces. I have experience working with designers, developers and the business and know how to effectively communicate with all three.',
        portfolio: 'ketakisrao.com',
        img: k
    },
    {
        title: 'Project Manager',
        name: 'Emily Yang',
        desc: 'I worked as an experience designer at an ed-tech company for a year before entering MHCI. My engineering background has provided me the skills to solve problems and design solutions in a creative and analytical way.',
        portfolio: 'EMILYYANG.ME',
        img: e
    },
    {
        title: 'Research Lead',
        name: 'Irene Yu',
        desc: 'I am a design researcher with a background in psychology and behavioral economics. I’m passionate about crafting experiences that understand how the human brain works and designing decision environments that enable users to make better choices.',
        portfolio: 'ireneyu.space',
        img: i
    },
    {
        title: 'Research Lead',
        name: 'Lauren Jablonski',
        desc: 'With a background in Publishing and Marketing, I specialize in User Research and Content Strategy. I love creating experiences that connect users with innovative solutions for their needs.',
        portfolio: 'Ljablonski.com',
        img: l
    },
    {
        title: 'Design Lead',
        name: 'Denny Check',
        desc: 'I’m a UX/product designer with a background in interfaces, branding,  and environmental graphics. I came to MCHI from a firm where I helped design next-generation retail concepts. I’m interested in how people and computers interact in physical space.',
        portfolio: 'dennycheck.com',
        img: d
    },
    {
        title: 'TECHnology Lead',
        name: 'Wendy Chang',
        desc: 'I am a UX+product designer with 4 years of experience in design consultancy and automotive in-house design team. I am passionate about crafting meaningful interactions between humans and the world.',
        portfolio: 'yuchichang.com',
        img: w
    }
];

function About() {
    let about_array = [], i;
    for (i = 0; i < about.length; i++) {
        about_array.push(<AboutC info={about[i]}></AboutC>);
    }
    return (
        <div>
            <Hero info={info}></Hero>
            <div className="ideation-section">
                {about_array}
            </div>
        </div>
    );
}

export default About;
