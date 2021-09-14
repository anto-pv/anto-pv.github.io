import React from 'react';
import me from '../images/me.jpg';
import github from '../images/portfolio/gihub.svg';
import linekdin from '../images/portfolio/linkedin.svg';
import codechef from '../images/portfolio/codechef.svg';
import hackerrank from '../images/portfolio/hackerrank.svg';
import codeforce from '../images/portfolio/codeforces.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Meport = () =>{
    const hamger = ()=>{
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        if(navLinks != null){
           navLinks.classList.toggle("open");
           links.forEach(link =>{
              if(link != null){
                 link.classList.toggle("fade");
              }
           });
        }
     }
    return(
    <div className="me">
        <svg id="one" height="270" width="360">
            <circle cx="10%" cy="65%" r="50%" fill="#5C69E5" />
        </svg>
        <nav>
            <div className="hamburger" onClick={hamger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-links">
                <li><Link to="/" onClick={hamger}>Home</Link></li>
                <li><Link to="/portfolio" onClick={hamger}>Portfolio</Link></li>
                <li><HashLink to="/portfolio#projects" onClick={hamger}>Projects</HashLink></li>
                <li><HashLink to="/#contact" onClick={hamger}>Contact</HashLink></li>
            </ul>
        </nav>
        <div className="box">
            <img className="pic" src={me} alt="me"/>
            <div className="medetail">
                <h1 className="name">Anto P V</h1>
                <h1 className="subname">Developer, Designer, Engineer.</h1>
                <div className="imgline">
                    <a target='_blank' rel="noreferrer" href="https://github.com/anto-pv"><img className="nametag" src={github} alt="github"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/anto-pv"><img className="nametag" src={linekdin} alt="linkedin"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://www.codechef.com/users/anto_pv"><img className="nametag" src={codechef} alt="codechef"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://www.hackerrank.com/antopv"><img className="nametag" src={hackerrank} alt="hackerrank"></img></a>
                    <a target='_blank' rel="noreferrer" href="https://codeforces.com/profile/anto-pv"><img className="nametag" src={codeforce} alt="codeforce"></img></a>
                </div>
                <div className="lboxes">
                    <div className="linkbox">
                        <a className="linkbotton" target='_blank' rel="noreferrer" href="https://drive.google.com/file/d/1d4vdYvNsdjmxcTPGAOrfidq6WEpLUAJ1/view?usp=sharing">Resume</a>
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
}
export default Meport;