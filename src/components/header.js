import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../images/icon.jpg'

const Header = () => {
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
   <div id="header">
      <img src={icon} alt="logo"/>
      <div className="hamburger" onClick={hamger}>
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
      </div>
      <ul className="nav-links">
         <li><Link to="/" onClick={hamger}>Home</Link></li>
         <li><Link to="/portfolio" onClick={hamger}>Portfolio</Link></li>
         <li><a href="/portfolio#projects" onClick={hamger}>Projects</a></li>
         <li><a href="/#contact" onClick={hamger}>Contact</a></li>
      </ul>
   </div>
   );
}
export default Header;