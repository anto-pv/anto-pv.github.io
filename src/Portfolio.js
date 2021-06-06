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
  return (
    <div id="portfolio">
      <Meport/>
      <div id ="projects" className = "blue">
        <h1>Projects</h1>
        <div className="content">
          <img src={p1h} alt="heading"/>
          <div className="detail">
            <p className="protext">This project aim to help people to buy and book services according to their
              needs, based on a time slot sitting at home thereby reducing the exposure to outside environment especially druing
              this pandemic. <a target='_blank' rel="noreferrer" href="https://github.com/anto-pv/CloudCart.git" className="butto">Repo</a>
            </p>
            <img src={p1i} alt="cloudcart"/>
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
        <div className="expcontent">
          <p className="company"><span className="point">&#10063;</span>Sysbreeze Technologies, Kinfra Techno Park, Kozhikode</p>
          <p className="post">Post:<b> Intern</b></p>
          <p className="post">Duration: 04-07-2019 to 20-07-2019</p>
          <p className="tech">Web Development Basics<br/>
          Technology(s) Used : HTML, CSS, JS</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;