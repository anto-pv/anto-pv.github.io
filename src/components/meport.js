import React from 'react';
import me from '../images/me.jpg';
import github from '../images/portfolio/gihub.svg';
import linekdin from '../images/portfolio/linkedin.svg';
import codechef from '../images/portfolio/codechef.svg';
import hackerrank from '../images/portfolio/hackerrank.svg';
import codeforce from '../images/portfolio/codeforces.svg';
import { HashLink } from 'react-router-hash-link';

const Meport = () => (
    <div className="me">
        <svg id="one" height="270" width="360">
            <circle cx="10%" cy="65%" r="50%" fill="#5C69E5" />
        </svg>
        <div className="box">
            <img className="pic" src={me} alt="me"/>
            <div className="medetail">
                <p className="name">Anto P V</p>
                <p className="subname">Developer, Designer, Engineer.</p>
                <div className="imgline">
                    <a target='_blank' rel="noreferrer" href="https://github.com/anto-pv"><img className="nametag" src={github} alt="github"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/anto-pv"><img className="nametag" src={linekdin} alt="linkedin"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://www.codechef.com/users/anto_pv"><img className="nametag" src={codechef} alt="codechef"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://www.hackerrank.com/antopv"><img className="nametag" src={hackerrank} alt="hackerrank"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://codeforces.com/profile/anto-pv"><img className="nametag" src={codeforce} alt="codeforce"></img></a>
                </div>
                <div className="lboxes">
                    <div className="linkbox">
                        <a className="linkbotton" target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1LMt5V2u6dxe_aQWKABUUxBYF9rIHrmJG/view?usp=sharing">Resume</a>
                        <HashLink to ="/#about" className="linkbotton">About</HashLink>
                    </div>
                    <div className="linkbox">
                        <HashLink smooth to ="/portfolio#projects" className="linkbotton">Projects</HashLink>
                        <HashLink smooth to ="/portfolio#experiences" className="linkbotton">Experiences</HashLink>
                        <HashLink smooth to ="/portfolio/#skills" className="linkbotton" >Skills</HashLink>
                    </div>
                </div>
            </div>
        </div>
        <svg height="360" width="360">
            <circle cx="250" cy="80" r="58%" fill="#5C69E5" />
        </svg>
    </div>
);

export default Meport;