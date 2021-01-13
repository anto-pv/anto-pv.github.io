import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/icon.jpg"

const Header = ({ title }) => {
  const list=()=>{
    if(title === "Home"){
      return(<div className="nav-list">
        <a className="nav-item" href="#contact">Contact</a>
      </div>)
    }
  }
  return(
  <header id="header" className="navbar navbar-light bg-dark" >
      <ul>
      <li className="logo"><Link
        to="/"
      >
      <img src = {logo} alt="logo" className="header-logo"></img>
      </Link></li>
      <li><Link className="nav-item" activeClassName="active-nav-item" to="/">Home</Link></li>
      <li><Link className="nav-item" activeClassName="active-nav-item" to="/blog">Blog</Link></li>
      <li><Link className="nav-item" activeClassName="active-nav-item" to="/skills">Skills</Link></li>
      <li>{list()}</li></ul>
  </header>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
