import sass from './images/skills/sass.svg';
import figma from './images/skills/figma.svg';
import nodejs from './images/skills/nodejs.svg';
import react from './images/skills/react.svg';
import psql from './images/skills/psql.svg';
import mysql from './images/skills/mysql.svg';
import js from './images/skills/js.svg';
import python from './images/skills/python.svg';
import cpp from './images/skills/cpp.svg';
import nest from './images/skills/nest.svg';
import git from './images/skills/git.svg';
import npm from './images/skills/npm.svg';
import ps from './images/skills/ps.svg';
import hml from './images/skills/hml.svg';
import cs from './images/skills/cs.svg';
import Meport from './components/meport';
import p1h from './images/projects/p1h.png';
import p1i from './images/projects/p1i.jpg';

function Portfolio() {
  const hamger = ()=>{
    const navLinks = document.querySelector(".option-links");
    const links = document.querySelectorAll(".option-links li");
    if(navLinks != null){
       navLinks.classList.toggle("open");
       links.forEach(link =>{
          if(link != null){
             link.classList.toggle("fade");
          }
       });
    }
  }

  return (
    <div id="portfolio">
      <div className="hamburgerc" onClick={hamger}>
      </div>
      <ul className="option-links">
         <li><a href="#projects">Projects</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#experiences">Experiences</a></li>
         <li><a href="#Certificates">Certificates</a></li>
      </ul>
      <Meport/>
      <div className = "meandlink">
        
      </div>
      <div id ="projects" className = "blue">
        <h1>Projects</h1>
        <div className="content">
          <img src={p1h} alt="heading"/>
          <div className="detail">
            <p>This project aim to help people to buy and book services according to their
              needs, based on a time slot sitting at home thereby reducing the exposure to outside environment especially druing
              this pandemic. 
            </p>
            <img src={p1i} alt=""/>
          </div>
        </div>
      </div>
      <div id="skills" className = "skillwhite">
        <h1>Skills</h1>
        <div className="language">
          <img src={cpp} alt="c plus plus"/>
          <img src={python} alt="python"/>
          <img src={js} alt="javascript"/>
        </div>
        <div className="database">
          <img src={mysql} alt="mysql"/>
          <img src={psql} alt="postgres-sql"/>
        </div>
        <div className="web">
          <img src={hml} alt="html"/>
          <img src={cs} alt="css"/>
          <img src={sass} alt="sass"/>
          <img src={figma} alt="figma"/>
          <img src={react} alt="reactjs"/>
          <img src={nodejs} alt="nodejs"/>
          <img src={nest} alt="nestjs"/>
        </div>
        <div className="soft">
          <img src={git} alt="git"/>
          <img src={npm} alt="npm"/>
          <img src={ps} alt="photoshop"/>
        </div>
      </div>
      <div id ="experiences" className = "blue">
        <h1>Experiences</h1>
        <div className="content">
          sysbrees
        </div>
      </div>
      <div id="Certificates" className = "skillwhite">
        <h1>Certificates</h1>
        <div>
          Blast of prize
        </div>
      </div>
    </div>
  );
}

export default Portfolio;