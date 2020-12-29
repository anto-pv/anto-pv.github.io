import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerstyles from "./header.module.scss"
import logo from "../images/icon.jpg"

const Header = ({ title }) => {
  const list=()=>{
    if(title==="Blog" || title==="Portfolio" || title==="404: Not found"){
      return(<ul className={headerstyles.navList}>
        <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to="/">Home</Link></li>
      <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to="/blog">Blog</Link></li>
      <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to="/portfolio">Portfolio</Link></li>
      </ul>);
    }else{
      return(<ul className={headerstyles.navList}>
      <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to="/">Home</Link></li>
      <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to="/blog">Blog</Link></li>
      <li><Link className={headerstyles.navItem} activeClassName={headerstyles.activeNavItem} to="/portfolio">Portfolio</Link></li>
      <li><a className={headerstyles.navItem} href="#contact">Contact</a></li>
      </ul>)
    }
  }
  return(
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div id = "header"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <img src = {logo} alt="logo"></img>
        </Link>
      </h1>
        {list()}
    </div>
  </header>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
