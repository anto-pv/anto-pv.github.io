import React from 'react';
import { HashLink } from 'react-router-hash-link';

const SiteMap = () => (
   <div className="sitemap">
         <b>Anto PV@2021</b>
         <ul><b><u>Site map</u></b>
            <HashLink className="sitelaink" to="/#header"><li>Home</li></HashLink>
            <HashLink className="sitelaink" to= "/portfolio#header"><li>Portfolio</li></HashLink>
         </ul>
   </div>
);

export default SiteMap;