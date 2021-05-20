import React from 'react';
import youtube from '../images/social/youtube.svg';
import linkedin from '../images/social/linkedin.svg';
import github from '../images/social/github.svg';
import instagram from '../images/social/instagram.svg';

const SiteMap = () => (
   <div id="site">
      <div className="social">
         <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/anto-pv"><img src={linkedin} alt="linkedin"/></a>
         <a target='_blank' rel="noreferrer" href="https://github.com/anto-pv"><img src={github} alt="linkedin"/></a>
         <a target='_blank' rel="noreferrer" href="https://www.instagram.com/_anto__varghese"><img src={instagram} alt="linkedin"/></a>
         <a target='_blank' rel="noreferrer" href="https://www.youtube.com/channel/UC_9r3s3zO9lHgtKAvBX-5Aw"><img src={youtube} alt="linkedin"/></a>
      </div>
      <div className="sitemap">
         Anto PV@2021
         <ul><b><u>Site map</u></b>
            <a href="\"><li>Home</li></a>
            <a href= "\portfolio"><li>Portfolio</li></a>
         </ul>
      </div>
   </div>
);

export default SiteMap;