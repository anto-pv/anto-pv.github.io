import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/icon.jpg"

const Header = ({ title }) => {
  const list=()=>{
    if(title==="Blog" || title==="Portfolio" || title==="404: Not found"){
      return(<div className="nav-list">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/blog">Blog</Link>
        <Link className="nav-item" activeClassName="active-nav-item" to="/portfolio">Portfolio</Link>
      </div>);
    }else{
      return(<div className="nav-list">
        <Link className="nav-item" activeClassName="active-nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/blog">Blog</Link>
        <Link className="nav-item" to="/portfolio">Portfolio</Link>
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
