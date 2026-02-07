import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/config';

const SiteMap = () => (
   <div className="sitemap">
      <div className="sitemap-left">
         © 2026 {personalInfo.name}. All rights reserved.
      </div>
      <div className="sitemap-right">
         <Link to="/links" className="sitemap-link">Links</Link>
      </div>
   </div>
);

export default SiteMap;
